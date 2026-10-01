import type { Block } from 'payload'

export const FeaturedProjectsBlock: Block = {
  slug: 'featuredProjectsBlock',
  labels: {
    singular: 'Öne Çıkan Projeler Vitrini',
    plural: 'Öne Çıkan Proje Blokları',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Üst Rozet Metni',
      defaultValue: 'Portfolyo & Referanslar',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Bölüm Başlığı',
      defaultValue: 'Öne Çıkan Saha Çalışmalarımız',
      required: true,
    },
    {
      name: 'viewAllBtnText',
      type: 'text',
      label: 'Tümünü Gör Buton Metni',
      defaultValue: 'Tüm Projeleri Keşfet',
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Gösterilecek Proje Sayısı',
      defaultValue: 3,
      min: 1,
      max: 6,
    },
    {
      name: 'manualProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      label: 'Manuel Seçilen Projeler (Boş bırakılırsa en güncel öne çıkanlar otomatik çekilir)',
    },
  ],
}
