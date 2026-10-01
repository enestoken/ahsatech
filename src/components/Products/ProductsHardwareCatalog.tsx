import React from 'react'
import Link from 'next/link'
import type { Media } from '@/payload-types'
import { MediaFrame } from '../UI/MediaFrame'

export interface ProductDoc {
  id: string | number
  title: string
  modelCode: string
  slug: string
  productType: 'gateway' | 'ai-box' | 'sensor-node' | 'software-suite'
  mountingType?: string
  status?: string
  coverImage?: number | Media | null
  gallery?: Array<{ image?: number | Media | null }>
  summary: string
  description?: string
  highlights?: Array<{ text: string; id?: string }>
  specsTable?: Array<{ parameter: string; value: string; id?: string }>
}

export interface ProductsHardwareCatalogProps {
  products: ProductDoc[]
}

export const ProductsHardwareCatalog: React.FC<ProductsHardwareCatalogProps> = ({ products }) => {
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

  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'gateway':
        return 'var(--color-primary)'
      case 'ai-box':
        return 'var(--color-secondary)'
      case 'sensor-node':
        return '#397044'
      default:
        return 'var(--color-primary)'
    }
  }

  return (
    <section
      id="hardware-catalog-section"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-surface-container-high)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: 'var(--space-2xl)' }}>
          <span
            className="label-sm"
            style={{
              color: 'var(--color-primary)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            STANDART DONANIM MODÜLLERİ
          </span>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Saha İçin Optimize Edilmiş Endüstriyel Aygıtlar
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            Doğrudan panoya ve sahaya montaja hazır standart ürün ailemiz; zorlu elektriksel
            koşullarda yüksek dayanıklılık, izole haberleşme ve donanımsal güvenlik standartlarını
            karşılar.
          </p>
        </div>

        {/* Product Cards Stack */}
        <div
          id="products-list-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2xl)',
          }}
        >
          {products.map((product) => {
            const color = getProductTypeColor(product.productType)
            const datasheetHref = `/api/datasheet/${product.slug}`

            return (
              <article
                key={product.id}
                id={`product-card-${product.slug}`}
                className="tech-card"
                style={{
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  border: '1px solid var(--color-surface-container-high)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Glowing Laser Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${color} 0%, transparent 70%)`,
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: 'var(--space-2xl)',
                    alignItems: 'start',
                  }}
                >
                  {/* Left Column: Product Info & Highlights (7 Cols) */}
                  <div style={{ gridColumn: 'span 7' }}>
                    <div className="product-media">
                      <MediaFrame media={product.coverImage} alt={product.title} />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px',
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
                          color: color,
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          border: `1px solid ${color}40`,
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
                            padding: '4px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {product.mountingType}
                        </span>
                      )}
                    </div>

                    {/* Product Title */}
                    <h3
                      className="headline-md"
                      style={{
                        color: 'var(--color-on-surface)',
                        fontSize: '26px',
                        marginBottom: 'var(--space-sm)',
                        lineHeight: 1.25,
                      }}
                    >
                      <Link
                        href={`/urunler-cozumler/${product.slug}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {product.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p
                      className="body-md"
                      style={{
                        color: 'var(--color-on-surface-variant)',
                        lineHeight: 1.65,
                        marginBottom: 'var(--space-lg)',
                      }}
                    >
                      {product.summary}
                    </p>

                    {/* Feature Highlight Badges */}
                    {product.highlights && product.highlights.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: 'var(--space-xl)',
                        }}
                      >
                        {product.highlights.map((badge, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '4px 10px',
                              borderRadius: '4px',
                              backgroundColor: 'var(--color-surface-container)',
                              border: '1px solid var(--color-surface-container-high)',
                              fontFamily: 'var(--font-tech)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: 'var(--color-on-surface)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            <span
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                backgroundColor: color,
                              }}
                            />
                            <span>{badge.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dual Action Buttons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '12px',
                      }}
                    >
                      <a
                        id={`datasheet-btn-${product.slug}`}
                        href={datasheetHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          padding: '10px 20px',
                          fontSize: '13px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          textDecoration: 'none',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                          picture_as_pdf
                        </span>
                        <span>Datasheet İndir (PDF)</span>
                      </a>

                      <Link
                        id={`detail-link-${product.slug}`}
                        href={`/urunler-cozumler/${product.slug}`}
                        className="btn-secondary"
                        style={{
                          padding: '10px 18px',
                          fontSize: '13px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Detaylı Şartname & Pinout</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Specs Summary Table (5 Cols) */}
                  <div
                    style={{
                      gridColumn: 'span 5',
                      backgroundColor: 'var(--color-surface)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-surface-container-high)',
                      padding: 'var(--space-lg)',
                    }}
                  >
                    <span
                      className="font-tech"
                      style={{
                        fontSize: '11px',
                        color: 'var(--color-outline)',
                        letterSpacing: '0.06em',
                        display: 'block',
                        marginBottom: 'var(--space-md)',
                      }}
                    >
                      ÖZET TEKNİK ŞARTNAME (QUICK SPECS)
                    </span>

                    {product.specsTable && product.specsTable.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {product.specsTable.slice(0, 5).map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              justifyContent: 'space-between',
                              gap: '12px',
                              paddingBottom: '8px',
                              borderBottom:
                                sIdx < Math.min(product.specsTable!.length, 5) - 1
                                  ? '1px solid var(--color-surface-container-high)'
                                  : 'none',
                            }}
                          >
                            <span
                              className="body-sm"
                              style={{ fontSize: '12px', color: 'var(--color-outline)' }}
                            >
                              {spec.parameter}
                            </span>
                            <span
                              className="font-tech"
                              style={{
                                fontSize: '12px',
                                fontWeight: 700,
                                color: 'var(--color-on-surface)',
                                textAlign: 'right',
                              }}
                            >
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="body-sm" style={{ color: 'var(--color-outline)' }}>
                        Kapsamlı şartname tablosu için detay sayfasını ziyaret ediniz.
                      </p>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
