import React from 'react'

interface MissionVisionProps {
  missionTitle?: string
  missionText?: string
  visionTitle?: string
  visionText?: string
}

export const MissionVision: React.FC<MissionVisionProps> = ({
  missionTitle = 'Misyonumuz',
  missionText = 'Yüksek katma değerli donanım ve yazılım ürünleri geliştirerek, küresel rekabette yerli mühendislik gücünü kanıtlamak ve müşterilerimizin dijital ve endüstriyel dönüşümlerini en yüksek güvenilirlikle sağlamak.',
  visionTitle = 'Vizyonumuz',
  visionText = 'Yapay zekâ ve nesnelerin interneti çağında, Doğu’nun ölçü ve nizam felsefesini modern dünya standartlarında donanım ve yazılım mimarilerine dönüştüren global bir teknoloji lideri olmak.',
}) => {
  return (
    <section
      className="mission-vision"
      style={{
        width: '100%',
        padding: 'var(--space-2xl) 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {/* Misyon Card */}
          <div
            className="tech-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-container-lowest)',
              padding: 'var(--space-2xl) var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Laser Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background:
                  'linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-secondary-container))',
              }}
            />

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-surface-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    border: '1px solid var(--color-surface-container-high)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    architecture
                  </span>
                </div>
                <span
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-outline)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Temel Misyon // 01
                </span>
              </div>

              <h2
                className="headline-md"
                style={{
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {missionTitle}
              </h2>

              <p
                className="body-md"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {missionText}
              </p>
            </div>

            {/* Sub-Badges Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-surface-container-high)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                >
                  check_circle
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}
                >
                  Yerli Üretim Gücü
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-surface-container-high)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                >
                  shield
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}
                >
                  Endüstriyel Güven
                </span>
              </div>
            </div>
          </div>

          {/* Vizyon Card */}
          <div
            className="tech-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'var(--color-surface-container-lowest)',
              padding: 'var(--space-2xl) var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top Laser Accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background:
                  'linear-gradient(90deg, var(--color-secondary), var(--color-secondary-container), var(--color-primary-fixed))',
              }}
            />

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-surface-container)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-secondary)',
                    border: '1px solid var(--color-surface-container-high)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                    hub
                  </span>
                </div>
                <span
                  className="font-tech"
                  style={{
                    fontSize: '11px',
                    color: 'var(--color-outline)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Gelecek Ufku // 02
                </span>
              </div>

              <h2
                className="headline-md"
                style={{
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {visionTitle}
              </h2>

              <p
                className="body-md"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.7,
                  marginBottom: 'var(--space-xl)',
                }}
              >
                {visionText}
              </p>
            </div>

            {/* Sub-Badges Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-surface-container-high)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                >
                  memory
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}
                >
                  Edge-AI &amp; IoT
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-container-low)',
                  border: '1px solid var(--color-surface-container-high)',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
                >
                  public
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}
                >
                  Küresel Standartlar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
