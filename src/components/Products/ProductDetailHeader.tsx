import React from 'react'
import { MediaFrame } from '../UI/MediaFrame'
import Link from 'next/link'
import type { ProductDoc } from './ProductsHardwareCatalog'

export interface ProductDetailHeaderProps {
  product: ProductDoc
}

export const ProductDetailHeader: React.FC<ProductDetailHeaderProps> = ({ product }) => {
  const getProductTypeLabel = (type: string) => {
    switch (type) {
      case 'gateway':
        return 'DIN-Ray Endüstriyel Ağ Geçidi'
      case 'ai-box':
        return 'Uç Yapay Zeka (Edge AI) Kutusu'
      case 'sensor-node':
        return 'Kablosuz Sensör Düğümü (LoRa)'
      case 'software-suite':
        return 'Kurumsal Yazılım Paketi'
      default:
        return 'Endüstriyel Cihaz'
    }
  }

  const datasheetHref = `/api/datasheet/${product.slug}`

  return (
    <section
      className="page-intro"
      id="product-detail-hero"
      style={{
        position: 'relative',
        padding: 'var(--space-3xl) 0 var(--space-2xl) 0',
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderBottom: '1px solid var(--color-surface-container-high)',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Ambient Lights */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 10% 25%, rgba(0, 229, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 75%, rgba(0, 230, 118, 0.04) 0%, transparent 45%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          id="product-breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'var(--space-lg)',
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
          <Link
            href="/urunler-cozumler"
            style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}
          >
            Ürünler & Çözümler
          </Link>
          <span style={{ color: 'var(--color-outline)' }}>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{product.title}</span>
        </nav>

        {/* Badges Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: 'var(--space-md)',
          }}
        >
          <span
            className="font-tech"
            style={{
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: 'var(--color-on-surface)',
              backgroundColor: 'var(--color-surface-container)',
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px solid var(--color-surface-container-high)',
            }}
          >
            P/N: {product.modelCode}
          </span>

          <span
            className="font-tech"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--color-primary)',
              backgroundColor: 'rgba(0, 51, 34, 0.06)',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '1px solid rgba(0, 51, 34, 0.2)',
            }}
          >
            {getProductTypeLabel(product.productType).toUpperCase()}
          </span>

          {product.mountingType && (
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-outline)',
                backgroundColor: 'var(--color-surface-container)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              MONTAJ: {product.mountingType}
            </span>
          )}

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginLeft: 'auto',
              fontFamily: 'var(--font-tech)',
              fontSize: '11px',
              color: 'var(--color-secondary)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                boxShadow: '0 0 6px var(--color-secondary)',
              }}
            />
            <span>SERİ ÜRETİMDE / STOKTAN TESLİM</span>
          </div>
        </div>

        {/* Product Title */}
        <h1
          id="product-detail-title"
          className="headline-xl"
          style={{
            color: 'var(--color-on-surface)',
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-md)',
            lineHeight: 1.2,
          }}
        >
          {product.title}
        </h1>

        {/* Summary Description */}
        <p
          className="body-lg"
          style={{
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.7,
            maxWidth: '960px',
            marginBottom: 'var(--space-xl)',
            fontSize: '18px',
          }}
        >
          {product.summary}
        </p>

        {/* Feature Highlights Badges */}
        {product.highlights && product.highlights.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {product.highlights.map((badge, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-surface-container-high)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '15px', color: 'var(--color-primary)' }}
                >
                  verified
                </span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action & Download Bar */}
        <div
          id="product-action-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--color-surface-container-high)',
          }}
        >
          <a
            id="detail-datasheet-btn"
            href={datasheetHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              picture_as_pdf
            </span>
            <span>Teknik Datasheet İndir (PDF)</span>
          </a>

          <a
            id="detail-cad-btn"
            href={datasheetHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              deployed_code
            </span>
            <span>3D CAD (STEP) Dosyası</span>
          </a>

          <Link
            id="detail-rfq-btn"
            href="/teklif-al"
            className="btn-secondary"
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginLeft: 'auto',
              textDecoration: 'none',
              backgroundColor: 'rgba(0, 105, 115, 0.08)',
              borderColor: 'var(--color-secondary)',
              color: 'var(--color-secondary)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              request_quote
            </span>
            <span>Fiyat & Numune Teklifi Al</span>
          </Link>
        </div>
        <div className="product-media">
          <MediaFrame media={product.coverImage} alt={product.title} priority />
        </div>
      </div>
    </section>
  )
}
