import React from 'react'
import type { ProjectDoc } from './ProjectsPortfolioClient'

export interface ProjectSpecsAndTechProps {
  project: ProjectDoc
}

export const ProjectSpecsAndTech: React.FC<ProjectSpecsAndTechProps> = ({ project }) => {
  const getBadgeTypeColor = (type?: string) => {
    switch (type) {
      case 'firmware':
        return '#007866'
      case 'hardware':
        return '#397044'
      case 'protocol':
        return '#52656a'
      case 'cloud':
        return '#043ab9'
      default:
        return 'var(--color-primary)'
    }
  }

  const getBadgeTypeIcon = (type?: string) => {
    switch (type) {
      case 'firmware':
        return 'terminal'
      case 'hardware':
        return 'memory'
      case 'protocol':
        return 'cable'
      case 'cloud':
        return 'cloud'
      default:
        return 'check'
    }
  }

  return (
    <section
      id="project-specs-section"
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
          {/* Left Column: Specs Matrix Table (7 Cols) */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <span
                className="label-sm"
                style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '4px' }}
              >
                PARAMETRE TABLOSU
              </span>
              <h3 className="headline-sm" style={{ color: 'var(--color-on-surface)' }}>
                Teknik Şartname ve Doğrulama Matrisi
              </h3>
            </div>

            {project.specs && project.specs.length > 0 ? (
              <div
                id="project-specs-table"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-surface-container-high)',
                  backgroundColor: 'var(--color-surface)',
                  overflow: 'hidden',
                }}
              >
                {project.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 20px',
                      borderBottom:
                        idx < project.specs!.length - 1
                          ? '1px solid var(--color-surface-container-high)'
                          : 'none',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)',
                    }}
                  >
                    <span
                      className="body-sm"
                      style={{ color: 'var(--color-on-surface-variant)', fontWeight: 500 }}
                    >
                      {spec.label}
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
                Özel teknik şartname belgesi için doğrudan mühendislik masasıyla iletişime geçiniz.
              </p>
            )}

            {/* Technologies & Protocols Badges */}
            {project.technologies && project.technologies.length > 0 && (
              <div style={{ marginTop: 'var(--space-2xl)' }}>
                <span
                  className="label-sm"
                  style={{
                    color: 'var(--color-outline)',
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  KULLANILAN TEKNOLOJİLER, PROTOKOLLER VE STANDARTLAR
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech, idx) => {
                    const tagColor = getBadgeTypeColor(tech.badgeType)
                    const iconName = getBadgeTypeIcon(tech.badgeType)
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--color-surface)',
                          border: `1px solid ${tagColor}35`,
                          fontFamily: 'var(--font-tech)',
                          fontSize: '12px',
                          color: 'var(--color-on-surface)',
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: '15px', color: tagColor }}
                        >
                          {iconName}
                        </span>
                        <span>{tech.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Client Testimonial & Field Quality Assurance (5 Cols) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xl)',
            }}
          >
            {/* Client Testimonial Card */}
            {project.clientTestimonial && (
              <div
                id="project-testimonial-card"
                className="tech-card"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-surface-container-high)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-xl)',
                  position: 'relative',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '40px',
                    color: 'var(--color-primary)',
                    opacity: 0.4,
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  format_quote
                </span>

                <blockquote
                  className="body-md"
                  style={{
                    color: 'var(--color-on-surface)',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    marginBottom: 'var(--space-lg)',
                  }}
                >
                  “{project.clientTestimonial}”
                </blockquote>

                {project.clientAuthor && (
                  <div
                    style={{
                      borderTop: '1px solid var(--color-surface-container-high)',
                      paddingTop: 'var(--space-md)',
                    }}
                  >
                    <div
                      className="font-tech"
                      style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)' }}
                    >
                      {project.clientAuthor}
                    </div>
                    {project.client && (
                      <div
                        className="body-sm"
                        style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                      >
                        {project.client}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Engineering Assurance Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-surface-container-high)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: 'var(--color-secondary)', fontSize: '20px' }}
                >
                  verified
                </span>
                <span
                  className="font-tech"
                  style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-on-surface)' }}
                >
                  SAHA DOĞRULAMA & KALİTE
                </span>
              </div>
              <p
                className="body-sm"
                style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}
              >
                Tüm modüller Marmara AR-GE tesislerimizde EMC, titreşim ve termal şok testlerinden
                geçirilmiştir. Gerektiğinde CAD 3D STEP ve Gerber üretim paketleri müşteri gizlilik
                sözleşmesi (NDA) kapsamında doğrudan paylaşılır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
