import React from 'react'
import Link from 'next/link'

export const SoftwareSolutionsShowcase: React.FC = () => {
  return (
    <section
      id="software-solutions-section"
      style={{
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderBottom: '1px solid var(--color-surface-container-high)',
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
            KURUMSAL YAZILIM & BULUT ÇÖZÜMLERİ
          </span>
          <h2
            className="headline-lg"
            style={{
              color: 'var(--color-on-surface)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Donanımla Bütünleşik Geliştirilen Yazılım Mimarileri
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            AhsaTech donanımları ile tam uyumlu çalışan, mikroservis mimarisine sahip ölçeklenebilir
            telemetri ve yapay zeka yazılım paketleri.
          </p>
        </div>

        {/* 2 Software Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {/* Solution 1: AhsaCloud */}
          <div
            id="software-card-ahsacloud"
            className="tech-card"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
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
                  backgroundColor: 'rgba(0, 105, 115, 0.1)',
                  border: '1px solid rgba(0, 105, 115, 0.25)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
                >
                  cloud_sync
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-secondary)' }}
                >
                  DAĞITIK TELEMETRİ PLATFORMU
                </span>
              </div>

              <h3
                className="headline-md"
                style={{
                  color: 'var(--color-on-surface)',
                  marginBottom: 'var(--space-sm)',
                  fontSize: '24px',
                }}
              >
                AhsaCloud IoT & SCADA Platformu
              </h3>

              <p
                className="body-sm"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                Milyonlarca sensör ve gateway aygıtından gelen telemetri paketlerini mikrosaniyelik
                gecikmeyle işleyen, MQTT/WebSocket tabanlı, dinamik widget gösterge panoları ve
                otomatik alarm kural motoru sunan kurumsal IoT platformu.
              </p>

              {/* Feature Checklist */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {[
                  'TLS 1.3 ve X.509 Cihaz Sertifikasıyla Uçtan Uca Şifreleme',
                  'Zaman Serisi (Time-Series) Veri Ambarı ve Cold Storage',
                  'Özelleştirilebilir Sürükle-Bırak SCADA Gösterge Panelleri',
                  'RESTful & GraphQL API Arayüzü ile ERP/MES Entegrasyonu',
                ].map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
                    >
                      check_circle
                    </span>
                    <span
                      className="body-sm"
                      style={{ fontSize: '13px', color: 'var(--color-on-surface)' }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--color-surface-container-high)',
                paddingTop: 'var(--space-md)',
              }}
            >
              <Link
                href="/iletisim"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                }}
              >
                <span>Demo & Lisans Talebi Oluştur</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Solution 2: AhsaVision */}
          <div
            id="software-card-ahsavision"
            className="tech-card"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-container-high)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
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
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  border: '1px solid rgba(0, 229, 255, 0.25)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '16px', color: 'var(--color-primary)' }}
                >
                  visibility
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)' }}
                >
                  UÇ YAPAY ZEKA GÖRÜ SİSTEMİ
                </span>
              </div>

              <h3
                className="headline-md"
                style={{
                  color: 'var(--color-on-surface)',
                  marginBottom: 'var(--space-sm)',
                  fontSize: '24px',
                }}
              >
                AhsaVision AI Kalite Kontrolü
              </h3>

              <p
                className="body-sm"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.65,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                AhsaEdge AI-Box 100 donanımı üzerinde çalışan bilgisayarlı görü sistemi; konveyör
                hatlarında saniyede 60 ürünü analiz ederek mikron seviyesindeki çatlak, leke ve
                montaj hatalarını anında tespit eder ve pnömatik ayırıcıyı tetikler.
              </p>

              {/* Feature Checklist */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {[
                  '40 TOPS INT8 NPU ile 60 fps Gerçek Zamanlı Çıkarım',
                  '< 10 ms Karar ve Pnömatik Hata Ayırma Röle Çıkışı',
                  'Kendi Modellerinizi Eğitme (YOLOv8 & ResNet Transfer Learning)',
                  'Endüstriyel Kamera Protokolleri (GigE Vision & GenICam Uyumlu)',
                ].map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '16px', color: 'var(--color-primary)' }}
                    >
                      check_circle
                    </span>
                    <span
                      className="body-sm"
                      style={{ fontSize: '13px', color: 'var(--color-on-surface)' }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--color-surface-container-high)',
                paddingTop: 'var(--space-md)',
              }}
            >
              <Link
                href="/iletisim"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                }}
              >
                <span>Hatta Özel AI Fizibilite İste</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
