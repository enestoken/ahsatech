import config from '../payload.config'
import { getPayload } from 'payload'

export const seedProjectsData = async () => {
  console.log('[SeedProjects] Projeler portföyü zenginleştiriliyor...')
  const payload = await getPayload({ config })

  // 1. SmartGrid v3
  const p1 = await payload.find({
    collection: 'projects',
    where: { slug: { equals: 'smartgrid-v3-enerji-izleme' } },
  })

  const smartgridData = {
    title: 'SmartGrid v3 — Akıllı Şebeke & Enerji İzleme Ünitesi',
    slug: 'smartgrid-v3-enerji-izleme',
    category: 'hardware' as const,
    status: 'published' as const,
    featured: true,
    client: 'Ulusal Dağıtım Şirketi (TEDAŞ & Bölgesel Dağıtım)',
    mcuCore: 'STM32F4 Core (ARM Cortex-M4 @ 168 MHz)',
    year: '2024',
    summary:
      '3 fazlı yüksek hassasiyetli enerji analizörü, RS485/Modbus galvanik izolasyonlu haberleşme mimarisi ve zorlu trafo sahalarında kesintisiz işlem kabiliyeti.',
    description:
      'Zorlu trafo merkezleri, yüksek gerilim dağıtım panoları ve enerji santralleri için özel olarak geliştirilmiş SmartGrid v3; şebeke frekansındaki dalgalanmaları, harmonik distorsiyonları ve anlık voltaj çöküşlerini mikrosaniyelik hassasiyetle yakalar. Donanımsal galvanik izolasyon bariyeri sayesinde 3.75 kVrms aşırı gerilim sıçramalarına karşı sahadaki kontrol elemanlarını ve iletişim hatlarını korur. Elde edilen telemetri verileri IEC 60870-5-104 ve Modbus RTU protokolleriyle doğrudan SCADA merkezlerine ve AhsaCloud platformuna kriptolu iletilir.',
    blockDiagramDesc:
      '3 Faz Akım/Gerilim Sensör Katı ➔ 16-Bit Sigma-Delta ADC Örnekleme Bloğu ➔ 3.75 kV Galvanik İzolasyon Bariyeri ➔ STM32F407 DSP Hesaplama Çekirdeği (FFT & Harmonik Analizi) ➔ Çift İzole RS485 / Modbus RTU & Ethernet SCADA Çıkış Katı.',
    clientTestimonial:
      'SmartGrid v3 ünitelerini 42 binden fazla trafo noktamıza entegre ettiğimizden bu yana arıza tespit süremiz %38 kısaldı. Aşırı kış koşullarında dahi bir tek modül dahi kilitlenmedi.',
    clientAuthor: 'Mustafa Kemal Kaya — Baş Dağıtım Şebekesi Koordinatörü',
    specs: [
      { label: 'Örnekleme Hızı', value: '12.8 kHz / Kanal (16-Bit Eşzamanlı)' },
      { label: 'Sıcaklık Dayanımı', value: '-40°C ~ +85°C Endüstriyel Seviye' },
      { label: 'Haberleşme & Protokol', value: 'IEC 60870-5-104, Modbus RTU/TCP, DNP3' },
      { label: 'Galvanik İzolasyon', value: '3.75 kVrms (Optik ve Manyetik Bariyer)' },
      { label: 'Harmonik Analiz', value: '63. Harmonik Seviyesine Kadar THD Ölçümü' },
      { label: 'Besleme & Güç', value: '85 - 264 VAC / 110 - 370 VDC Çift Giriş' },
    ],
    outcomeMetrics: [
      { metric: '%38', description: 'Arıza Tespit ve Müdahale Süresi Azalımı' },
      { metric: '42.800+', description: 'Aktif Trafo ve Dağıtım Merkezinde Çalışıyor' },
      { metric: '%99.98', description: 'Yıllık Saha Uptime ve Veri Sürekliliği' },
    ],
    technologies: [
      { name: 'STM32F4 DSP', badgeType: 'firmware' as const },
      { name: 'FreeRTOS Kernel', badgeType: 'firmware' as const },
      { name: 'IEC 60870-5-104', badgeType: 'protocol' as const },
      { name: 'Modbus RTU/TCP', badgeType: 'protocol' as const },
      { name: '4-Katman ENIG PCB', badgeType: 'hardware' as const },
      { name: '3.75kV İzolasyon', badgeType: 'hardware' as const },
    ],
  }

  if (p1.totalDocs > 0) {
    await payload.update({
      collection: 'projects',
      id: p1.docs[0].id,
      data: smartgridData,
    })
    console.log('[SeedProjects] SmartGrid v3 güncellendi.')
  } else {
    await payload.create({
      collection: 'projects',
      data: smartgridData,
    })
    console.log('[SeedProjects] SmartGrid v3 oluşturuldu.')
  }

  // 2. AhsaSens v4
  const p2 = await payload.find({
    collection: 'projects',
    where: { slug: { equals: 'ahsasens-v4-tarimsal-iot' } },
  })

  const ahsasensData = {
    title: 'AhsaSens v4 — Tarımsal IoT Saha İstasyonu',
    slug: 'ahsasens-v4-tarimsal-iot',
    category: 'iot' as const,
    status: 'published' as const,
    featured: true,
    client: 'Bölgesel Tarım Birlikleri & Çevre İzleme',
    mcuCore: 'ESP32-S3 & Semtech SX1262 LoRaWAN',
    year: '2023',
    summary:
      'Toprak nemi, UV spektrumu ve mikroklima verilerini 15 km menzilde sıfır şebeke bağımlılığıyla ileten ultra düşük güç tüketimli ölçüm ünitesi.',
    description:
      'AhsaSens v4, zorlu arazi koşullarında harici enerji beslemesine ihtiyaç duymadan yıllarca çalışan otonom bir agro-telemetri istasyonudur. Dahili MPPT güneş enerjisi hasat devresi, kış mevsiminde bile 1.8 uA derin uyku akımı ile 60 günden fazla güneşsiz kesintisiz çalışmayı garanti eder. Çift frekanslı LoRaWAN (868/915 MHz) radyo ünitesi, coğrafi engelleri aşarak 15 kilometre mesafeye telemetri paketleri aktarır.',
    blockDiagramDesc:
      'Güneş Paneli + LiFePO4 Pil ➔ BQ25713 Akıllı MPPT Şarj Katı ➔ ESP32-S3 Ultra Low-Power Çekirdek ➔ Semtech SX1262 LoRa RF Ön Katı ➔ SDI-12 & RS485 Toprak Sensör Portları ➔ AhsaCloud Tarımsal Analitik Motoru.',
    clientTestimonial:
      'Tarımsal parsellerimizde su tüketimini %27 oranında azalttık. Sensör istasyonları dolu, fırtına ve çamur altında bir yıldır tek bir arıza vermeden tıkır tıkır çalışıyor.',
    clientAuthor: 'Doç. Dr. Emre Candan — Hassas Tarım Teknolojileri Enstitüsü',
    specs: [
      { label: 'Radyo Protokolü', value: 'LoRaWAN Class A / C (868 & 915 MHz EU/US)' },
      { label: 'Menzil (Açık Alan)', value: '15 km Görüş Hattı (LOS)' },
      { label: 'Uyku Akımı', value: '1.8 µA Ultra Düşük Akım' },
      { label: 'Batarya & Enerji', value: 'Dahili Solar MPPT + 6400mAh LiFePO4' },
      { label: 'Sensör Arayüzleri', value: 'SDI-12, RS-485 Modbus, I2C, 2x 16-Bit ADC' },
      { label: 'Gövde Koruması', value: 'IP67 UV Dayanımlı Polikarbonat & Gore Havalandırma' },
    ],
    outcomeMetrics: [
      { metric: '%27', description: 'Tarımsal Sulama Suyu ve Gübre Tasarrufu' },
      { metric: '1.200+', description: 'Geniş Ölçekli Parselde Aktif Kurulum' },
      { metric: '5+ Yıl', description: 'Sıfır Bakım ve Pil Değişimsiz Operasyon' },
    ],
    technologies: [
      { name: 'ESP32-S3 Dual-Core', badgeType: 'firmware' as const },
      { name: 'LoRaWAN Stack', badgeType: 'protocol' as const },
      { name: 'Solar MPPT Donanım', badgeType: 'hardware' as const },
      { name: 'SDI-12 Protokolü', badgeType: 'protocol' as const },
      { name: 'IP67 Mekanik Gövde', badgeType: 'hardware' as const },
      { name: 'AhsaCloud Telemetri', badgeType: 'cloud' as const },
    ],
  }

  if (p2.totalDocs > 0) {
    await payload.update({
      collection: 'projects',
      id: p2.docs[0].id,
      data: ahsasensData,
    })
    console.log('[SeedProjects] AhsaSens v4 güncellendi.')
  } else {
    await payload.create({
      collection: 'projects',
      data: ahsasensData,
    })
    console.log('[SeedProjects] AhsaSens v4 oluşturuldu.')
  }

  // 3. PetroTrack
  const p3 = await payload.find({
    collection: 'projects',
    where: { slug: { equals: 'petrotrack-ex-proof-telemetri' } },
  })

  const petrotrackData = {
    title: 'PetroTrack — Ex-Proof Endüstriyel Telemetri Modülü',
    slug: 'petrotrack-ex-proof-telemetri',
    category: 'hardware' as const,
    status: 'published' as const,
    featured: true,
    client: 'Uluslararası Rafineri & Doğalgaz Boru Hattı İşletmesi',
    mcuCore: 'Microchip SAM E54 (ARM Cortex-M4F @ 120 MHz)',
    year: '2024',
    summary:
      'Patlama riski bulunan Zone-1 petrol ve gaz tesisleri için ATEX/IECEx sertifikalı telemetri ve basınç takip aygıtı.',
    description:
      'PetroTrack, hidrokarbon gazları ve yanıcı buharların bulunduğu patlayıcı ortamlarda (Zone 1 / 21) güvenle çalışmak üzere Ex db IIC T6 normunda tasarlanmış alev sızdırmaz telemetri cihazıdır. Yüksek frekanslı basınç dalgalanmalarını yakalayarak boru hatlarındaki mikro kaçakları saniyeler içinde tespit eder. 32 MB güvenli NOR flash üzerinde yerel veri karakutusu barındırır.',
    blockDiagramDesc:
      'Alev Sızdırmaz Alüminyum Döküm Gövde ➔ Çift Kanal 4-20mA HART Arayüzü ➔ Galvanik Bariyerler ➔ SAM E54 Güvenlik Çekirdeği ➔ 32MB Güvenli Karakutu Flash ➔ İzole RS485 & 4G Endüstriyel Modem.',
    clientTestimonial:
      'Ham petrol transfer hattımızda basınç kaybı kaynaklı mikro sızıntıları 4 saniye içinde tespit ederek büyük bir çevre felaketinin önüne geçti. ATEX güvenlik belgeleri kusursuz.',
    clientAuthor: 'Serdar Yaman — Boru Hatları Güvenlik ve Otomasyon Müdürü',
    specs: [
      { label: 'Ex Sertifikası', value: 'ATEX II 2G Ex db IIC T6 Gb' },
      { label: 'Arayüz Desteği', value: 'HART Protokolü & Çift 4-20mA Giriş' },
      { label: 'Örnekleme & Tepki', value: '< 5 ms Mikro-Darbe Tespiti' },
      { label: 'Karakutu Belleği', value: '32 MB Endüstriyel NOR Flash (100.000 Yazım)' },
      { label: 'Çalışma Sıcaklığı', value: '-40°C ile +85°C Aşırı Ortam' },
    ],
    outcomeMetrics: [
      { metric: '0 Hata', description: 'Kritik Basınç Kaçak Tespit Başarısı' },
      { metric: '18 Ay', description: 'Sıfır Bakım Kesintisiz Saha Çalışması' },
      { metric: '< 4 sn', description: 'Anlık Basınç Düşüş Alarm Süresi' },
    ],
    technologies: [
      { name: 'Microchip SAM E54', badgeType: 'firmware' as const },
      { name: 'ATEX Ex-db Tasarımı', badgeType: 'hardware' as const },
      { name: 'HART Protokolü', badgeType: 'protocol' as const },
      { name: 'Karakutu Flash Motoru', badgeType: 'firmware' as const },
      { name: 'LTE Cat-M1 Endüstriyel', badgeType: 'protocol' as const },
    ],
  }

  if (p3.totalDocs > 0) {
    await payload.update({
      collection: 'projects',
      id: p3.docs[0].id,
      data: petrotrackData,
    })
    console.log('[SeedProjects] PetroTrack güncellendi.')
  } else {
    await payload.create({
      collection: 'projects',
      data: petrotrackData,
    })
    console.log('[SeedProjects] PetroTrack oluşturuldu.')
  }

  // 4. BioClean — Hassas Laboratuvar Otomasyon Kontrolörü (Software / Kurumsal Bulut & Gömülü Entegrasyon)
  const p4 = await payload.find({
    collection: 'projects',
    where: { slug: { equals: 'bioclean-laboratuvar-kontroloru' } },
  })

  const biocleanData = {
    title: 'BioClean — Hassas Laboratuvar Otomasyon Kontrolörü & Bulut Yönetimi',
    slug: 'bioclean-laboratuvar-kontroloru',
    category: 'software' as const,
    status: 'published' as const,
    featured: true,
    client: 'Medikal AR-GE & Farmasötik Temiz Oda Tesisleri',
    mcuCore: 'Xilinx Zynq-7000 FPGA & AhsaCloud Dağıtık SCADA',
    year: '2024',
    summary:
      'Temiz oda partikül sayımı, laminer hava akışı regülasyonu ve CFR 21 Part 11 uyumlu bulut denetim izi platformu.',
    description:
      'Biyoteknoloji ve aşı üretim merkezlerindeki ISO Class 4 temiz odalar için geliştirilmiş BioClean; milisaniyelik hava basınç dengesini sağlayan FPGA tabanlı donanım kontrolörü ile FDA 21 CFR Part 11 normlarına tam uyumlu AhsaCloud denetim yazılımını bir araya getirir. Tüm kalibrasyon ve sensör logları blokzincir temelli kriptografik özetlerle imzalanarak değiştirilemez şekilde saklanır.',
    blockDiagramDesc:
      'Lazer Partikül Sayacı & Basınç Sensörleri ➔ FPGA Tabanlı Çok Kanallı PID Regülatörü ➔ Endüstriyel Ethernet (EtherCAT) ➔ AhsaCloud Kriptografik Denetim Sunucuları ➔ Gerçek Zamanlı Web Gösterge Paneli.',
    clientTestimonial:
      'Aşı dolum hattımızdaki validasyon denetimlerinden sıfır uygunsuzlukla geçtik. BioClean hem donanım kararlılığı hem de bulut raporlama hızıyla medikal standartların çok üzerinde.',
    clientAuthor: 'Dr. Zeynep Erdem — Kalite Güvence & Validasyon Direktörü',
    specs: [
      { label: 'Uyum Standartları', value: 'FDA 21 CFR Part 11, GAMP 5, ISO 14644' },
      { label: 'İşlemci Çekirdeği', value: 'Xilinx Zynq-7000 SoC (ARM + FPGA)' },
      { label: 'Veri Bütünlüğü', value: 'SHA-256 Kriptografik İmzalı Denetim İzi' },
      { label: 'Döngü Hızı', value: '1 kHz Donanımsal PID Kontrolü' },
      { label: 'Bulut Entegrasyonu', value: 'AhsaCloud WebSocket & RESTful API' },
    ],
    outcomeMetrics: [
      { metric: '%100', description: 'FDA & GMP Regülasyon Uyumluluğu' },
      { metric: '0.1 Pa', description: 'Temiz Oda Pozitif Basınç Hassasiyeti' },
      { metric: '10 Milyon+', description: 'Güvenli Şekilde İmzalanan Günlük Ölçüm' },
    ],
    technologies: [
      { name: 'Xilinx FPGA & ARM', badgeType: 'hardware' as const },
      { name: 'AhsaCloud Platform', badgeType: 'cloud' as const },
      { name: 'CFR 21 Part 11 Log', badgeType: 'cloud' as const },
      { name: 'EtherCAT & Modbus TCP', badgeType: 'protocol' as const },
      { name: 'Real-time Next.js UI', badgeType: 'cloud' as const },
    ],
  }

  if (p4.totalDocs > 0) {
    await payload.update({
      collection: 'projects',
      id: p4.docs[0].id,
      data: biocleanData,
    })
    console.log('[SeedProjects] BioClean güncellendi.')
  } else {
    await payload.create({
      collection: 'projects',
      data: biocleanData,
    })
    console.log('[SeedProjects] BioClean oluşturuldu.')
  }

  console.log('[SeedProjects] Tüm 4 proje başarıyla hazırlandı!')
}

seedProjectsData()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[SeedProjects] Hata:', err)
    process.exit(1)
  })
