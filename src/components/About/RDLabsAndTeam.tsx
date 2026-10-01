import React from 'react'

export interface LabItem {
  name: string
  description?: string
}

interface RDLabsAndTeamProps {
  laboratories?: LabItem[]
}

export const RDLabsAndTeam: React.FC<RDLabsAndTeamProps> = ({
  laboratories = [
    {
      name: 'Rohde & Schwarz 6 GHz VNA',
      description: 'RF & Anten Empedans Eşleme ve S-Parametre Analizi',
    },
    {
      name: 'Keysight 4-Kanal Osiloskop',
      description: 'Sinyal bütünlüğü & I2C/SPI/CAN/RS485 yüksek hızlı veri loglama',
    },
    {
      name: 'FLIR Termal Analiz Sistemi',
      description: 'Güç katı ve işlemci çekirdekleri için hassas termal haritalandırma',
    },
  ],
}) => {
  const disciplines = [
    {
      icon: 'terminal',
      title: 'Gömülü Linux & RTOS',
      desc: 'FreeRTOS, Zephyr ve Yocto tabanlı özel Linux çekirdeği optimizasyonları ve düşük gecikmeli sürücü geliştirme.',
      teamCount: '6 Çekirdek Mühendis',
      badgeBg: 'var(--color-primary-container)',
      badgeColor: 'var(--color-on-primary)',
    },
    {
      icon: 'settings_input_antenna',
      title: 'Yüksek Frekans RF',
      desc: 'LoRaWAN, BLE Mesh, Wi-Fi 6 ve Hücresel NB-IoT/Cat-M1 RF anten tasarımı ve sertifikasyon hazırlığı.',
      teamCount: '4 RF Tasarımcısı',
      badgeBg: 'var(--color-secondary)',
      badgeColor: '#ffffff',
    },
    {
      icon: 'cloud',
      title: 'Full-Stack & Bulut',
      desc: 'Mikroservis mimarileri, yüksek hacimli zaman serisi veritabanları (TimeScale/Influx) ve modern React paneller.',
      teamCount: '5 Yazılım Mimarı',
      badgeBg: 'var(--color-tertiary-container)',
      badgeColor: 'var(--color-on-tertiary)',
    },
    {
      icon: 'security',
      title: 'Donanım Güvenliği',
      desc: 'Hardware Root of Trust, Secure Boot, kriptografik donanım anahtar saklama ve fiziksel müdahale korumaları.',
      teamCount: 'DevSecOps & Hardware Sec',
      badgeBg: 'var(--color-surface-container)',
      badgeColor: 'var(--color-primary)',
    },
  ]

  return (
    <section
      className="labs-team"
      style={{
        width: '100%',
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface-container-low)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'var(--space-2xl)' }}>
          <span
            className="font-tech"
            style={{
              fontSize: '11px',
              color: 'var(--color-secondary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Mühendislik Kapasitesi
          </span>
          <h2
            className="headline-lg"
            style={{ color: 'var(--color-primary)', marginBottom: '8px' }}
          >
            Ar-Ge Laboratuvarı &amp; Uzman Kadromuz
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            15+ araştırmacı mühendisimiz, gömülü donanım tasarımı ve yüksek verimli yazılım
            mimarilerinde inovasyon sınırlarını her gün yeniden tanımlıyor.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Lab Visual Card (Wide) */}
          <div
            className="tech-card"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              minHeight: '360px',
              backgroundColor: 'var(--color-surface-container-high)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: 'var(--space-xl)',
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9FP0Sfrbvtpai--tI0iFfWtg0GCLa7UohTQvv1RhZlwnkJQNaAnvhf_7nelxHbQyOlqniQtTarPoZoU7ynHGlpPedEr3yv7VajvVKokTvLQ08KJUCrixITKbE4P-cnEUxHerk6QfYOSDrrzjCYsAeAbLtzdLJ6Z6ueyaZSSnLYVNzL9CkbuM95BIfZOqSN-6ERVY-3sMXx0dITPq41ARer02FaueSeoShqYAYCCk3PoNNQKKZ8OrbjQ"
              alt="AhsaTech AR-GE Laboratuvarı"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0, 51, 34, 0.92) 0%, rgba(0, 51, 34, 0.3) 60%, transparent 100%)',
              }}
            />

            <div style={{ position: 'relative', zIndex: 10, color: '#ffffff' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-secondary)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                Donanım Laboratuvarı
              </span>
              <h3 className="headline-md" style={{ color: '#ffffff', marginBottom: '6px' }}>
                RF Spektrum Analizi &amp; Yüksek Frekans Test Odası
              </h3>
              <p
                className="body-sm"
                style={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: '580px', lineHeight: 1.6 }}
              >
                GHz seviyesindeki anten empedans testleri, gürültü emisyon ölçümleri ve termal stres
                analizleri kendi laboratuvarımızda gerçekleştirilir.
              </p>
            </div>
          </div>

          {/* Lab Inventory & Live Capabilities (Narrow) */}
          <div
            className="tech-card"
            style={{
              padding: 'var(--space-xl)',
              backgroundColor: 'var(--color-surface-container-lowest)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <span
                  className="font-tech"
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Laboratuvar Envanteri
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ color: 'var(--color-secondary)', fontSize: '22px' }}
                >
                  science
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {laboratories.map((lab, lIdx) => (
                  <div
                    key={lIdx}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-surface-container-low)',
                      border: '1px solid var(--color-surface-container-high)',
                    }}
                  >
                    <div
                      className="font-tech"
                      style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)' }}
                    >
                      {lab.name}
                    </div>
                    {lab.description && (
                      <div
                        className="body-sm"
                        style={{
                          fontSize: '12px',
                          color: 'var(--color-on-surface-variant)',
                          marginTop: '2px',
                        }}
                      >
                        {lab.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                paddingTop: 'var(--space-md)',
                marginTop: 'var(--space-md)',
                borderTop: '1px solid var(--color-surface-container-high)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span className="body-sm" style={{ fontSize: '12px', color: 'var(--color-outline)' }}>
                Kalibrasyon Durumu
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-secondary-container)',
                  }}
                />
                Aktif &amp; Sertifikalı
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Disciplines Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'var(--space-lg)',
          }}
        >
          {disciplines.map((d, dIdx) => (
            <div
              key={dIdx}
              className="tech-card"
              style={{
                padding: 'var(--space-lg)',
                backgroundColor: 'var(--color-surface-container-lowest)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: d.badgeBg,
                    color: d.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                    {d.icon}
                  </span>
                </div>

                <h4
                  className="headline-sm"
                  style={{ fontSize: '17px', color: 'var(--color-primary)', marginBottom: '6px' }}
                >
                  {d.title}
                </h4>

                <p
                  className="body-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {d.desc}
                </p>
              </div>

              <span
                className="font-tech"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  paddingTop: 'var(--space-sm)',
                  borderTop: '1px solid var(--color-surface-container-high)',
                }}
              >
                {d.teamCount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
