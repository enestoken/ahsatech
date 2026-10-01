import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Medya & Dosya',
    plural: 'Medya Kütüphanesi',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'İçerik Yönetimi',
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Açıklama / Alt Metin',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Başlık / Etiket (Opsiyonel)',
    },
  ],
  upload: true,
}
