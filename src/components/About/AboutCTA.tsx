import React from 'react'
import Link from 'next/link'

export const AboutCTA: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        padding: 'var(--space-2xl) 0 var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">
        <div
          className="tech-card dark-cta"
          style={{
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            padding: 'var(--space-2xl)',
            borderRadius: 'var(--radius-2xl)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-xl)',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          {/* Subtle Arabesque Watermark */}
          <div
            style={{
              position: 'absolute',
              right: '-60px',
              bottom: '-60px',
              width: '320px',
              height: '320px',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="50 5 95 50 50 95 5 50" />
              <polygon points="50 5 95 50 50 95 5 50" transform="rotate(45 50 50)" />
              <circle cx="50" cy="50" r="25" />
            </svg>
          </div>

          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 10 }}>
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--color-secondary-container)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Birlikte İnşa Edelim
            </span>

            <h2 className="headline-lg" style={{ color: '#ffffff', marginBottom: '10px' }}>
              Geleceğin Sistemlerini Bugünden Tasarlamaya Hazır mısınız?
            </h2>

            <p className="body-md" style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
              Ar-Ge projeleriniz, gömülü sistem ihtiyaçlarınız veya uçtan uca IoT platformlarınız
              için AhsaTech mühendislik ekibiyle tanışın.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-md)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <Link
              href="/iletisim"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 26px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-secondary-container)',
                color: 'var(--color-brand-dark)',
                fontFamily: 'var(--font-tech)',
                fontSize: '13px',
                fontWeight: 700,
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.2s',
              }}
            >
              <span>Teknik Toplantı Planlayın</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_forward
              </span>
            </Link>

            <Link
              href="/projelerimiz"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 24px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontFamily: 'var(--font-tech)',
                fontSize: '13px',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.2s',
              }}
            >
              <span>Projelerimizi İnceleyin</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
