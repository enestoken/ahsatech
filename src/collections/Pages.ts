import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { TelemetryBlock } from '../blocks/TelemetryBlock'
import { CompetenciesBlock } from '../blocks/CompetenciesBlock'
import { FeaturedProjectsBlock } from '../blocks/FeaturedProjectsBlock'
import { TrustMetricsBlock } from '../blocks/TrustMetricsBlock'
import { MiniContactBlock } from '../blocks/MiniContactBlock'
import { RichTextBlock } from '../blocks/RichTextBlock'
import { SynergyBlock } from '../blocks/SynergyBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Sayfa & Düzen',
    plural: 'Sayfalar (Page Builder)',
  },
  admin: {
    group: 'İçerik Yönetimi',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'isHome', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Sayfa Başlığı',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Sayfa URL Yolu (Slug)',
          required: true,
          unique: true,
          index: true,
          admin: {
            width: '35%',
            description: 'Örn: ana-sayfa, savunma-sanayii, kariyer',
          },
        },
        {
          name: 'isHome',
          type: 'checkbox',
          label: 'Ana Sayfa Olarak Kullan',
          defaultValue: false,
          admin: { width: '15%' },
        },
      ],
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'SEO Açıklama Metni (Meta Description)',
      admin: {
        description: 'Google arama sonuçlarında görünecek 150-160 karakterlik özet.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Sayfa Blokları (Sıralamayı Değiştirmek İçin Sürükleyin)',
      labels: {
        singular: 'Blok',
        plural: 'Bloklar',
      },
      blocks: [
        HeroBlock,
        TelemetryBlock,
        CompetenciesBlock,
        FeaturedProjectsBlock,
        SynergyBlock,
        TrustMetricsBlock,
        MiniContactBlock,
        RichTextBlock,
      ],
    },
  ],
}
