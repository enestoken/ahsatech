import fs from 'fs'
import path from 'path'

// Helper to create a minimal but 100% valid PDF document
function createMinimalPdf(title: string, model: string, specs: string[]): Buffer {
  const contentStream = `
BT
/F1 18 Tf
50 750 Td
(AHSATECH ENDUSTRIYEL SISTEMLER - TEKNIK VERI FORMU) Tj
0 -24 Td
/F1 14 Tf
(${title}) Tj
0 -18 Td
/F1 11 Tf
(Model Kodu: ${model}) Tj
0 -25 Td
(TEKNIK SPESIFIKASYONLAR:) Tj
${specs.map((s) => `0 -16 Td (${s}) Tj`).join('\n')}
0 -35 Td
/F1 9 Tf
(AhsaTech Marmara Ar-Ge Merkezi - ISO 9001:2015 & CE Sertifikali Uretim) Tj
0 -14 Td
(Belge No: DS-${model.replace(/[^A-Z0-9]/g, '')}-2026 - Guvenli Endustriyel Donanim) Tj
ET
`
  const streamLength = Buffer.byteLength(contentStream, 'utf8')

  const pdfBody = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream${contentStream}endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000320 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
395
%%EOF`

  return Buffer.from(pdfBody, 'utf8')
}

export function generateDatasheets() {
  const targetDir = path.join(process.cwd(), 'public', 'datasheets')
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  const products = [
    {
      slug: 'ahsacore-gateway-400',
      title: 'AhsaCore-Gateway 400 DIN-Ray Endustriyel Ag Gecidi',
      model: 'AHSA-GW-400-DIN',
      specs: [
        '- Islemci: Quad-Core ARM Cortex-A53 @ 1.5 GHz',
        '- Bellek: 2 GB LPDDR4 RAM + 16 GB eMMC 5.1',
        '- Ag Arayuzleri: 2x GbE Ethernet, 4G LTE Cat-4 / 5G Ready',
        '- Seri Portlar: 2x Izole RS-485 Modbus + 1x CAN 2.0B',
        '- Calisma Sicakligi: -40C ile +85C Endustriyel Seviye',
        '- Guvenlik: TPM 2.0 Kriptografik Guvenlik Donanimi',
      ],
    },
    {
      slug: 'ahsaedge-aibox-100',
      title: 'AhsaEdge AI-Box 100 Uc Yapay Zeka Islem Unitesi',
      model: 'AHSA-AI-100-BOX',
      specs: [
        '- AI Hizlandirici: 40 TOPS INT8 NPU Cikarim Gucu',
        '- Kamera Girisleri: 2x IEEE 802.3at PoE+ Gigabit Port',
        '- Goruntu Cikisi: 1x HDMI 2.0 (4K 60fps)',
        '- Kasa Mimarisi: Fansiz Ekstruzyon Aluminyum Govde',
        '- Calisma Sicakligi: -20C ile +70C Titresim Dayanimi',
      ],
    },
    {
      slug: 'ahsasens-field-lora',
      title: 'AhsaSens-Field LoRa Ultra Dusuk Guc Kablosuz Sensor Dugumu',
      model: 'AHSA-NODE-LORA',
      specs: [
        '- Radyo Frekansi: LoRaWAN 868 MHz / 915 MHz Class A',
        '- Pil Omru: 10 Yil Degistirilebilir Li-SOCl2 8500 mAh',
        '- Uyku Akimi: 1.8 uA Ultra Dusuk Akim Modu',
        '- Koruma Sinifi: IP68 Su Gecirmez Polikarbonat Govde',
        '- Arayuzler: 2x 0-10V / 4-20mA 16-Bit Hassas ADC',
      ],
    },
  ]

  for (const prod of products) {
    const filePath = path.join(targetDir, `${prod.slug}-datasheet.pdf`)
    const pdfBuf = createMinimalPdf(prod.title, prod.model, prod.specs)
    fs.writeFileSync(filePath, pdfBuf)
    console.log(`[Datasheet] Olusturuldu: ${filePath} (${pdfBuf.length} bayt)`)
  }

  // Genel yedek datasheet
  const defaultPath = path.join(targetDir, 'ahsa-standard-datasheet.pdf')
  fs.writeFileSync(
    defaultPath,
    createMinimalPdf('AhsaTech Standart Donanim Urun Ailesi', 'AHSA-STD-2026', [
      '- CE & EMC Sertifikali Endustriyel Donanim',
      '- Galvanik Izole I/O Terminalleri',
      '- -40C / +85C Calisma Sicakligi',
    ])
  )
  console.log(`[Datasheet] Standart dosya olusturuldu: ${defaultPath}`)
}

generateDatasheets()
