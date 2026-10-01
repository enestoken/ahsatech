import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Proje',
    plural: 'Projeler',
  },
  admin: {
    group: 'İçerik Yönetimi',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'client', 'mcuCore', 'status', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Proje Adı',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Yolu (Slug)',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Örn: smartgrid-v3-enerji-izleme (Küçük harf, boşluksuz)',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Proje Kategorisi',
      required: true,
      defaultValue: 'hardware',
      options: [
        { label: 'Gömülü Sistem & Donanım', value: 'hardware' },
        { label: 'Endüstriyel IoT', value: 'iot' },
        { label: 'Kurumsal Yazılım & Bulut', value: 'software' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Yayın Durumu',
      defaultValue: 'published',
      options: [
        { label: 'Yayında', value: 'published' },
        { label: 'Taslak', value: 'draft' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Ana Sayfada Öne Çıkar',
      defaultValue: true,
    },
    {
      name: 'client',
      type: 'text',
      label: 'Müşteri / Kurum',
      admin: {
        description: 'Örn: Ulusal Dağıtım Şirketi, Savunma Sanayii, Tarım Bakanlığı',
      },
    },
    {
      name: 'mcuCore',
      type: 'text',
      label: 'Kullanılan Donanım / İşlemci Çekirdeği',
      admin: {
        description: 'Örn: STM32F4 Core, ESP32-S3, Xilinx Zynq-7000 FPGA',
      },
    },
    {
      name: 'year',
      type: 'text',
      label: 'Proje Yılı',
      defaultValue: '2024',
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Kısa Özet',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Detaylı Mühendislik Açıklaması & Vaka Analizi',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Teknik Parametreler',
      labels: {
        singular: 'Parametre',
        plural: 'Parametreler',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Parametre Adı (Örn: Örnekleme Hızı, Sıcaklık Dayanımı)',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Değeri (Örn: 12.8 kHz / Kanal, -40°C ~ +85°C)',
          required: true,
        },
      ],
    },
    {
      name: 'outcomeMetrics',
      type: 'array',
      label: 'Sonuç Metrikleri & Saha Çıktıları',
      labels: {
        singular: 'Metrik',
        plural: 'Metrikler',
      },
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Sayısal Değer (Örn: %38, 42.800+, 99.98%)',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Açıklama (Örn: Enerji Kaybı Azalımı, Aktif Düğüm)',
          required: true,
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Saha Fotoğrafları Galerisi',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Görsel',
        },
      ],
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Kullanılan Teknolojiler & Protokoller',
      labels: {
        singular: 'Teknoloji',
        plural: 'Teknolojiler',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Teknoloji / Kütüphane / Protokol',
          required: true,
        },
        {
          name: 'badgeType',
          type: 'select',
          label: 'Tür',
          defaultValue: 'firmware',
          options: [
            { label: 'Gömülü & Firmware', value: 'firmware' },
            { label: 'Donanım & PCB', value: 'hardware' },
            { label: 'Protokol & Haberleşme', value: 'protocol' },
            { label: 'Bulut & Güvenlik', value: 'cloud' },
          ],
        },
      ],
    },
    {
      name: 'blockDiagramDesc',
      type: 'textarea',
      label: 'Sistem Blok Mimarisi Açıklaması',
      admin: {
        description: 'Sistemin donanım blokları, veri akışı ve izolasyon katmanlarının açıklaması',
      },
    },
    {
      name: 'clientTestimonial',
      type: 'textarea',
      label: 'Müşteri / Kurum Geri Bildirimi',
      admin: {
        description: 'Projenin sahadaki başarısına dair müşteri alıntısı',
      },
    },
    {
      name: 'clientAuthor',
      type: 'text',
      label: 'Geri Bildirim Sahibi (İsim & Ünvan)',
    },
  ],
}
