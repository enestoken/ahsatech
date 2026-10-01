import type { Block } from 'payload'

export const CompetenciesBlock: Block = {
  slug: 'competenciesBlock',
  labels: {
    singular: '4 Mühendislik Sütunu Bloğu',
    plural: 'Yetkinlik Blokları',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Üst Başlık Rozeti',
      defaultValue: 'Mühendislik Yetkinliklerimiz',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Bölüm Başlığı',
      defaultValue: 'Uçtan Uca Entegre Teknoloji Sütunları',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Giriş Açıklaması',
      defaultValue:
        'Donanım prototiplemesinden dağıtık bulut mimarilerine uzanan uzman kadromuz ile kritik operasyonel süreçlerinizi güvenle dijitalleştiriyoruz.',
    },
    {
      name: 'pillars',
      type: 'array',
      label: 'Yetkinlik Sütunları (Maksimum 4)',
      fields: [
        {
          name: 'code',
          type: 'text',
          label: 'Mühendislik Kodu (Örn: 01 // HW, 02 // SW)',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Material Symbol İkonu (developer_board, dns, sensors, precision_manufacturing)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Sütun Başlığı',
          required: true,
        },
        {
          name: 'summary',
          type: 'textarea',
          label: 'Açıklama',
          required: true,
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Kullanılan Teknolojiler / Araçlar',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Teknoloji Adı (Örn: Altium Designer, FreeRTOS)',
            },
          ],
        },
      ],
      defaultValue: [
        {
          code: '01 // HW',
          icon: 'developer_board',
          title: 'Gömülü Sistemler & PCB Tasarımı',
          summary: 'STM32, ESP32 ve FPGA tabanlı yüksek hızlı çok katmanlı kart tasarımı, RF optimizasyonu ve EMI/EMC uyumluluğu.',
          tags: [{ name: 'Altium Designer' }, { name: 'ARM Cortex' }, { name: 'FreeRTOS' }],
        },
        {
          code: '02 // SW',
          icon: 'dns',
          title: 'Kurumsal Bulut & Web Mimarileri',
          summary: 'Ölçeklenebilir mikroservisler, SaaS yönetim platformları, sıfır-kesinti Kubernetes orkestrasyonu ve güvenli REST/gRPC API’lar.',
          tags: [{ name: 'Go / Node.js' }, { name: 'PostgreSQL' }, { name: 'Docker' }],
        },
        {
          code: '03 // IOT',
          icon: 'sensors',
          title: 'Endüstriyel IoT & Otomasyon',
          summary: 'SCADA entegrasyonu, Modbus/CAN-Bus telemetri köprüleri, LoRaWAN saha ağları ve milisaniyelik veri toplama sistemleri.',
          tags: [{ name: 'MQTT / Sparkplug B' }, { name: 'LoRaWAN' }, { name: 'Edge AI' }],
        },
        {
          code: '04 // R&D',
          icon: 'precision_manufacturing',
          title: 'Ar-Ge & Seri Prototipleme',
          summary: 'Fikir aşamasından mekanik muhafaza tasarımına, pilot üretimden CE/RoHS sertifikasyon süreçlerine anahtar teslim mühendislik.',
          tags: [{ name: '3D CAD / DFM' }, { name: 'Pre-Compliance' }, { name: 'SMT Pilot' }],
        },
      ],
    },
  ],
}
