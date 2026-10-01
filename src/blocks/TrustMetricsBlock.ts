import type { Block } from 'payload'

export const TrustMetricsBlock: Block = {
  slug: 'trustMetricsBlock',
  labels: {
    singular: 'Güven & Kalite Standartları Bloğu',
    plural: 'Güven Metrikleri Blokları',
  },
  fields: [
    {
      name: 'stats',
      type: 'array',
      label: 'Sayısal Güven Metrikleri',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Sayı / Yüzde (Örn: 45+, 70+, %100)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Başlık (Örn: Özel Donanım Projesi)',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Açıklama',
        },
      ],
      defaultValue: [
        {
          number: '45+',
          title: 'Özel Donanım Projesi',
          subtitle: 'Saha koşullarında çalışan tescilli tasarımlar',
        },
        {
          number: '70+',
          title: 'Yazılım Dağıtımı',
          subtitle: 'Yüksek erişilebilirlikli kurumsal sistemler',
        },
        {
          number: '%100',
          title: 'Yerli & Global Standart',
          subtitle: 'Uluslararası regülasyonlara tam uyumlu',
        },
      ],
    },
    {
      name: 'standardsTitle',
      type: 'text',
      label: 'Standartlar Kartı Başlığı',
      defaultValue: 'Sertifikalı Kalite Yönetimi',
    },
    {
      name: 'standardsSubtitle',
      type: 'text',
      label: 'Standartlar Kartı Alt Başlığı',
      defaultValue: 'Ürünlerimiz ve süreçlerimiz global endüstri normlarına göre denetlenmektedir.',
    },
    {
      name: 'standards',
      type: 'array',
      label: 'Sertifika Rozetleri',
      fields: [
        {
          name: 'code',
          type: 'text',
          label: 'Sertifika / Standart Kodu (Örn: CE UYUMLU, ISO 9001:2015)',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Material Symbol İkonu (gavel, eco, verified_user, lock)',
          defaultValue: 'verified_user',
        },
      ],
      defaultValue: [
        { code: 'CE UYUMLU', icon: 'gavel' },
        { code: 'RoHS 2011/65/EU', icon: 'eco' },
        { code: 'ISO 9001:2015', icon: 'verified_user' },
        { code: 'ISO 27001 (BGBYS)', icon: 'lock' },
      ],
    },
  ],
}
