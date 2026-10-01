import React from 'react'

export const OfficeLocations: React.FC = () => {
  return (
    <section
      id="office-locations-section"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-surface-container-high)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: 'var(--space-2xl)' }}>
          <span
            className="label-sm"
            style={{
              color: 'var(--color-secondary)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            AR-GE & OPERASYON MERKEZLERİ
          </span>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Global Mühendislik Masalarımız
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            Tasarım, prototipleme ve test süreçlerimizi yürüttüğümüz teknokent laboratuvarımız ve
            bölgesel operasyon ofislerimiz.
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {/* Location 1: Marmara Teknokent */}
          <div
            id="office-card-marmara"
            className="tech-card"
            style={{
              backgroundColor: 'var(--color-surface-container-lowest)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 51, 34, 0.06)',
                  border: '1px solid rgba(0, 51, 34, 0.2)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '16px', color: 'var(--color-primary)' }}
                >
                  domain
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)' }}
                >
                  ANA AR-GE & TEST LABORATUVARI
                </span>
              </div>

              <h3
                className="headline-sm"
                style={{ color: 'var(--color-on-surface)', fontSize: '22px', marginBottom: '8px' }}
              >
                Marmara Teknokent AR-GE Merkezi
              </h3>

              <p
                className="body-sm"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.6,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                Bilişim Vadisi Yerleşkesi, Teknoloji Geliştirme Bölgesi No: 14/B, 41400 Gebze /
                Kocaeli, Türkiye
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-primary)' }}
                  >
                    call
                  </span>
                  <a
                    href="tel:+902626789000"
                    className="font-tech"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-on-surface)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    +90 (262) 678 90 00
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-primary)' }}
                  >
                    mail
                  </span>
                  <a
                    href="mailto:muhendislik@ahsatech.com"
                    className="font-tech"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    muhendislik@ahsatech.com
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                  >
                    schedule
                  </span>
                  <span
                    className="body-sm"
                    style={{ fontSize: '12px', color: 'var(--color-outline)' }}
                  >
                    Pzt - Cuma: 08:30 - 18:00 (Mühendislik Masası)
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--color-surface-container-high)',
                paddingTop: 'var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
              >
                precision_manufacturing
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}
              >
                EMC Test Odası & Otomatik SMT Dizgi Hattı
              </span>
            </div>
          </div>

          {/* Location 2: Al-Ahsa Regional Hub */}
          <div
            id="office-card-alahsa"
            className="tech-card"
            style={{
              backgroundColor: 'var(--color-surface-container-lowest)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 105, 115, 0.08)',
                  border: '1px solid rgba(0, 105, 115, 0.25)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
                >
                  public
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-secondary)' }}
                >
                  GCC & MENA OPERASYON MERKEZİ
                </span>
              </div>

              <h3
                className="headline-sm"
                style={{ color: 'var(--color-on-surface)', fontSize: '22px', marginBottom: '8px' }}
              >
                Al-Ahsa Global Teknoloji Ofisi
              </h3>

              <p
                className="body-sm"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.6,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                King Fahd Industrial Road, Al-Ahsa Oasis Tech Hub, Building 7, Suudi Arabistan / GCC
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                  >
                    call
                  </span>
                  <a
                    href="tel:+966135801234"
                    className="font-tech"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-on-surface)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    +966 13 580 1234
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                  >
                    mail
                  </span>
                  <a
                    href="mailto:gcc@ahsatech.com"
                    className="font-tech"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-secondary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    gcc@ahsatech.com
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                  >
                    schedule
                  </span>
                  <span
                    className="body-sm"
                    style={{ fontSize: '12px', color: 'var(--color-outline)' }}
                  >
                    Pazar - Perşembe: 09:00 - 17:00 (Bölgesel Lojistik)
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--color-surface-container-high)',
                paddingTop: 'var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
              >
                sensors
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}
              >
                Enerji Şebekesi & Petrol/Gaz Saha Telemetri Masası
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
