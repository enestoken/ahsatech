import React from 'react'
import Link from 'next/link'

export const OemOdmRoadmap: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Fizibilite & Şartname',
      subtitle: 'Analiz & Target BOM',
      desc: 'Saha çalışma koşulları, elektriksel izolasyon gereksinimleri, uluslararası regülasyonlar (CE, FCC) ve hedef seri üretim birim maliyeti belirlenir.',
      icon: 'architecture',
      badge: '1 - 2 HAFTA',
    },
    {
      num: '02',
      title: 'Şematik & PCB Tasarımı',
      subtitle: '4-8 Katman & Simülasyon',
      desc: 'Altium Designer ortamında yüksek frekans empedans kontrollü PCB dizilimi yapılır; sinyal bütünlüğü (SI/PI) ve termal dağılım simüle edilir.',
      icon: 'developer_board',
      badge: '2 - 3 HAFTA',
    },
    {
      num: '03',
      title: 'Hızlı Prototipleme',
      subtitle: 'SMT Dizgi & İlk Test',
      desc: 'Kendi Ar-Ge laboratuvarımızdaki otomatik SMT dizgi hattında 0201 ve BGA paketli komponentlerle çalışan ilk parti pilot prototip üretilir.',
      icon: 'precision_manufacturing',
      badge: '1 HAFTA',
    },
    {
      num: '04',
      title: 'Gömülü Firmware & Güvenlik',
      subtitle: 'FreeRTOS & FOTA',
      desc: 'Donanım sürücüleri (BSP), kriptografik güvenli önyükleme (Secure Boot), haberleşme yığınları ve güvenli uzaktan yazılım güncelleme entegre edilir.',
      icon: 'terminal',
      badge: '2 - 4 HAFTA',
    },
    {
      num: '05',
      title: 'Seri Üretim & Sertifikasyon',
      subtitle: 'ATE Test & CE/EMC',
      desc: 'Otomatik test fikstürleri (ATE) geliştirilir; akredite EMC/LVD laboratuvar raporları ve CE uygunluk beyanı alınarak seri teslimata başlanır.',
      icon: 'verified',
      badge: 'ANAHTAR TESLİM',
    },
  ]

  return (
    <section
      id="oem-odm-roadmap-section"
      style={{
        padding: 'var(--space-4xl) 0',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-surface-container-high)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'var(--space-3xl)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 105, 115, 0.08)',
              border: '1px solid rgba(0, 105, 115, 0.25)',
              marginBottom: 'var(--space-md)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
              }}
            />
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-secondary)',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              ÖZEL MÜHENDİSLİK SÜRECİ
            </span>
          </div>

          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            5 Aşamalı OEM / ODM Özel Ürün Geliştirme Yol Haritası
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}
          >
            Fikrinizi veya teknik şartnamenizi anahtar teslim bir donanım ürününe dönüştürüyoruz.
            Kendi markanız, özel kasanız ve sertifikalı donanımınızla pazara en hızlı ve hatasız
            şekilde çıkın.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div
          id="oem-pipeline-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'var(--space-lg)',
            position: 'relative',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              id={`oem-step-card-${step.num}`}
              className="tech-card"
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                border: '1px solid var(--color-surface-container-high)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Step Number & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <span
                    className="font-tech"
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: idx === 4 ? 'var(--color-secondary)' : 'var(--color-primary)',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="font-tech"
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--color-outline)',
                      backgroundColor: 'var(--color-surface-container)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3
                  className="headline-sm"
                  style={{
                    fontSize: '18px',
                    color: 'var(--color-on-surface)',
                    marginBottom: '4px',
                  }}
                >
                  {step.title}
                </h3>
                <div
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {step.subtitle}
                </div>

                {/* Description */}
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

              {/* Bottom Icon */}
              <div
                style={{
                  borderTop: '1px solid var(--color-surface-container-high)',
                  paddingTop: 'var(--space-md)',
                  marginTop: 'var(--space-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-outline)',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  {step.icon}
                </span>
                <span className="font-tech" style={{ fontSize: '11px' }}>
                  Aşama Doğrulama
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OEM/ODM Direct Conversion Banner */}
        <div
          style={{
            padding: 'var(--space-2xl) var(--space-xl)',
            borderRadius: 'var(--radius-xl)',
            background:
              'linear-gradient(135deg, rgba(0, 51, 34, 0.05) 0%, rgba(0, 105, 115, 0.08) 100%)',
            border: '1px solid var(--color-surface-container-high)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-xl)',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <h3
              className="headline-sm"
              style={{ color: 'var(--color-on-surface)', marginBottom: '8px' }}
            >
              Özel bir donanım projeniz mi var?
            </h3>
            <p
              className="body-md"
              style={{ color: 'var(--color-on-surface-variant)', margin: 0, lineHeight: 1.6 }}
            >
              NDA (Gizlilik Sözleşmesi) güvencesiyle teknik şartnamenizi inceleyelim; 24 saat içinde
              mimari ön fizibilite ve prototip yol haritasını sunalım.
            </p>
          </div>

          <Link
            id="oem-cta-rfq-btn"
            href="/teklif-al"
            className="btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <span>OEM / ODM Başvurusu Yap</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              send
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
