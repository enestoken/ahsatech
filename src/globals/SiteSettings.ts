import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Ayarları & İletişim',
  admin: {
    group: 'Kurumsal Ayarlar',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Şirket / Marka Adı',
      defaultValue: 'AhsaTech',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Alt Başlık / Uzmanlık',
      defaultValue: 'Yazılım & Elektronik',
    },
    {
      name: 'contactEmail',
      type: 'email',
      label: 'Kurumsal İletişim E-Postası',
      defaultValue: 'info@ahsatech.com',
      required: true,
    },
    {
      name: 'contactPhone',
      type: 'text',
      label: 'Santral / Telefon Numarası',
      defaultValue: '+90 (216) 400 20 00',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Genel Merkez & AR-GE Adresi',
      defaultValue: 'Teknokent AR-GE Merkezi, No:42 Al-Ahsa / İstanbul',
    },
    {
      name: 'engineeringCapacityStatus',
      type: 'text',
      label: 'Mühendislik Kapasite Bildirim Şeridi',
      defaultValue: 'Mühendislik Kapasitesi: Açık (Marmara AR-GE)',
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Üst Menü Navigasyon Linkleri',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Menü Adı',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Hedef URL / Yol (Örn: /projelerimiz)',
          required: true,
        },
      ],
      defaultValue: [
        { label: 'Ana Sayfa', url: '/' },
        { label: 'Hakkımızda & Vizyon', url: '/hakkimizda' },
        { label: 'Projelerimiz', url: '/projelerimiz' },
        { label: 'Ürünler & Çözümler', url: '/urunler-cozumler' },
        { label: 'İletişim', url: '/iletisim' },
      ],
    },
  ],
}
