import type { Block } from 'payload'

export const RichTextBlock: Block = {
  slug: 'richTextBlock',
  labels: {
    singular: 'Serbest Metin & Makale Bloğu',
    plural: 'Serbest Metin Blokları',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Bölüm Başlığı (Opsiyonel)',
    },
    {
      name: 'body',
      type: 'textarea',
      label: 'Metin İçeriği',
      required: true,
    },
    {
      name: 'containerWidth',
      type: 'select',
      label: 'Konteyner Genişliği',
      defaultValue: 'standard',
      options: [
        { label: 'Dar (Metin Odaklı - 768px)', value: 'narrow' },
        { label: 'Standart (1024px)', value: 'standard' },
        { label: 'Geniş (1280px)', value: 'wide' },
      ],
    },
  ],
}
