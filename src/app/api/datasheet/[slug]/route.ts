import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const cleanSlug = slug.replace(/[^a-zA-Z0-9_-]/g, '')

  const exactFile = path.join(process.cwd(), 'public', 'datasheets', `${cleanSlug}-datasheet.pdf`)
  const defaultFile = path.join(process.cwd(), 'public', 'datasheets', 'ahsa-standard-datasheet.pdf')

  let targetPath = defaultFile
  if (fs.existsSync(exactFile)) {
    targetPath = exactFile
  } else if (!fs.existsSync(defaultFile)) {
    return new NextResponse('Datasheet dokümanı henüz yüklenmedi.', { status: 404 })
  }

  const fileBuffer = fs.readFileSync(targetPath)

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="AhsaTech-${cleanSlug}-Datasheet.pdf"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
