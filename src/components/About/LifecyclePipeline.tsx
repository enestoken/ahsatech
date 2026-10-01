import React from 'react'

export const LifecyclePipeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'İhtiyaç Analizi & Mimari',
      desc: 'Uygulama gereksinimlerinin tespiti, güç bütçesi hesabı, işlemci/SoC seçimi ve sistem mimarisi dokümantasyonu.',
      badgeIcon: 'rule',
      badgeText: 'Spesifikasyon Belgesi',
      numBg: 'var(--color-primary)',
      numColor: '#ffffff',
    },
    {
      num: '02',
      title: 'Şematik & PCB + Yazılım',
      desc: 'Çok katmanlı PCB yerleşimi, sinyal bütünlüğü analizleri ve donanım soyutlama katmanı (HAL) yazılım algoritmaları.',
      badgeIcon: 'developer_board',
      badgeText: 'Altium & C/C++ Mimarisi',
      numBg: 'var(--color-secondary)',
      numColor: '#ffffff',
    },
    {
      num: '03',
      title: 'Hızlı Prototipleme & Test',
      desc: 'Laboratuvarda 3D baskı kasalama, SMD dizgi, termal görüntüleme, osiloskop sinyal doğrulaması ve EMC/EMI ön testleri.',
      badgeIcon: 'speed',
      badgeText: 'EMC/EMI Validasyonu',
      numBg: 'var(--color-tertiary-container)',
      numColor: 'var(--color-on-tertiary)',
    },
    {
      num: '04',
      title: 'Bulut & Güvenlik',
      desc: 'MQTT/CoAP ile güvenli IoT telemetrisi, TLS 1.3 şifrelemesi, OTA kablosuz yazılım güncelleme altyapısı ve siber güvenlik taraması.',
      badgeIcon: 'cloud_sync',
      badgeText: 'End-to-End Şifreleme',
      numBg: 'var(--color-primary-container)',
      numColor: 'var(--color-on-primary)',
    },
    {
      num: '05',
      title: 'Seri Üretim & Destek',
      desc: 'Otomatik test fikstürleri (JTAG/Bed of Nails), seri üretim hat yönetimi, ürün yaşam döngüsü (PLM) ve uzun ömürlü bakım desteği.',
      badgeIcon: 'precision_manufacturing',
      badgeText: '10 Yıl Parça Garantisi',
      numBg: 'var(--color-secondary-container)',
      numColor: 'var(--color-on-secondary-container)',
    },
  ]

  return (
    <section
      className="lifecycle"
      style={{
        width: '100%',
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          <div>
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Mühendislik Metodolojisi
            </span>
            <h2 className="headline-lg" style={{ color: 'var(--color-primary)' }}>
              5 Aşamalı Ürün Yaşam Döngüsü
            </h2>
          </div>
          <p
            className="body-md"
            style={{
              color: 'var(--color-on-surface-variant)',
              maxWidth: '440px',
              lineHeight: 1.6,
            }}
          >
            Fikirden endüstriyel seri üretime uzanan doğrulanmış, hatasız ve sürekli denetlenen
            süreç zinciri.
          </p>
        </div>

        {/* Pipeline Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
            gap: 'var(--space-md)',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: 'var(--space-lg)',
                backgroundColor: 'var(--color-surface-container-lowest)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Step Circle Number */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: step.numBg,
                    color: step.numColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '14px',
                    fontWeight: 800,
                    marginBottom: 'var(--space-md)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {step.num}
                </div>

                <h3
                  className="headline-sm"
                  style={{
                    fontSize: '17px',
                    color: 'var(--color-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="body-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: 1.6,
                    fontSize: '13px',
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Step Sub-Badge */}
              <div
                style={{
                  marginTop: 'var(--space-lg)',
                  paddingTop: 'var(--space-sm)',
                  borderTop: '1px solid var(--color-surface-container-high)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-secondary)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                  {step.badgeIcon}
                </span>
                <span>{step.badgeText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
