import React from 'react'

export interface SynergyBlockProps {
  eyebrow?: string
  title?: string
  description?: string
  guaranteeBadge?: string
}

export const SynergyComponent: React.FC<SynergyBlockProps> = ({
  eyebrow = 'Tek Çatı Altında Bütünleşik Çözüm',
  title = 'Donanım ile Yazılımın Kusursuz Uyumu',
  description = 'Genellikle yazılım firmaları donanımı, donanım tasarımcıları ise bulut altyapısını üçüncü taraflara devreder. AhsaTech’te PCB şemasından mikrodenetleyici bellenimine (firmware) ve oradan küresel web gösterge paneline kadar tüm katmanlar aynı mühendislik disipliniyle üretilir.',
  guaranteeBadge = '✦ Uçtan Uca Sorumluluk & Garanti',
}) => {
  const stackLayers = [
    { layer: '[L4] Web / SaaS UI', tech: 'Next.js / App Router' },
    { layer: '[L3] Bulut Veri Hattı', tech: 'Kafka / MQTT Broker' },
    { layer: '[L2] Gömülü Firmware', tech: 'Bare-Metal C / FreeRTOS' },
    { layer: '[L1] Fiziksel Donanım', tech: 'Çok Katmanlı PCB & RF' },
  ]

  const pillars = [
    {
      num: '01. Silikon & PCB',
      text: 'Kayıpsız sinyal yolları, termal analiz ve endüstriyel dayanım.',
    },
    {
      num: '02. Düşük Güç Firmware',
      text: 'Bare-metal C/C++ ve FreeRTOS ile sıfır gecikmeli yürütme.',
    },
    {
      num: '03. Bulut Entegrasyonu',
      text: 'TLS 1.3 şifreleme, MQTT ve gerçek zamanlı analitik panoları.',
    },
  ]

  return (
    <section className="integration-section section-space">
      <div className="container">
        <header className="integration-intro">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="headline-lg">{title}</h2>
          </div>
          <p className="body-lg">{description}</p>
        </header>
        <h3 className="architecture-label">Mühendislik Yığını (Full-Stack IoT)</h3>
        <ol className="architecture-flow">
          {[...stackLayers].reverse().map((layer, idx) => (
            <li key={layer.layer}>
              <span className="flow-index">0{idx + 1}</span>
              <h4>{layer.layer}</h4>
              <p>{layer.tech}</p>
            </li>
          ))}
        </ol>
        <div className="integration-pillars">
          {pillars.map((pillar, idx) => (
            <div key={idx}>
              <h3>{pillar.num}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
        <p className="integration-guarantee">{guaranteeBadge}</p>
      </div>
    </section>
  )
}
