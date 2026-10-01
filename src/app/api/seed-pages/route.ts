import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  try {
    const payload = await getPayload({
      config: configPromise,
    })

    // 1. Ana Sayfa (Home Page Builder)
    const existingHome = await payload.find({
      collection: 'pages',
      where: {
        or: [{ isHome: { equals: true } }, { slug: { equals: 'ana-sayfa' } }],
      },
      limit: 1,
    })

    const homeLayout = [
      {
        blockType: 'heroBlock',
        eyebrow: 'YENİ NESİL MÜHENDİSLİK ÇÖZÜMLERİ',
        heading: 'Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
        description:
          'AhsaTech; endüstriyel IoT, gömülü sistemler, yapay zekâ destekli kurumsal yazılımlar ve donanım tasarımıyla global standartlarda anahtar teslim mühendislik çözümleri üretir.',
        primaryBtnText: 'Projelerimizi İnceleyin',
        primaryBtnUrl: '/projelerimiz',
        secondaryBtnText: 'Çözüm Kataloğu',
        secondaryBtnUrl: '/urunler',
      },
      {
        blockType: 'telemetryBlock',
        badge: 'Sistem Telemetrisi',
        feedStatus: 'LIVE FEED : CLOUD_01',
        chipModel: 'AHSA-STM32-H7',
        chipClock: '480 MHz',
        metrics: [
          { label: 'Uptime Oranı', value: '%99.98', subtext: 'Endüstriyel Seviye' },
          { label: 'Tamamlanan', value: '40+', subtext: 'Donanım & Yazılım' },
          { label: 'Aktif Cihaz', value: '12 Ülke', subtext: 'Saha Telemetrisi' },
        ],
      },
      {
        blockType: 'competenciesBlock',
        eyebrow: 'Mühendislik Yetkinliklerimiz',
        title: 'Uçtan Uca Entegre Teknoloji Sütunları',
        description:
          'Donanım prototiplemesinden dağıtık bulut mimarilerine uzanan uzman kadromuz ile kritik operasyonel süreçlerinizi güvenle dijitalleştiriyoruz.',
      },
      {
        blockType: 'featuredProjectsBlock',
        eyebrow: 'Portfolyo & Referanslar',
        title: 'Öne Çıkan Saha Çalışmalarımız',
        viewAllBtnText: 'Tüm Projeleri Keşfet',
        limit: 3,
      },
      {
        blockType: 'synergyBlock',
        eyebrow: 'Tek Çatı Altında Bütünleşik Çözüm',
        title: 'Donanım ile Yazılımın Kusursuz Uyumu',
        description:
          'Genellikle yazılım firmaları donanımı, donanım tasarımcıları ise bulut altyapısını üçüncü taraflara devreder. AhsaTech’te PCB şemasından mikrodenetleyici bellenimine (firmware) ve oradan küresel web gösterge paneline kadar tüm katmanlar aynı mühendislik disipliniyle üretilir.',
        guaranteeBadge: '✦ Uçtan Uca Sorumluluk & Garanti',
      },
      {
        blockType: 'trustMetricsBlock',
        standardsTitle: 'Sertifikalı Kalite Yönetimi',
        standardsSubtitle: 'Ürünlerimiz ve süreçlerimiz global endüstri normlarına göre denetlenmektedir.',
      },
      {
        blockType: 'miniContactBlock',
        eyebrow: 'Projenizi Hayata Geçirelim',
        title: 'Fikrinizi Seri Üretime ve Global Pazara Taşımaya Hazır mısınız?',
        description:
          'Mühendislik ekibimiz gereksinimlerinizi analiz etsin; donanım, gömülü yazılım ve bulut mimarisi için kapsamlı bir yol haritası ve teknik fizibilite sunalım.',
        directEmail: 'info@ahsatech.com',
        formTitle: 'Hızlı İhtiyaç Bildirimi',
        formSubtitle: 'Uzman mühendislerimiz 24 saat içinde dönüş yapacaktır.',
      },
    ]

    let homeDocId = null
    if (existingHome.totalDocs === 0) {
      const created = await payload.create({
        collection: 'pages',
        data: {
          title: 'AhsaTech Ana Sayfa',
          slug: 'ana-sayfa',
          isHome: true,
          metaDescription:
            'AhsaTech — Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri. Savunma, enerji ve endüstriyel IoT için görev kritik mühendislik.',
          layout: homeLayout as any,
        },
      })
      homeDocId = created.id
    } else {
      homeDocId = existingHome.docs[0].id
      await payload.update({
        collection: 'pages',
        id: homeDocId,
        data: {
          layout: homeLayout as any,
        },
      })
    }

    // 2. Özel Dinamik Sayfa: /arge-laboratuvari
    const existingArge = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'arge-laboratuvari' },
      },
      limit: 1,
    })

    const argeLayout = [
      {
        blockType: 'heroBlock',
        eyebrow: 'MİLLİ AR-GE VE PROTOTİPLEME',
        heading: 'İleri Seviye AR-GE & Test Altyapımız',
        description:
          'AhsaTech AR-GE Laboratuvarı; yüksek frekanslı RF test odası, termal analiz istasyonu ve 0402 SMD dizgi prototipleme imkanları ile hizmetinizdedir.',
        primaryBtnText: 'Projelerimizi İnceleyin',
        primaryBtnUrl: '/projelerimiz',
        secondaryBtnText: 'Çözüm Kataloğu',
        secondaryBtnUrl: '/urunler',
      },
      {
        blockType: 'synergyBlock',
        eyebrow: 'AR-GE VE PROTOTİPLEME',
        title: 'Mühendislik Standartlarımız',
        description:
          'Tüm AR-GE çalışmalarımız IEC, ISO ve IPC standartlarına uygun olarak belgelendirilmekte ve sertifikalandırılmaktadır.',
        guaranteeBadge: '✦ IPC-A-610 Class 3 Güvencesi',
      },
      {
        blockType: 'trustMetricsBlock',
        standardsTitle: 'Sertifikalı Kalite Yönetimi',
        standardsSubtitle: 'Ürünlerimiz ve süreçlerimiz global endüstri normlarına göre denetlenmektedir.',
      },
      {
        blockType: 'miniContactBlock',
        eyebrow: 'LABORATUVAR İLETİŞİM',
        title: 'Prototip ve AR-GE İhtiyaçlarınız İçin Bize Ulaşın',
        description:
          'Mühendislik ekibimiz gereksinimlerinizi analiz etsin; donanım, gömülü yazılım ve bulut mimarisi için kapsamlı bir yol haritası ve teknik fizibilite sunalım.',
        directEmail: 'info@ahsatech.com',
        formTitle: 'Hızlı İhtiyaç Bildirimi',
        formSubtitle: 'Uzman mühendislerimiz 24 saat içinde dönüş yapacaktır.',
      },
    ]

    let argeDocId = null
    if (existingArge.totalDocs === 0) {
      const created = await payload.create({
        collection: 'pages',
        data: {
          title: 'AR-GE Laboratuvarı & Prototipleme Merkezi',
          slug: 'arge-laboratuvari',
          isHome: false,
          metaDescription:
            'AhsaTech AR-GE Laboratuvarı, yüksek frekanslı RF test odası, termal analiz istasyonu ve SMD dizgi prototipleme imkanları.',
          layout: argeLayout as any,
        },
      })
      argeDocId = created.id
    } else {
      argeDocId = existingArge.docs[0].id
      await payload.update({
        collection: 'pages',
        id: argeDocId,
        data: {
          layout: argeLayout as any,
        },
      })
    }

    return Response.json({
      success: true,
      message: 'Pages seeded/updated successfully with full 7 modular blocks',
      homeDocId,
      argeDocId,
    })
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    )
  }
}
