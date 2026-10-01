import React from 'react'

export interface PrecisionMetric {
  value: string
  unit?: string
  label: string
}

interface AboutHeroProps {
  tagline?: string
  philosophy?: string
  metrics?: PrecisionMetric[]
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  tagline = 'Kadim Geometri ve Hassas Mühendisliğin Kesişim Noktası',
  philosophy = 'AhsaTech, ismini “sağlamlık, derin bilgi ve zarafet” prensiplerinden alarak; geleneksel zanaat ve geometrik nizamın kusursuzluğunu 21. yüzyılın yazılım ve elektronik teknolojileriyle buluşturmak üzere kuruldu.',
  metrics = [
    { value: '0.05', unit: 'mm', label: 'Tolerans Hassasiyeti' },
    { value: '99.98', unit: '%', label: 'Uptime & Kararlılık' },
    { value: '8', unit: 'Katman', label: 'Yüksek Yoğunluklu PCB' },
    { value: 'ISO', unit: '9001 / 27001', label: 'Akrediteli Kalite Sistemi' },
  ],
}) => {
  return (
    <section
      className="page-intro"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--color-surface-container-lowest)',
        padding: 'var(--space-3xl) 0 var(--space-2xl) 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Girih / Arabesque Ambient Mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.35,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 1200 700"
          fill="none"
          stroke="var(--color-surface-variant)"
          style={{ width: '1200px', height: '700px' }}
        >
          <defs>
            <pattern id="about-girih-pcb" width="160" height="160" patternUnits="userSpaceOnUse">
              <path d="M80 0 L160 80 L80 160 L0 80 Z" strokeDasharray="2 2" strokeWidth="0.75" />
              <circle cx="80" cy="80" r="14" strokeWidth="0.75" />
              <path d="M0 0 L80 80 M160 0 L80 80 M160 160 L80 80 M0 160 L80 80" strokeWidth="0.5" />
              <circle cx="0" cy="80" r="2" fill="currentColor" />
              <circle cx="160" cy="80" r="2" fill="currentColor" />
              <circle cx="80" cy="0" r="2" fill="currentColor" />
              <circle cx="80" cy="160" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-girih-pcb)" />
        </svg>
      </div>

      {/* Diffuse Cyan Light */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '400px',
          backgroundColor: 'rgba(52, 233, 253, 0.1)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          {/* Eyebrow Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '999px',
              backgroundColor: 'var(--color-surface-container)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-tech)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary-container)',
              }}
            />
            <span>Kurumsal Değerlerimiz &amp; Felsefemiz</span>
          </div>

          {/* Main Headline */}
          <h1
            className="display-lg"
            style={{
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-md)',
              letterSpacing: '-0.03em',
            }}
          >
            {tagline}
          </h1>

          {/* Philosophy Paragraph */}
          <p
            className="body-lg"
            style={{
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.7,
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {philosophy}
          </p>

          {/* Precision Engineering Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
              gap: 'var(--space-md)',
              padding: 'var(--space-lg)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--color-surface-container-low)',
              border: '1px solid var(--color-surface-container-high)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-md)',
                }}
              >
                <div
                  className="font-tech"
                  style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {m.value}
                  {m.unit && (
                    <span
                      style={{
                        fontSize: '16px',
                        color: 'var(--color-secondary)',
                        marginLeft: '4px',
                        fontWeight: 700,
                      }}
                    >
                      {m.unit}
                    </span>
                  )}
                </div>
                <span
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-outline)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
