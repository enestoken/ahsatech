import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import path from 'path'

// In-Memory Rate Limiting: IP bazlı kayan pencere
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 dakika
const MAX_REQUESTS_PER_WINDOW = 5 // Dakikada maks 5 istek

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false // Engellendi
  }

  validTimestamps.push(now)
  rateLimitMap.set(ip, validTimestamps)
  return true
}

// Güvenlik: İzin verilen ve yasaklı dosya uzantıları
const ALLOWED_EXTENSIONS = [
  '.pdf',
  '.zip',
  '.rar',
  '.tar',
  '.step',
  '.stp',
  '.dxf',
  '.cad',
  '.sch',
  '.brd',
  '.pcb',
]

const BLOCKED_EXTENSIONS = [
  '.exe',
  '.bat',
  '.cmd',
  '.sh',
  '.bash',
  '.php',
  '.js',
  '.mjs',
  '.cjs',
  '.py',
  '.bin',
  '.msi',
  '.jar',
  '.vbs',
  '.ps1',
  '.scr',
  '.com',
  '.pif',
  '.svg',
  '.html',
  '.htm',
]

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50 Megabyte

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Kontrolü
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1'

    if (!checkRateLimit(clientIp)) {
      console.warn(`[RFQ-Submit Security] Rate limit aşıldı! IP: ${clientIp}`)
      return NextResponse.json(
        {
          success: false,
          error: 'Güvenlik: Çok fazla teklif talebi gönderildi. Lütfen 1 dakika sonra tekrar deneyiniz.',
        },
        { status: 429 }
      )
    }

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const contentType = req.headers.get('content-type') || ''

    let contactName = ''
    let companyName = ''
    let email = ''
    let phone = ''
    let domain = 'embedded-hardware'
    let projectPhase = 'prototype'
    let requirements = ''
    let ndaAgreed = true
    let attachedFileId: number | undefined = undefined

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      contactName = (formData.get('contactName') as string) || ''
      companyName = (formData.get('companyName') as string) || ''
      email = (formData.get('email') as string) || ''
      phone = (formData.get('phone') as string) || ''
      domain = (formData.get('domain') as string) || 'embedded-hardware'
      projectPhase = (formData.get('projectPhase') as string) || 'prototype'
      requirements = (formData.get('requirements') as string) || ''
      const ndaVal = formData.get('ndaAgreed')
      ndaAgreed = ndaVal === 'true' || ndaVal === 'on' || ndaVal === '1'

      const file = formData.get('file') as File | null
      if (file && file.size > 0 && file.name) {
        // 2. Dosya Güvenlik Filtreleri
        // Boyut kontrolü
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { success: false, error: 'Dosya boyutu maksimum 50MB sınırını aşamaz.' },
            { status: 400 }
          )
        }

        // Uzantı kontrolü
        const rawFileName = path.basename(file.name)
        const fileExt = path.extname(rawFileName).toLowerCase()

        if (BLOCKED_EXTENSIONS.includes(fileExt) || !ALLOWED_EXTENSIONS.includes(fileExt)) {
          console.warn(`[RFQ-Submit Security] Zararlı/İzinsiz dosya uzantısı engellendi: ${fileExt}`)
          return NextResponse.json(
            {
              success: false,
              error: `Güvenlik Uyarısı: "${fileExt}" uzantılı dosyalar kabul edilmemektedir. Yalnızca CAD, Gerber (.zip), STEP ve PDF formatları yüklenebilir.`,
            },
            { status: 400 }
          )
        }

        // İsim sanitizasyonu (Path traversal ve zararlı karakterleri engelleme)
        const sanitizedFileName = rawFileName.replace(/[^a-zA-Z0-9._-]/g, '_')

        try {
          const bytes = await file.arrayBuffer()
          const buffer = Buffer.from(bytes)

          const mediaDoc = await payload.create({
            collection: 'media',
            data: {
              alt: `${companyName || contactName || 'Müşteri'} - RFQ Teknik Dosyası`,
              caption: sanitizedFileName,
            },
            file: {
              data: buffer,
              name: sanitizedFileName,
              mimetype: file.type || 'application/octet-stream',
              size: buffer.length,
            },
          })

          attachedFileId = typeof mediaDoc.id === 'number' ? mediaDoc.id : Number(mediaDoc.id)
          console.log(`[RFQ-Submit] Güvenli dosya media kütüphanesine yüklendi: ID=${mediaDoc.id} (${sanitizedFileName})`)
        } catch (fileErr) {
          console.error('[RFQ-Submit] Dosya yüklenirken hata:', fileErr)
          return NextResponse.json(
            { success: false, error: 'Dosya sunucuya kaydedilirken bir hata oluştu.' },
            { status: 500 }
          )
        }
      }
    } else {
      const body = await req.json()
      contactName = body.contactName || ''
      companyName = body.companyName || ''
      email = body.email || ''
      phone = body.phone || ''
      domain = body.domain || 'embedded-hardware'
      projectPhase = body.projectPhase || 'prototype'
      requirements = body.requirements || ''
      ndaAgreed = body.ndaAgreed !== undefined ? Boolean(body.ndaAgreed) : true
      attachedFileId = body.attachedFile ? Number(body.attachedFile) : undefined
    }

    if (!contactName || !email) {
      return NextResponse.json(
        { success: false, error: 'Yetkili adı ve e-posta adresi zorunludur.' },
        { status: 400 }
      )
    }

    // RFQ Submissions collection kaydı oluşturma
    const submission = await payload.create({
      collection: 'rfq-submissions',
      data: {
        status: 'new',
        contactName,
        companyName: companyName || 'Bireysel / Doğrudan Başvuru',
        email,
        phone: phone || '-',
        domain: domain as any,
        projectPhase: projectPhase as any,
        requirements: requirements || 'Teknik ister belirtilmedi.',
        attachedFile: attachedFileId,
        ndaAgreed,
        internalNotes: 'Web RFQ Teklif Masası üzerinden yeni talep iletildi.',
      },
    })

    console.log(
      `[RFQ-Submit] Yeni teklif talebi kaydedildi: ID=${submission.id}, Kurum=${companyName}, E-posta=${email}`
    )

    return NextResponse.json({
      success: true,
      doc: submission,
      trackingCode: `AHSA-RFQ-2026-${submission.id}`,
      message: 'Teknik teklif talebiniz başarıyla mühendislik masamıza iletildi.',
    })
  } catch (err: any) {
    console.error('[RFQ-Submit] Sunucu hatası:', err)
    return NextResponse.json(
      { success: false, error: err.message || 'Sunucu hatası meydana geldi.' },
      { status: 500 }
    )
  }
}
