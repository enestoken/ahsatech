import React from 'react'
import Link from 'next/link'

export interface ProjectsHeroProps {
  totalProjectsCount?: number
}

export const ProjectsHero: React.FC<ProjectsHeroProps> = ({ totalProjectsCount = 4 }) => {
  return (
    <section
      className="page-intro"
      id="projects-hero-section"
      style={{
        position: 'relative',
        padding: 'var(--space-3xl) 0 var(--space-2xl) 0',
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderBottom: '1px solid var(--color-surface-container-high)',
        overflow: 'hidden',
      }}
    >
      {/* Background Girih / Circuit Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 229, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(0, 230, 118, 0.04) 0%, transparent 45%),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 48px 48px, 48px 48px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'var(--space-md)',
            fontFamily: 'var(--font-tech)',
            fontSize: '12px',
          }}
        >
          <Link
            href="/"
            style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}
          >
            Ana Sayfa
          </Link>
          <span style={{ color: 'var(--color-outline)' }}>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Projelerimiz</span>
        </nav>

        {/* Header Title & Badges */}
        <div style={{ maxWidth: '880px', marginBottom: 'var(--space-2xl)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 229, 255, 0.08)',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              marginBottom: 'var(--space-md)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                boxShadow: '0 0 8px var(--color-primary)',
              }}
            />
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-primary)',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}
            >
              SAHA DOĞRULAMALI MÜHENDİSLİK PORTFÖYÜ
            </span>
          </div>

          <h1
            className="headline-xl"
            style={{
              color: 'var(--color-on-surface)',
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-md)',
              lineHeight: 1.15,
            }}
          >
            Aşırı Koşullarda Test Edilmiş,{' '}
            <span style={{ color: 'var(--color-primary)' }}>Görev Kritik Çözümler</span>
          </h1>

          <p
            className="body-lg"
            style={{
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.65,
              fontSize: '17px',
            }}
          >
            Yüksek gerilim trafo sahalarından patlayıcı hidrokarbon ortamlarına, otonom tarım
            istasyonlarından farmasötik temiz odalara kadar; donanım, gömülü bellenim ve bulut
            katmanlarını aynı mühendislik hassasiyetiyle üretiyoruz.
          </p>
        </div>

        {/* Live Field Telemetry Counter Strip */}
        <div
          id="projects-telemetry-strip"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'var(--space-md)',
            padding: 'var(--space-lg)',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-surface-container-high)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Metric 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              AKTİF SAHA AYGITI
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary)' }}
              >
                42.800+
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-secondary)' }}
              >
                ÜNİTE
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              12 Farklı ülkede kesintisiz işlemde
            </span>
          </div>

          {/* Metric 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              GÜNLÜK VERİ NOKTASI
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-secondary)' }}
              >
                1.2 Milyar
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-secondary)' }}
              >
                PAKET / GÜN
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              Kriptografik doğrulamalı telemetri
            </span>
          </div>

          {/* Metric 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              ORTALAMA DONANIM ÖMRÜ
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-on-surface)' }}
              >
                &gt;10 Yıl
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-outline)' }}
              >
                MTBF
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              -40°C / +85°C endüstriyel dayanım
            </span>
          </div>

          {/* Metric 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              ŞEBEKE UPTIME ORANI
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary)' }}
              >
                %99.98
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-primary)' }}
              >
                SLA
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              Sıfır veri kaybı garantisi
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
