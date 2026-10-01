import type { Block } from 'payload'

export const MiniContactBlock: Block = {
  slug: 'miniContactBlock',
  labels: {
    singular: 'Hızlı İletişim / Eylem Çağrısı (CTA)',
    plural: 'Hızlı İletişim Blokları',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Üst Rozet',
      defaultValue: 'Projenizi Hayata Geçirelim',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Ana Başlık',
      defaultValue: 'Fikrinizi Seri Üretime ve Global Pazara Taşımaya Hazır mısınız?',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Açıklama',
      defaultValue:
        'Mühendislik ekibimiz gereksinimlerinizi analiz etsin; donanım, gömülü yazılım ve bulut mimarisi için kapsamlı bir yol haritası ve teknik fizibilite sunalım.',
    },
    {
      name: 'directEmail',
      type: 'text',
      label: 'Doğrudan E-posta Butonu',
      defaultValue: 'info@ahsatech.com',
    },
    {
      name: 'formTitle',
      type: 'text',
      label: 'Mini Form Başlığı',
      defaultValue: 'Hızlı İhtiyaç Bildirimi',
    },
    {
      name: 'formSubtitle',
      type: 'text',
      label: 'Mini Form Alt Açıklaması',
      defaultValue: 'Uzman mühendislerimiz 24 saat içinde dönüş yapacaktır.',
    },
  ],
}
