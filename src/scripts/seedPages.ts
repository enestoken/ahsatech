import config from '../payload.config'
import { getPayload } from 'payload'

export const seedPages = async () => {
  console.log('[SeedPages] AhsaTech Sayfalar (Page Builder) tohumlama başlatılıyor...')
  const payload = await getPayload({ config })

  // 1. Ana Sayfa (Home Page Builder dokümanı)
  const existingHome = await payload.find({
    collection: 'pages',
    where: {
      or: [{ isHome: { equals: true } }, { slug: { equals: 'ana-sayfa' } }],
    },
    limit: 1,
  })

  const homeLayout: any[] = [
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

  if (existingHome.totalDocs === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'AhsaTech Ana Sayfa',
        slug: 'ana-sayfa',
        isHome: true,
        metaDescription:
          'AhsaTech — Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri. Savunma, enerji ve endüstriyel IoT için görev kritik mühendislik.',
        layout: homeLayout,
      },
    })
    console.log('[SeedPages] Dinamik Ana Sayfa başarıyla oluşturuldu.')
  } else {
    await payload.update({
      collection: 'pages',
      id: existingHome.docs[0].id,
      data: {
        layout: homeLayout,
      },
    })
    console.log('[SeedPages] Dinamik Ana Sayfa güncellendi.')
  }

  console.log('[SeedPages] Sayfa tohumlama tamamlandı!')
}

seedPages()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[SeedPages] Hata:', err)
    process.exit(1)
  })
