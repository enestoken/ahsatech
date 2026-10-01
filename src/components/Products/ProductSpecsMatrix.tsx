import React from 'react'
import type { ProductDoc } from './ProductsHardwareCatalog'

export interface ProductSpecsMatrixProps {
  product: ProductDoc
}

export const ProductSpecsMatrix: React.FC<ProductSpecsMatrixProps> = ({ product }) => {
  return (
    <section
      id="product-specs-matrix-section"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderBottom: '1px solid var(--color-surface-container-high)',
      }}
    >
      <div className="container">
        <div
          className="project-specs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--space-2xl)',
          }}
        >
          {/* Left Column: Full Specs Table (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <span className="label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '4px' }}>
                PARAMETRE TABLOSU
              </span>
              <h3 className="headline-sm" style={{ color: 'var(--color-on-surface)' }}>
                Donanım & Elektriksel Teknik Şartname
              </h3>
            </div>

            {product.specsTable && product.specsTable.length > 0 ? (
              <div
                id="product-specs-table"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-surface-container-high)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
              >
                {product.specsTable.map((spec, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      padding: '14px 20px',
                      borderBottom:
                        idx < product.specsTable!.length - 1
                          ? '1px solid var(--color-surface-container-high)'
                          : 'none',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
                    }}
                  >
                    <span className="body-sm" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 500 }}>
                      {spec.parameter}
                    </span>
                    <span
                      className="font-tech"
                      style={{
                        color: 'var(--color-primary)',
                        fontSize: '13px',
                        fontWeight: 700,
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
                Teknik şartname tablosu için doğrudan mühendislik masasıyla iletişime geçiniz.
              </p>
            )}
          </div>

          {/* Right Column: Standards & Compliance (5 Cols) */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {/* Standards & Certifications Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-surface-container-high)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: '24px' }}>
                  verified_user
                </span>
                <h4 className="headline-sm" style={{ fontSize: '18px', color: 'var(--color-on-surface)', margin: 0 }}>
                  Endüstriyel Standartlar & Kalite
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-primary)', marginTop: '2px' }}>
                    check_circle
                  </span>
                  <div>
                    <span className="font-tech" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-on-surface)', display: 'block' }}>
                      CE & EMC Endüstriyel Bağışıklık
                    </span>
                    <span className="body-sm" style={{ fontSize: '11px', color: 'var(--color-outline)' }}>
                      EN 61000-6-2 (Ağır Endüstriyel Bağışıklık) & EN 61000-6-4 (Emisyon)
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-primary)', marginTop: '2px' }}>
                    check_circle
                  </span>
                  <div>
                    <span className="font-tech" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-on-surface)', display: 'block' }}>
                      Elektriksel Güvenlik
                    </span>
                    <span className="body-sm" style={{ fontSize: '11px', color: 'var(--color-outline)' }}>
                      EN 62368-1 standardına uygun aşırı gerilim ve kaçak akım koruması
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-primary)', marginTop: '2px' }}>
                    check_circle
                  </span>
                  <div>
                    <span className="font-tech" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-on-surface)', display: 'block' }}>
                      Çevresel & Kimyasal Uyum
                    </span>
                    <span className="body-sm" style={{ fontSize: '11px', color: 'var(--color-outline)' }}>
                      RoHS 2011/65/EU ve REACH normlarıyla %100 kurşunsuz (Lead-Free) üretim
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering / Part Number Information */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-surface-container-high)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
              }}
            >
              <span className="font-tech" style={{ fontSize: '11px', color: 'var(--color-outline)', display: 'block', marginBottom: '6px' }}>
                SİPARİŞ VE PARÇA NUMARASI KILAVUZU
              </span>
              <div className="font-tech" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                P/N: {product.modelCode}
              </div>
              <p className="body-sm" style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)', lineHeight: 1.5, margin: 0 }}>
                Standart konfigürasyon stoktan 48 saatte kargolanır. OEM özel etiketleme ve kasa modifikasyonları için
                minimum sipariş miktarı (MOQ) 50 adettir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
