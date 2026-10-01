import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Ürün',
    plural: 'Ürünler',
  },
  admin: {
    group: 'İçerik Yönetimi',
    useAsTitle: 'title',
    defaultColumns: ['title', 'modelCode', 'productType', 'mountingType', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Ürün Adı',
      required: true,
    },
    {
      name: 'modelCode',
      type: 'text',
      label: 'Model / Parça Kodu (P/N)',
      required: true,
      admin: {
        description: 'Örn: AHSA-GW-400-DIN, AHSA-AIBOX-100',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Yolu (Slug)',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'productType',
      type: 'select',
      label: 'Ürün Tipi',
      required: true,
      defaultValue: 'gateway',
      options: [
        { label: 'DIN-Ray & Saha Gateway', value: 'gateway' },
        { label: 'Uç Yapay Zeka (Edge AI) Kutusu', value: 'ai-box' },
        { label: 'Kablosuz Sensör Düğümü (LoRa/BLE)', value: 'sensor-node' },
        { label: 'Kurumsal IoT Yazılım Paketi', value: 'software-suite' },
      ],
    },
    {
      name: 'mountingType',
      type: 'text',
      label: 'Montaj / Kasa Tipi',
      defaultValue: 'DIN-Ray Tipi (Endüstriyel)',
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
      name: 'summary',
      type: 'textarea',
      label: 'Kısa Tanıtım Özeti',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Ayrıntılı Teknik Şartname & Mimari Açıklama',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ürün Kapak Görseli',
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Öne Çıkan Özellik Rozetleri',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Rozet Metni (Örn: TPM 2.0 Hazır, 2.5kV Galvanik İzolasyon, CE & EMC)',
          required: true,
        },
      ],
    },
    {
      name: 'specsTable',
      type: 'array',
      label: 'Teknik Özellik Tablosu',
      labels: {
        singular: 'Özellik',
        plural: 'Özellikler',
      },
      fields: [
        {
          name: 'parameter',
          type: 'text',
          label: 'Parametre (Örn: İşlemci, RAM, Hücresel Ağ, Arayüzler, Besleme)',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Spesifikasyon (Örn: Quad-Core ARM Cortex-A53, 4G LTE Cat-4 / 5G)',
          required: true,
        },
      ],
    },
    {
      name: 'datasheetFile',
      type: 'upload',
      relationTo: 'media',
      label: 'İndirilebilir PDF Datasheet Dokümanı',
    },
    {
      name: 'cadFile',
      type: 'upload',
      relationTo: 'media',
      label: '3D STEP / CAD Çizim Dosyası',
    },
  ],
}
