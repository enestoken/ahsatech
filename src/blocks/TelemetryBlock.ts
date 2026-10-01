import type { Block } from 'payload'

export const TelemetryBlock: Block = {
  slug: 'telemetryBlock',
  labels: {
    singular: 'Telemetri & Canlı Çip Paneli',
    plural: 'Telemetri Blokları',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Panel Başlık Rozeti',
      defaultValue: 'Sistem Telemetrisi',
    },
    {
      name: 'feedStatus',
      type: 'text',
      label: 'Canlı Yayın Durumu',
      defaultValue: 'LIVE FEED : CLOUD_01',
    },
    {
      name: 'chipModel',
      type: 'text',
      label: 'Çip Modeli',
      defaultValue: 'AHSA-STM32-H7',
    },
    {
      name: 'chipClock',
      type: 'text',
      label: 'Çip Saat Frekansı',
      defaultValue: '480 MHz',
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Gerçek Zamanlı Metrikler',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Metrik Adı (Örn: Uptime Oranı, Tamamlanan Proje)',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Sayısal Değer (Örn: %99.98, 40+, 12 Ülke)',
          required: true,
        },
        {
          name: 'subtext',
          type: 'text',
          label: 'Alt Açıklama (Örn: Endüstriyel Seviye, Saha Telemetrisi)',
        },
      ],
      defaultValue: [
        { label: 'Uptime Oranı', value: '%99.98', subtext: 'Endüstriyel Seviye' },
        { label: 'Tamamlanan', value: '40+', subtext: 'Donanım & Yazılım' },
        { label: 'Aktif Cihaz', value: '12 Ülke', subtext: 'Saha Telemetrisi' },
      ],
    },
    {
      name: 'offsetTagTitle',
      type: 'text',
      label: 'Köşe Vurgu Başlığı',
      defaultValue: 'Modüler Hibrit Mimari',
    },
    {
      name: 'offsetTagDesc',
      type: 'text',
      label: 'Köşe Vurgu Alt Açıklaması',
      defaultValue: 'Silikon seviyesinden buluta entegre',
    },
  ],
}
