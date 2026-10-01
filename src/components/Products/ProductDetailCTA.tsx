import React from 'react'
import Link from 'next/link'

export const ProductDetailCTA: React.FC = () => {
  return (
    <section
      id="product-detail-cta"
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
            background: 'linear-gradient(135deg, rgba(0, 51, 34, 0.05) 0%, rgba(0, 105, 115, 0.08) 100%)',
            border: '1px solid rgba(0, 105, 115, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-xl)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '8px' }}>
              DEĞERLENDİRME KİTİ & NUMUNE
            </span>
            <h3 className="headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: '8px', lineHeight: 1.3 }}>
              Bu cihazı kendi sahanızda veya test laboratuvarınızda denemek ister misiniz?
            </h3>
            <p className="body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}>
              Mühendislik ekibimiz projenize özel test numunesi ve SDK yazılım kütüphanelerini 48 saat içinde hazırlasın.
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
              id="cta-sample-rfq-btn"
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
              <span>Numune / Teklif İste (RFQ)</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                send
              </span>
            </Link>

            <Link
              id="cta-all-products-btn"
              href="/urunler-cozumler"
              className="btn-secondary"
              style={{
                padding: '14px 24px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                arrow_back
              </span>
              <span>Tüm Donanım Kataloğu</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
