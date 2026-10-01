import 'dotenv/config'
import config from '../payload.config'
import { getPayload } from 'payload'

export const seedDatabase = async () => {
  console.log('[Seed] AhsaTech veritabanı tohumlama başlatılıyor...')
  const payload = await getPayload({ config })

  // 1. Admin Kullanıcısı Oluşturma
  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  let adminUser
  if (existingUsers.totalDocs === 0) {
    const adminPassword = process.env.SEED_ADMIN_PASSWORD
    if (!adminPassword) {
      throw new Error('İlk admin hesabı için SEED_ADMIN_PASSWORD ortam değişkenini tanımlayın.')
    }
    console.log('[Seed] İlk Süper Yönetici hesabı oluşturuluyor...')
    adminUser = await payload.create({
      collection: 'users',
      data: {
        email: process.env.SEED_ADMIN_EMAIL || 'admin@ahsatech.com',
        password: adminPassword,
        name: 'AhsaTech Süper Admin',
        role: 'admin',
      },
    })
    console.log('[Seed] Admin hesabı oluşturuldu; giriş bilgileri ortam değişkenlerinden alındı.')
  } else {
    adminUser = existingUsers.docs[0]
    console.log('[Seed] Mevcut admin hesabı bulundu:', adminUser.email)
  }

  // 2. Örnek Medya Kayıtları
  const existingMedia = await payload.find({
    collection: 'media',
    limit: 1,
  })

  // 3. Projeler (Projects)
  const existingProjects = await payload.find({
    collection: 'projects',
    limit: 1,
  })

  if (existingProjects.totalDocs === 0) {
    console.log('[Seed] Örnek Projeler ekleniyor...')

    // Proje 1: SmartGrid v3
    await payload.create({
      collection: 'projects',
      data: {
        title: 'SmartGrid v3 — Akıllı Şebeke & Enerji İzleme Ünitesi',
        slug: 'smartgrid-v3-enerji-izleme',
        category: 'hardware',
        status: 'published',
        featured: true,
        client: 'Ulusal Dağıtım Şirketi',
        mcuCore: 'STM32F4 Core (ARM Cortex-M4)',
        year: '2024',
        summary:
          '3 fazlı yüksek hassasiyetli enerji analizörü, RS485/Modbus galvanik izolasyonlu haberleşme mimarisi ve zorlu trafo sahalarında kesintisiz işlem kabiliyeti.',
        description:
          'Zorlu trafo merkezleri ve enerji dağıtım noktalarında milisaniyelik örnekleme yapan, IEC 60870-5-104 SCADA protokolünü destekleyen gömülü donanım ve firmware çözümü.',
        specs: [
          { label: 'Örnekleme Hızı', value: '12.8 kHz / Kanal' },
          { label: 'Sıcaklık Dayanımı', value: '-40°C ~ +85°C Endüstriyel' },
          { label: 'Protokol Desteği', value: 'IEC 60870-5-104 & Modbus RTU/TCP' },
          { label: 'İzolasyon Seviyesi', value: '3.75 kVrms Galvanik İzolasyon' },
        ],
        outcomeMetrics: [
          { metric: '%38', description: 'Arıza Tespit Süresi Azalımı' },
          { metric: '42.800+', description: 'Aktif Saha Noktasında Çalışıyor' },
          { metric: '%99.98', description: 'Yıllık Saha Uptime Oranı' },
        ],
      },
    })

    // Proje 2: AhsaSens v4
    await payload.create({
      collection: 'projects',
      data: {
        title: 'AhsaSens v4 — Tarımsal IoT Telemetri İstasyonu',
        slug: 'ahsasens-v4-tarimsal-iot',
        category: 'iot',
        status: 'published',
        featured: true,
        client: 'Bölgesel Tarım Kooperatifi & Bakanlık',
        mcuCore: 'ESP32-S3 & Semtech SX1262 LoRa',
        year: '2023',
        summary:
          'Toprak nemi, UV spektrumu ve mikroklima verilerini 15 km menzilde sıfır şebeke bağımlılığıyla ileten ultra düşük güç tüketimli ölçüm ünitesi.',
        description:
          'Dahili solar MPPT şarj kontrol devresi ve LiFePO4 batarya paketi ile kış aylarında dahi 60 güne kadar güneşsiz çalışabilen akıllı agro-telemetri istasyonu.',
        specs: [
          { label: 'Haberleşme', value: 'LoRaWAN Class A (868/915 MHz)' },
          { label: 'Batarya Ömrü', value: 'Solar Destekli Sınırsız / 5 Yıl Ömür' },
          { label: 'Menzil', value: '15 km Açık Saha (LOS)' },
          { label: 'Koruma Sınıfı', value: 'IP67 UV Dayanımlı Polikarbon' },
        ],
        outcomeMetrics: [
          { metric: '%27', description: 'Sulama Suyu Tasarrufu' },
          { metric: '1.200+', description: 'Akıllı Parsel Kurulumu' },
        ],
      },
    })

    // Proje 3: PetroTrack Ex-Proof
    await payload.create({
      collection: 'projects',
      data: {
        title: 'PetroTrack — Ex-Proof Endüstriyel Telemetri Modülü',
        slug: 'petrotrack-ex-proof-telemetri',
        category: 'hardware',
        status: 'published',
        featured: false,
        client: 'Rafineri & Boru Hattı İşletmesi',
        mcuCore: 'Microchip SAM E54 (ARM Cortex-M4F)',
        year: '2024',
        summary:
          'Patlama riski bulunan Zone-1 petrol ve gaz tesisleri için ATEX/IECEx sertifikalı telemetri ve basınç takip aygıtı.',
        description:
          'Özel alüminyum alaşımlı alev sızdırmaz gövde, 4-20mA HART arayüzü ve milisaniyelik basınç dalgası izleme algoritmaları.',
        specs: [
          { label: 'Sertifikasyon', value: 'ATEX II 2G Ex db IIC T6 Gb' },
          { label: 'Sensör Arayüzü', value: 'HART / 4-20mA Çift Kanal' },
          { label: 'Veri Kaydı', value: '32MB Güvenli NOR Flash' },
        ],
        outcomeMetrics: [
          { metric: '0 Hata', description: 'Basınç Kaçak Tespit Başarısı' },
          { metric: '18 Ay', description: 'Sıfır Bakım Saha Çalışması' },
        ],
      },
    })

    console.log('[Seed] Projeler başarıyla eklendi.')
  }

  // 4. Ürünler (Products)
  const existingProducts = await payload.find({
    collection: 'products',
    limit: 1,
  })

  if (existingProducts.totalDocs === 0) {
    console.log('[Seed] Standart Ürünler Kataloğu ekleniyor...')

    // Ürün 1: AhsaCore-Gateway 400
    await payload.create({
      collection: 'products',
      data: {
        title: 'AhsaCore-Gateway 400',
        modelCode: 'AHSA-GW-400-DIN',
        slug: 'ahsacore-gateway-400',
        productType: 'gateway',
        mountingType: 'DIN-Ray Tipi (Endüstriyel)',
        status: 'published',
        summary:
          'Ağır endüstriyel koşullar ve SCADA entegrasyonu için geliştirilmiş, çok amaçlı DIN ray tipi telemetri ve edge gateway cihazı.',
        description:
          'Dört çekirdekli 64-bit ARM mimarisi, izole haberleşme portları ve donanımsal kripto çipi (TPM 2.0) ile kritik altyapılarda siber güvenlik ve güvenilirlik sağlar.',
        highlights: [
          { text: 'DIN-RAY TİPİ' },
          { text: 'TPM 2.0 KRİPTOGRAFİK GÜVENLİK' },
          { text: '2.5kV GALVANİK İZOLE PORTLAR' },
          { text: 'CE & EN 61000 ENDÜSTRİYEL SERTİFİKALI' },
        ],
        specsTable: [
          { parameter: 'İşlemci Mimarisi', value: 'Quad-Core ARM Cortex-A53 @ 1.5 GHz' },
          { parameter: 'Sistem Belleği', value: '2 GB LPDDR4 RAM + 16 GB eMMC 5.1' },
          { parameter: 'Hücresel Bağlantı', value: '4G LTE Cat-4 (Dünya Çapı Bantlar) & 5G Ready' },
          { parameter: 'Kablolu Ağ', value: '2x 10/100/1000 Mbps GbE Ethernet RJ45' },
          { parameter: 'Seri Arayüzler', value: '2x İzole RS485 (Modbus RTU Master/Slave) + 1x CAN 2.0B' },
          { parameter: 'Giriş / Çıkış (I/O)', value: '4x Dijital Giriş (24VDC) + 2x Röle Çıkışı (250VAC/3A)' },
          { parameter: 'Çalışma Sıcaklığı', value: '-40°C ile +85°C (Doğal Konveksiyon Soğutma)' },
          { parameter: 'Güç Girişi', value: '9 - 36 VDC Çift Güç Yedekli Terminal Blok' },
        ],
      },
    })

    // Ürün 2: AhsaEdge AI-Box 100
    await payload.create({
      collection: 'products',
      data: {
        title: 'AhsaEdge AI-Box 100',
        modelCode: 'AHSA-AI-100-BOX',
        slug: 'ahsaedge-aibox-100',
        productType: 'ai-box',
        mountingType: 'Alüminyum Fansız Kasa (Duvar / VESA Montaj)',
        status: 'published',
        summary:
          'Fabrika üretim hatlarında gerçek zamanlı bilgisayarlı görü ve kusur tespiti için 40 TOPS yapay zeka çıkarım gücü.',
        description:
          'Dahili NPU hızlandırıcı, çift Gigabit PoE kamera portu ve titreşime dayanıklı fansız soğutma bloğuyla endüstriyel kalite kontrolde yüksek doğruluk.',
        highlights: [
          { text: '40 TOPS NPU ÇIKARIM GÜCÜ' },
          { text: 'FANSIZ ALÜMİNYUM TERMAL BLOK' },
          { text: 'ÇİFT PoE+ GİGABİT KAMERA GİRİŞİ' },
        ],
        specsTable: [
          { parameter: 'AI Hızlandırıcı', value: 'Özel 40 TOPS INT8 NPU Çekirdeği' },
          { parameter: 'Kamera Girişi', value: '2x IEEE 802.3at PoE+ (Toplam 60W Güç)' },
          { parameter: 'Ekran Çıkışı', value: '1x HDMI 2.0 (4K 60fps)' },
          { parameter: 'Çalışma Sıcaklığı', value: '-20°C ile +70°C' },
        ],
      },
    })

    // Ürün 3: AhsaSens-Field LoRa
    await payload.create({
      collection: 'products',
      data: {
        title: 'AhsaSens-Field LoRa',
        modelCode: 'AHSA-NODE-LORA',
        slug: 'ahsasens-field-lora',
        productType: 'sensor-node',
        mountingType: 'IP68 Kutup / Boru Montaj Kiti',
        status: 'published',
        summary:
          'Su şebekeleri, tarım arazileri ve maden sahalarında 10 yıl pil ömrüyle veri toplayan kablosuz sensör düğümü.',
        description:
          'Ultra düşük uyku akımı (< 1.8 uA), dahili sıcaklık/nem/titreşim sensörü ve harici analog/dijital sensör bağlantı terminalleri.',
        highlights: [
          { text: '10 YIL PİL ÖMRÜ' },
          { text: 'IP68 DERİN DALDIRMA KORUMASI' },
          { text: '1.8 uA ULTRA DÜŞÜK UYKU AKIMI' },
        ],
        specsTable: [
          { parameter: 'Radyo Frekansı', value: 'LoRaWAN 868 MHz / 915 MHz' },
          { parameter: 'Pil Tipi', value: 'Dahili Değiştirilebilir Li-SOCl2 8500 mAh' },
          { parameter: 'Analog Giriş', value: '2x 0-10V veya 4-20mA (16-bit ADC)' },
        ],
      },
    })

    console.log('[Seed] Standart Ürünler başarıyla eklendi.')
  }

  // 5. Gelen Teklifler (RFQ Submissions - Test Kaydı)
  const existingRFQs = await payload.find({
    collection: 'rfq-submissions',
    limit: 1,
  })

  if (existingRFQs.totalDocs === 0) {
    console.log('[Seed] Örnek RFQ Teklif Talebi ekleniyor...')
    await payload.create({
      collection: 'rfq-submissions',
      data: {
        status: 'reviewing',
        contactName: 'Dr. Selim Aksoy',
        companyName: 'Anadolu Savunma ve Enerji A.Ş.',
        email: 'selim.aksoy@anadolusavunma.com.tr',
        phone: '+90 (532) 123 45 67',
        domain: 'embedded-hardware',
        projectPhase: 'prototype',
        requirements:
          'Zorlu arazi araçları için STM32H7 tabanlı, çift CAN 2.0B izole portlu, -40°C/+85°C sıcaklık dayanımlı telemetry kartı tasarımı ve 10 adet pilot prototip üretimi.',
        ndaAgreed: true,
        internalNotes: 'Teknik isterler incelendi. Marmara AR-GE mühendislik masası fizibilite hazırlıyor.',
      },
    })
    console.log('[Seed] Örnek RFQ başarıyla eklendi.')
  }

  console.log('[Seed] Veritabanı tohumlama işlemi başarıyla tamamlandı!')
}

// Komut satırından doğrudan çalıştırıldığında:
seedDatabase()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[Seed] Hata:', err)
    process.exit(1)
  })
