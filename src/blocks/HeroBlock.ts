import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  labels: {
    singular: 'Hero (Manşet & Tanıtım) Bloğu',
    plural: 'Hero Blokları',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Üst Rozet Metni',
      defaultValue: 'Yeni Nesil Mühendislik Çözümleri',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Ana Manşet Başlığı',
      defaultValue: 'Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Tanıtım Paragrafı',
      defaultValue:
        'AhsaTech; endüstriyel IoT, gömülü sistemler, yapay zekâ destekli kurumsal yazılımlar ve donanım tasarımıyla global standartlarda anahtar teslim mühendislik çözümleri üretir.',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryBtnText',
          type: 'text',
          label: 'Birincil Buton Yazısı',
          defaultValue: 'Projelerimizi İnceleyin',
          admin: { width: '50%' },
        },
        {
          name: 'primaryBtnUrl',
          type: 'text',
          label: 'Birincil Buton Linki',
          defaultValue: '/projelerimiz',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryBtnText',
          type: 'text',
          label: 'İkincil Buton Yazısı',
          defaultValue: 'Çözüm Kataloğu',
          admin: { width: '50%' },
        },
        {
          name: 'secondaryBtnUrl',
          type: 'text',
          label: 'İkincil Buton Linki',
          defaultValue: '/urunler-cozumler',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'trustBadges',
      type: 'array',
      label: 'Güven & Akreditasyon Rozetleri (Hero Altı)',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'İkon Adı (Material Symbol: verified, memory, cloud_done)',
          defaultValue: 'verified',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Standart / Sertifika Metni (Örn: ISO 9001:2015)',
          required: true,
        },
      ],
      defaultValue: [
        { icon: 'verified', label: 'ISO 9001:2015' },
        { icon: 'memory', label: 'Altium & KiCad IPC-CID' },
        { icon: 'cloud_done', label: 'AWS & Azure IoT Partner' },
      ],
    },
  ],
}
