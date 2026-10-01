import React from 'react'

export interface Pillar {
  code?: string
  icon?: string
  title?: string
  summary?: string
  tags?: Array<{ name?: string }>
}

export interface CompetenciesBlockProps {
  eyebrow?: string
  title?: string
  description?: string
  pillars?: Pillar[]
}

export const CompetenciesComponent: React.FC<CompetenciesBlockProps> = ({
  eyebrow = 'Mühendislik Yetkinliklerimiz',
  title = 'Uçtan Uca Entegre Teknoloji Sütunları',
  description = 'Donanım prototiplemesinden dağıtık bulut mimarilerine uzanan uzman kadromuz ile kritik operasyonel süreçlerinizi güvenle dijitalleştiriyoruz.',
  pillars = [
    {
      code: '01 // HW',
      icon: 'developer_board',
      title: 'Gömülü Sistemler & PCB Tasarımı',
      summary:
        'STM32, ESP32 ve FPGA tabanlı yüksek hızlı çok katmanlı kart tasarımı, RF optimizasyonu ve EMI/EMC uyumluluğu.',
      tags: [{ name: 'Altium Designer' }, { name: 'ARM Cortex' }, { name: 'FreeRTOS' }],
    },
    {
      code: '02 // SW',
      icon: 'dns',
      title: 'Kurumsal Bulut & Web Mimarileri',
      summary:
        'Ölçeklenebilir mikroservisler, SaaS yönetim platformları, sıfır-kesinti Kubernetes orkestrasyonu ve güvenli REST/gRPC API’lar.',
      tags: [{ name: 'Go / Node.js' }, { name: 'PostgreSQL' }, { name: 'Docker' }],
    },
    {
      code: '03 // IOT',
      icon: 'sensors',
      title: 'Endüstriyel IoT & Otomasyon',
      summary:
        'SCADA entegrasyonu, Modbus/CAN-Bus telemetri köprüleri, LoRaWAN saha ağları ve milisaniyelik veri toplama sistemleri.',
      tags: [{ name: 'MQTT / Sparkplug B' }, { name: 'LoRaWAN' }, { name: 'Edge AI' }],
    },
    {
      code: '04 // R&D',
      icon: 'precision_manufacturing',
      title: 'Ar-Ge & Seri Prototipleme',
      summary:
        'Fikir aşamasından mekanik muhafaza tasarımına, pilot üretimden CE/RoHS sertifikasyon süreçlerine anahtar teslim mühendislik.',
      tags: [{ name: '3D CAD / DFM' }, { name: 'Pre-Compliance' }, { name: 'SMT Pilot' }],
    },
  ],
}) => {
  return (
    <section className="competencies-section section-space">
      <div className="container capabilities-layout">
        <header className="section-intro">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="headline-lg">{title}</h2>
          {description && <p className="body-md">{description}</p>}
        </header>
        <div className="capability-index">
          {pillars.map((pillar, idx) => (
            <article className="capability-row" key={idx}>
              <span className="capability-code">
                {pillar.code || String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.summary}</p>
                {pillar.tags && (
                  <ul className="technical-tags">
                    {pillar.tags.map((tag, i) => (
                      <li key={i}>{tag.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
