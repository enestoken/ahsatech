import React from 'react'
import Link from 'next/link'

export const ProductsHero: React.FC = () => {
  return (
    <section
      className="page-intro"
      id="products-hero-section"
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
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Ürünler & Çözümler</span>
        </nav>

        {/* Hero Title & Narrative */}
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
              STANDART DONANIM & KURUMSAL ÇÖZÜMLER
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
            Endüstriyel Seviye Donanım Kataloğu &{' '}
            <span style={{ color: 'var(--color-primary)' }}>Entegre Çözümler</span>
          </h1>

          <p
            className="body-lg"
            style={{
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.65,
              fontSize: '17px',
            }}
          >
            Ağır endüstriyel koşullara hazır DIN-Ray ağ geçitleri, 40 TOPS uç yapay zeka işlem
            üniteleri, 10 yıl pil ömürlü LoRa sensör düğümleri ve uçtan uca kurumsal SCADA/IoT bulut
            yazılımları.
          </p>
        </div>

        {/* Quick Feature Counters Strip */}
        <div
          id="products-features-strip"
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
          {/* Feature 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              GALVANİK İZOLASYON
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary)' }}
              >
                %100 İzole
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              2.5kVrms & 3.75kVrms gerilim bariyeri
            </span>
          </div>

          {/* Feature 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              UYUMLULUK & SERTİFİKA
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-secondary)' }}
              >
                CE & EMC
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              EN 61000-6-2/4 endüstriyel bağışıklık
            </span>
          </div>

          {/* Feature 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              ORTALAMA DONANIM ÖMRÜ
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-on-surface)' }}
              >
                &gt;120.000h
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
              Sıfır bakım, 10+ yıl kesintisiz operasyon
            </span>
          </div>

          {/* Feature 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span className="label-sm" style={{ color: 'var(--color-outline)', fontSize: '11px' }}>
              ÖZEL ÜRETİM ALTYAPISI
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                className="font-tech"
                style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary)' }}
              >
                OEM / ODM
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-secondary)' }}
              >
                HAZIR
              </span>
            </div>
            <span
              className="body-sm"
              style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)' }}
            >
              Özel etiketleme ve kasa adaptasyonu
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
