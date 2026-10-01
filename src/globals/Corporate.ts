import type { GlobalConfig } from 'payload'

export const Corporate: GlobalConfig = {
  slug: 'corporate',
  label: 'Kurumsal Bilgiler & Değerler',
  admin: {
    group: 'Kurumsal Ayarlar',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroTagline',
      type: 'text',
      label: 'Kurumsal Felsefe Başlığı',
      defaultValue: 'Kadim Geometri ve Hassas Mühendisliğin Kesişim Noktası',
      required: true,
    },
    {
      name: 'heroPhilosophy',
      type: 'textarea',
      label: 'Felsefe & Kuruluş Anlatısı',
      defaultValue:
        'AhsaTech, ismini “sağlamlık, derin bilgi ve zarafet” prensiplerinden alarak; geleneksel zanaat ve geometrik nizamın kusursuzluğunu 21. yüzyılın yazılım ve elektronik teknolojileriyle buluşturmak üzere kuruldu.',
    },
    {
      name: 'missionTitle',
      type: 'text',
      label: 'Misyon Başlığı',
      defaultValue: 'Misyonumuz',
    },
    {
      name: 'missionText',
      type: 'textarea',
      label: 'Misyon Metni',
      defaultValue:
        'Yüksek katma değerli donanım ve yazılım ürünleri geliştirerek, küresel rekabette yerli mühendislik gücünü kanıtlamak ve müşterilerimizin dijital ve endüstriyel dönüşümlerini en yüksek güvenilirlikle sağlamak.',
    },
    {
      name: 'visionTitle',
      type: 'text',
      label: 'Vizyon Başlığı',
      defaultValue: 'Vizyonumuz',
    },
    {
      name: 'visionText',
      type: 'textarea',
      label: 'Vizyon Metni',
      defaultValue:
        'Silikon seviyesinden dağıtık bulut mimarilerine kadar uzanan kritik teknolojilerde; Doğu Akdeniz ve Orta Doğu havzasının en yenilikçi ve güvenilir derin teknoloji (deep-tech) mühendislik ekosistemi olmak.',
    },
    {
      name: 'precisionMetrics',
      type: 'array',
      label: 'Hassasiyet & Kalite Metrikleri',
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Değer (Örn: 0.05, 99.98, 8, ISO)',
          required: true,
        },
        {
          name: 'unit',
          type: 'text',
          label: 'Birim (Örn: mm, %, Katman, Akrediteli)',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Açıklama (Örn: Tolerans Hassasiyeti, Uptime & Kararlılık)',
          required: true,
        },
      ],
      defaultValue: [
        { value: '0.05', unit: 'mm', label: 'Tolerans Hassasiyeti' },
        { value: '99.98', unit: '%', label: 'Uptime & Kararlılık' },
        { value: '8', unit: 'Katman', label: 'Yüksek Yoğunluklu PCB' },
        { value: 'ISO', unit: '9001 / 27001', label: 'Akrediteli Kalite Sistemi' },
      ],
    },
    {
      name: 'values',
      type: 'array',
      label: 'Mühendislik İlkeleri & Değerlerimiz',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Değer Başlığı',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Açıklama',
          required: true,
        },
      ],
      defaultValue: [
        {
          title: 'Matematiksel Hassasiyet',
          description: 'Hata toleransını mikron seviyesinde yönetir, algoritmalarımızı deterministik temellere oturturuz.',
        },
        {
          title: 'Tavizsiz Güvenilirlik',
          description: 'Sert saha ve endüstriyel koşullarda kesintisiz çalışacak standartlarda üretim yaparız.',
        },
        {
          title: 'Yerli Güç, Global Vizyon',
          description: 'Mühendislik zekamızı küresel pazarda rekabet edebilecek yüksek katma değerli ürünlere dönüştürürüz.',
        },
      ],
    },
    {
      name: 'milestones',
      type: 'array',
      label: 'Tarihçe & Kilometre Taşları (Timeline)',
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Yıl (Örn: 2021, 2022, 2024)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Başlık',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Açıklama',
        },
      ],
      defaultValue: [
        {
          year: '2021',
          title: 'Kuruluş & İlk Gömülü Sistem Patenti',
          description: 'AhsaTech, mikrokontrolör mimarileri ve RF telemetri alanındaki ilk tescilli tasarımıyla kuruldu.',
        },
        {
          year: '2023',
          title: 'Marmara Teknokent AR-GE Merkezi',
          description: 'SMT pilot hattı ve EMC ön-uyumluluk laboratuvarı faaliyete geçirildi.',
        },
        {
          year: '2024',
          title: '12 Ülkeye Donanım İhracatı',
          description: 'AhsaCore gateway ve IoT ailesi global endüstriyel projelere entegre edildi.',
        },
      ],
    },
    {
      name: 'laboratories',
      type: 'array',
      label: 'Ar-Ge Laboratuvarları & Ekipmanlar',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Laboratuvar Adı',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Yetenekler & Altyapı',
        },
      ],
      defaultValue: [
        {
          name: 'EMC / EMI Ön Uyum ve RF Analiz Odası',
          description: 'Rohde & Schwarz spektrum analizörleri ve yankısız RF test kabiniyle uluslararası CE/FCC standartlarına uyum testi.',
        },
        {
          name: 'Yüksek Hızlı SMT Prototip Dizgi Hattı',
          description: '0201 komponent hassasiyetinde hızlı dizgi ve X-Ray BGA lehimleme kalite kontrolü.',
        },
      ],
    },
  ],
}
