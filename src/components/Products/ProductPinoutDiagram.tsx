import React from 'react'
import type { ProductDoc } from './ProductsHardwareCatalog'

export interface ProductPinoutDiagramProps {
  product: ProductDoc
}

export const ProductPinoutDiagram: React.FC<ProductPinoutDiagramProps> = ({ product }) => {
  return (
    <section
      id="product-pinout-section"
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
            DONANIM & ARAYÜZ MİMARİSİ
          </span>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Fiziksel Kasa, Portlar ve Pinout Şeması
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            Endüstriyel panolarda vidasız klemens bağlantıları ve galvanik korumalı haberleşme
            portlarıyla donatılmış fiziksel arayüz haritası.
          </p>
        </div>

        {/* Pinout Visual Box */}
        <div
          id="product-pinout-container"
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            border: '1px solid var(--color-surface-container-high)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-2xl)',
            marginBottom: 'var(--space-2xl)',
            position: 'relative',
          }}
        >
          {/* Top Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 'var(--space-md)',
              marginBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--color-surface-container-high)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '20px', color: 'var(--color-primary)' }}
              >
                developer_board
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-on-surface)' }}
              >
                {product.modelCode} — FİZİKSEL PORT VE BAĞLANTI DÜZENİ
              </span>
            </div>

            <span className="font-tech" style={{ fontSize: '11px', color: 'var(--color-outline)' }}>
              1:1 ENDÜSTRİYEL ÖLÇEK
            </span>
          </div>

          {/* SVG Hardware Front / Top View */}
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <div className="semantic-diagram">
              <div>
                <h3>AhsaTech</h3>
                <p>{product.modelCode}</p>
              </div>
              <div>
                <h3>PWR</h3>
                <p>RUN</p>
                <p>COM</p>
              </div>
              <div>
                <h3>İZOLE SERİ / FIELD BUS PORTU</h3>
                <p>[1] RS485_A [2] RS485_B [3] GND_ISO</p>
                <p>[4] CAN_H [5] CAN_L [6] SHIELD</p>
              </div>
              <div>
                <h3>GALVANİK İZOLE DİJİTAL I/O</h3>
                <p>[7] DI1+ [8] DI2+ [9] DI_COM</p>
                <p>[10] RELAY_NO [11] RELAY_COM (250V/3A)</p>
              </div>
              <div>
                <h3>2x GbE RJ45 PORTLARI</h3>
                <p>LAN 1</p>
                <p>LAN 2</p>
              </div>
              <div>
                <h3>ÇİFT YEDEKLİ GÜÇ GİRİŞİ (9 - 36 VDC)</h3>
                <p>[PWR 1] V1+ / V1- | [PWR 2] V2+ / V2-</p>
                <p>Ters Polarite & Aşırı Gerilim Korumalı (Surge 4kV)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Narrative */}
        {product.description && (
          <div
            id="product-detailed-description"
            style={{
              maxWidth: '900px',
              backgroundColor: 'var(--color-surface-container-lowest)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl)',
            }}
          >
            <h3
              className="headline-sm"
              style={{ color: 'var(--color-on-surface)', marginBottom: 'var(--space-md)' }}
            >
              Ayrıntılı Teknik Şartname & Mimari Açıklama
            </h3>
            <p
              className="body-md"
              style={{
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.8,
                fontSize: '16px',
                whiteSpace: 'pre-line',
              }}
            >
              {product.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
