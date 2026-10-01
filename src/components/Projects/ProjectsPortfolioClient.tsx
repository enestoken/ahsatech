'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Media } from '@/payload-types'
import { MediaFrame } from '../UI/MediaFrame'

export interface ProjectDoc {
  id: string | number
  title: string
  slug: string
  category: 'hardware' | 'iot' | 'software'
  status?: string
  featured?: boolean
  client?: string
  mcuCore?: string
  year?: string
  coverImage?: number | Media | null
  gallery?: Array<{ image?: number | Media | null }>
  summary: string
  description?: string
  blockDiagramDesc?: string
  clientTestimonial?: string
  clientAuthor?: string
  specs?: Array<{ label: string; value: string; id?: string }>
  outcomeMetrics?: Array<{ metric: string; description: string; id?: string }>
  technologies?: Array<{ name: string; badgeType?: string; id?: string }>
}

export interface ProjectsPortfolioClientProps {
  initialProjects: ProjectDoc[]
}

type FilterCategory = 'all' | 'hardware' | 'iot' | 'software'

export const ProjectsPortfolioClient: React.FC<ProjectsPortfolioClientProps> = ({
  initialProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all')

  const filterButtons: Array<{ key: FilterCategory; label: string; id: string; icon: string }> = [
    { key: 'all', label: 'Tümü', id: 'filter-btn-all', icon: 'grid_view' },
    {
      key: 'hardware',
      label: 'Gömülü Sistem & Donanım',
      id: 'filter-btn-hardware',
      icon: 'memory',
    },
    { key: 'iot', label: 'Endüstriyel IoT', id: 'filter-btn-iot', icon: 'sensors' },
    { key: 'software', label: 'Kurumsal Bulut', id: 'filter-btn-software', icon: 'cloud_sync' },
  ]

  const filteredProjects = initialProjects.filter((project) => {
    if (activeCategory === 'all') return true
    return project.category === activeCategory
  })

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'hardware':
        return 'Gömülü Donanım'
      case 'iot':
        return 'Endüstriyel IoT'
      case 'software':
        return 'Kurumsal Bulut'
      default:
        return 'Mühendislik'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hardware':
        return 'var(--color-primary)'
      case 'iot':
        return 'var(--color-secondary)'
      case 'software':
        return '#043ab9'
      default:
        return 'var(--color-primary)'
    }
  }

  return (
    <section
      id="projects-portfolio-section"
      style={{
        padding: 'var(--space-2xl) 0 var(--space-3xl) 0',
        backgroundColor: 'var(--color-surface)',
        minHeight: '600px',
      }}
    >
      <div className="container">
        {/* Controls Bar: Category Filter Buttons & Count Indicator */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-2xl)',
            paddingBottom: 'var(--space-lg)',
            borderBottom: '1px solid var(--color-surface-container-high)',
          }}
        >
          {/* Category Filter Buttons */}
          <div
            id="projects-filter-bar"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {filterButtons.map((btn) => {
              const isActive = activeCategory === btn.key
              return (
                <button
                  key={btn.key}
                  id={btn.id}
                  onClick={() => setActiveCategory(btn.key)}
                  aria-pressed={isActive}
                  type="button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: isActive
                      ? '1px solid var(--color-primary)'
                      : '1px solid var(--color-surface-container-high)',
                    backgroundColor: isActive
                      ? 'rgba(0, 229, 255, 0.12)'
                      : 'var(--color-surface-container-lowest)',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                    fontFamily: 'var(--font-tech)',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 0 16px rgba(0, 229, 255, 0.2)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {btn.icon}
                  </span>
                  <span>{btn.label}</span>
                </button>
              )
            })}
          </div>

          {/* Active Results Counter */}
          <div
            id="projects-count-indicator"
            className="font-tech"
            style={{
              fontSize: '13px',
              color: 'var(--color-on-surface-variant)',
              backgroundColor: 'var(--color-surface-container-lowest)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid var(--color-surface-container-high)',
            }}
          >
            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              {filteredProjects.length}
            </span>{' '}
            Proje Listeleniyor
          </div>
        </div>

        {/* Bento Grid Container */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: 'var(--space-3xl) var(--space-xl)',
              textAlign: 'center',
              backgroundColor: 'var(--color-surface-container-lowest)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--color-outline)',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '48px',
                color: 'var(--color-outline)',
                marginBottom: 'var(--space-md)',
              }}
            >
              folder_off
            </span>
            <h3
              className="headline-sm"
              style={{ color: 'var(--color-on-surface)', marginBottom: '8px' }}
            >
              Bu kategoride kayıtlı proje bulunamadı
            </h3>
            <p
              className="body-sm"
              style={{ color: 'var(--color-on-surface-variant)', marginBottom: 'var(--space-lg)' }}
            >
              Farklı bir filtre seçebilir veya tüm portföyümüzü görüntüleyebilirsiniz.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-secondary"
              style={{ padding: '8px 20px', cursor: 'pointer' }}
            >
              Tüm Projeleri Göster
            </button>
          </div>
        ) : (
          <div
            id="projects-bento-grid"
            className="projects-bento-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'var(--space-xl)',
            }}
          >
            {filteredProjects.map((project, index) => {
              // Bento layout logic: if 1st item in 'all' view, span 7 cols, 2nd spans 5 cols, 3rd spans 5, 4th spans 7
              let colSpan = 'span 6'
              if (activeCategory === 'all') {
                if (index === 0) colSpan = 'span 7'
                else if (index === 1) colSpan = 'span 5'
                else if (index === 2) colSpan = 'span 5'
                else if (index === 3) colSpan = 'span 7'
              } else if (filteredProjects.length === 1) {
                colSpan = 'span 12'
              } else if (filteredProjects.length === 2) {
                colSpan = 'span 6'
              }

              const categoryColor = getCategoryColor(project.category)

              // Extract key specs
              const tempSpec = project.specs?.find(
                (s) =>
                  s.label.toLowerCase().includes('sıcaklık') ||
                  s.label.toLowerCase().includes('tolerans'),
              )
              const commSpec = project.specs?.find(
                (s) =>
                  s.label.toLowerCase().includes('protokol') ||
                  s.label.toLowerCase().includes('haberleşme') ||
                  s.label.toLowerCase().includes('arayüz'),
              )

              return (
                <article
                  key={project.id}
                  id={`project-card-${project.slug}`}
                  data-category={project.category}
                  className="tech-card"
                  style={{
                    gridColumn: colSpan,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--color-surface-container-lowest)',
                    border: '1px solid var(--color-surface-container-high)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-xl)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  {/* Subtle top laser border accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: `linear-gradient(90deg, ${categoryColor} 0%, transparent 80%)`,
                    }}
                  />

                  {/* Upper Content */}
                  <div>
                    <MediaFrame media={project.coverImage} alt={project.title} />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: 'var(--space-md)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          className="font-tech"
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            color: categoryColor,
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            padding: '3px 10px',
                            borderRadius: '4px',
                            border: `1px solid ${categoryColor}40`,
                          }}
                        >
                          {getCategoryLabel(project.category).toUpperCase()}
                        </span>

                        {project.year && (
                          <span
                            className="font-tech"
                            style={{
                              fontSize: '11px',
                              color: 'var(--color-outline)',
                            }}
                          >
                            {project.year}
                          </span>
                        )}
                      </div>

                      {project.mcuCore && (
                        <span
                          className="font-tech"
                          style={{
                            fontSize: '11px',
                            color: 'var(--color-on-surface-variant)',
                            backgroundColor: 'var(--color-surface-container)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            border: '1px solid var(--color-surface-container-high)',
                          }}
                        >
                          {project.mcuCore}
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h2
                      className="headline-sm"
                      style={{
                        color: 'var(--color-on-surface)',
                        fontSize: '22px',
                        marginBottom: 'var(--space-xs)',
                        lineHeight: 1.3,
                      }}
                    >
                      <Link
                        href={`/projelerimiz/${project.slug}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {project.title}
                      </Link>
                    </h2>

                    {/* Client / Sector Tag */}
                    {project.client && (
                      <div
                        className="font-tech"
                        style={{
                          fontSize: '11px',
                          color: 'var(--color-outline)',
                          letterSpacing: '0.04em',
                          marginBottom: 'var(--space-md)',
                        }}
                      >
                        MÜŞTERİ / SEKTÖR:{' '}
                        <span style={{ color: 'var(--color-on-surface-variant)' }}>
                          {project.client}
                        </span>
                      </div>
                    )}

                    {/* Summary Description */}
                    <p
                      className="body-sm"
                      style={{
                        color: 'var(--color-on-surface-variant)',
                        lineHeight: 1.6,
                        marginBottom: 'var(--space-lg)',
                      }}
                    >
                      {project.summary}
                    </p>

                    {/* Technical Parameter Chips Strip */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: 'var(--space-lg)',
                      }}
                    >
                      {tempSpec && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--color-surface-container)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-tech)',
                            color: 'var(--color-on-surface)',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '13px', color: 'var(--color-secondary)' }}
                          >
                            thermostat
                          </span>
                          <span>{tempSpec.value}</span>
                        </div>
                      )}

                      {commSpec && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--color-surface-container)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-tech)',
                            color: 'var(--color-on-surface)',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '13px', color: 'var(--color-primary)' }}
                          >
                            cable
                          </span>
                          <span>{commSpec.value}</span>
                        </div>
                      )}

                      {project.specs && project.specs.length > 0 && !tempSpec && !commSpec && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--color-surface-container)',
                            fontSize: '11px',
                            fontFamily: 'var(--font-tech)',
                            color: 'var(--color-on-surface)',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '13px', color: 'var(--color-primary)' }}
                          >
                            tune
                          </span>
                          <span>
                            {project.specs[0].label}: {project.specs[0].value}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Strip: Outcome Metric & Direct Link */}
                  <div
                    style={{
                      borderTop: '1px solid var(--color-surface-container-high)',
                      paddingTop: 'var(--space-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {/* Metric Display */}
                    {project.outcomeMetrics && project.outcomeMetrics.length > 0 ? (
                      <div>
                        <span
                          className="font-tech"
                          style={{
                            fontSize: '18px',
                            fontWeight: 800,
                            color: categoryColor,
                          }}
                        >
                          {project.outcomeMetrics[0].metric}
                        </span>
                        <span
                          className="body-sm"
                          style={{
                            fontSize: '11px',
                            color: 'var(--color-outline)',
                            marginLeft: '8px',
                          }}
                        >
                          {project.outcomeMetrics[0].description}
                        </span>
                      </div>
                    ) : (
                      <div
                        className="font-tech"
                        style={{ fontSize: '11px', color: 'var(--color-outline)' }}
                      >
                        AhsaTech Ar-Ge Laboratuvarı
                      </div>
                    )}

                    {/* Detail CTA Button */}
                    <Link
                      id={`project-link-${project.slug}`}
                      href={`/projelerimiz/${project.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(0, 229, 255, 0.08)',
                        border: '1px solid rgba(0, 229, 255, 0.2)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>Vaka Analizi</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
