import React from 'react'

export interface MilestoneItem {
  year: string
  title: string
  description?: string
}

interface MilestonesTimelineProps {
  milestones?: MilestoneItem[]
}

export const MilestonesTimeline: React.FC<MilestonesTimelineProps> = ({
  milestones = [
    {
      year: '2021',
      title: 'Kuruluş & İlk Gömülü Sistem Patenti',
      description:
        'AhsaTech, mikrokontrolör mimarileri ve RF telemetri alanındaki ilk tescilli tasarımıyla kuruldu.',
    },
    {
      year: '2023',
      title: 'Marmara Teknokent AR-GE Merkezi',
      description: 'SMT pilot üretim hattı ve EMC ön-uyumluluk laboratuvarı faaliyete geçirildi.',
    },
    {
      year: '2024',
      title: '12 Ülkeye Donanım İhracatı',
      description:
        'AhsaCore gateway ve IoT telemetri ürün ailesi küresel endüstriyel projelere entegre edildi.',
    },
    {
      year: '2026',
      title: 'Yeni Nesil Yapay Zekâ & Edge-AI Platformları',
      description:
        'Milli donanım mimarileriyle desteklenen NPU hızlandırıcılı edge-computing çözümleri pazara sunuldu.',
    },
  ],
}) => {
  return (
    <section
      className="milestones"
      style={{
        width: '100%',
        padding: 'var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto var(--space-3xl) auto' }}
        >
          <span
            className="font-tech"
            style={{
              fontSize: '11px',
              color: 'var(--color-secondary)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '4px',
            }}
          >
            Kurumsal Kronoloji
          </span>
          <h2
            className="headline-lg"
            style={{ color: 'var(--color-primary)', marginBottom: '8px' }}
          >
            Tarihçe &amp; Kilometre Taşlarımız
          </h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
          >
            Geometrik kesinlik ve mühendislik disipliniyle katettiğimiz inovasyon yolculuğu.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'var(--space-lg)',
            position: 'relative',
          }}
        >
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                position: 'relative',
                padding: 'var(--space-xl)',
                backgroundColor: 'var(--color-surface-container-lowest)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor:
                    idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
                }}
              />

              <div>
                {/* Year Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-surface-container)',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '16px',
                    fontWeight: 800,
                    marginBottom: 'var(--space-md)',
                    border: '1px solid var(--color-surface-container-high)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '16px', color: 'var(--color-secondary)' }}
                  >
                    event
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3
                  className="headline-sm"
                  style={{
                    fontSize: '18px',
                    color: 'var(--color-primary)',
                    marginBottom: '8px',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>

                {item.description && (
                  <p
                    className="body-sm"
                    style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              <div
                style={{
                  marginTop: 'var(--space-lg)',
                  paddingTop: 'var(--space-sm)',
                  borderTop: '1px solid var(--color-surface-container-high)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-outline)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '11px',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '14px', color: 'var(--color-secondary)' }}
                >
                  verified
                </span>
                <span>Tescilli Mühendislik Çözümü</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
