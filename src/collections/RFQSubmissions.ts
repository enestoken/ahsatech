import type { CollectionConfig } from 'payload'

export const RFQSubmissions: CollectionConfig = {
  slug: 'rfq-submissions',
  labels: {
    singular: 'Gelen Teklif Talebi',
    plural: 'Gelen Teklifler & Başvurular',
  },
  admin: {
    group: 'Operasyon',
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'contactName', 'domain', 'status', 'createdAt'],
  },
  access: {
    create: () => true, // Ziyaretçilerin form gönderebilmesi için
    read: ({ req: { user } }) => Boolean(user), // Sadece giriş yapmış yöneticiler okuyabilir
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      label: 'Talep Durumu',
      defaultValue: 'new',
      options: [
        { label: 'Yeni Başvuru (İncelenmedi)', value: 'new' },
        { label: 'Teknik İncelemede (Mühendislik Masası)', value: 'reviewing' },
        { label: 'Fizibilite / Teklif İletildi', value: 'proposal-sent' },
        { label: 'Tamamlandı / Arşivlendi', value: 'closed' },
      ],
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'contactName',
          type: 'text',
          label: 'Yetkili Ad Soyad',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Kurum / Şirket Unvanı',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Kurumsal E-posta',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefon Numarası',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'domain',
          type: 'select',
          label: 'Proje Çözüm Alanı',
          required: true,
          defaultValue: 'embedded-hardware',
          options: [
            { label: 'Gömülü Donanım & PCB Tasarımı', value: 'embedded-hardware' },
            { label: 'Endüstriyel IoT & SCADA Sistemleri', value: 'iot-scada' },
            { label: 'Kurumsal Yazılım & Bulut Mimarisi', value: 'enterprise-software' },
            { label: 'Uçtan Uca Anahtar Teslim Sistem', value: 'turnkey-system' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'projectPhase',
          type: 'select',
          label: 'Mevcut Proje Aşaması',
          required: true,
          defaultValue: 'prototype',
          options: [
            { label: 'Fikir / Ar-Ge Aşaması', value: 'concept' },
            { label: 'Prototipleme Aşaması', value: 'prototype' },
            { label: 'Seri Üretim / Üretim Büyütme', value: 'mass-production' },
            { label: 'Mevcut Sistem İyileştirme', value: 'upgrade' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'requirements',
      type: 'textarea',
      label: 'Müşterinin Yazdığı Teknik İsterler & Şartname Özeti',
      admin: {
        description: 'Mikrokontrolör tercihi, haberleşme protokolleri, sıcaklık ve güç isterleri.',
      },
    },
    {
      name: 'attachedFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Yüklenen Teknik Doküman, Gerber (.zip) veya CAD Çizimi',
    },
    {
      name: 'ndaAgreed',
      type: 'checkbox',
      label: 'NDA (Gizlilik Sözleşmesi) ve KVKK Şartlarını Onayladı',
      defaultValue: true,
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      label: 'Yönetici Notları & Değerlendirme',
      admin: {
        description: 'Mühendislik masasının iç takibi için not alanı.',
      },
    },
  ],
}
