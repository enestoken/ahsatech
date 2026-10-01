import React from 'react'
import Link from 'next/link'

export const ProjectDetailCTA: React.FC = () => {
  return (
    <section
      id="project-detail-cta"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-surface-container-high)',
      }}
    >
      <div className="container">
        <div
          style={{
            padding: 'var(--space-2xl) var(--space-xl)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(0, 230, 118, 0.05) 100%)',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-xl)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              className="label-sm"
              style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '8px' }}
            >
              MÜHENDİSLİK İŞBİRLİĞİ & ÖZEL TASARIM
            </span>
            <h3
              className="headline-md"
              style={{ color: 'var(--color-on-surface)', marginBottom: '8px', lineHeight: 1.3 }}
            >
              Benzer bir donanım veya IoT mimarisini projenize uyarlamak ister misiniz?
            </h3>
            <p
              className="body-md"
              style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}
            >
              Teknik isterlerinizi, sıcaklık koşullarınızı ve hedef donanım bütçenizi bize iletin; 24 saat içinde
              kapsamlı bir fizibilite ve prototipleme yol haritası sunalım.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
            }}
          >
            <Link
              id="cta-rfq-btn"
              href="/teklif-al"
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Teknik Teklif İste (RFQ)</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                send
              </span>
            </Link>

            <Link
              id="cta-all-projects-btn"
              href="/projelerimiz"
              className="btn-secondary"
              style={{
                padding: '14px 24px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_back
              </span>
              <span>Tüm Projeleri İncele</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
