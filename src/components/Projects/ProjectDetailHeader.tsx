import React from 'react'
import { MediaFrame } from '../UI/MediaFrame'
import Link from 'next/link'
import type { ProjectDoc } from './ProjectsPortfolioClient'

export interface ProjectDetailHeaderProps {
  project: ProjectDoc
}

export const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({ project }) => {
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'hardware':
        return 'Gömülü Sistem & Donanım'
      case 'iot':
        return 'Endüstriyel IoT'
      case 'software':
        return 'Kurumsal Bulut & Yazılım'
      default:
        return 'Mühendislik Projesi'
    }
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
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

  const color = getCategoryColor(project.category)

  return (
    <section
      className="page-intro"
      id="project-detail-hero"
      style={{
        position: 'relative',
        padding: 'var(--space-3xl) 0 var(--space-2xl) 0',
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderBottom: '1px solid var(--color-surface-container-high)',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Gradient & Mesh */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 30%, rgba(0, 229, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 85% 70%, rgba(0, 230, 118, 0.04) 0%, transparent 45%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          id="project-breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: 'var(--space-lg)',
            fontFamily: 'var(--font-tech)',
            fontSize: '12px',
          }}
        >
          <Link
            href="/"
            style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}
          >
            Ana Sayfa
          </Link>
          <span style={{ color: 'var(--color-outline)' }}>/</span>
          <Link
            href="/projelerimiz"
            style={{ color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}
          >
            Projelerimiz
          </Link>
          <span style={{ color: 'var(--color-outline)' }}>/</span>
          <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{project.title}</span>
        </nav>

        {/* Category & Status Badges Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: 'var(--space-md)',
          }}
        >
          <span
            className="font-tech"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: color,
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              padding: '4px 12px',
              borderRadius: '4px',
              border: `1px solid ${color}40`,
            }}
          >
            {getCategoryLabel(project.category).toUpperCase()}
          </span>

          {project.mcuCore && (
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-on-surface-variant)',
                backgroundColor: 'var(--color-surface-container)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid var(--color-surface-container-high)',
              }}
            >
              İŞLEMCİ: {project.mcuCore}
            </span>
          )}

          {project.year && (
            <span
              className="font-tech"
              style={{
                fontSize: '11px',
                color: 'var(--color-outline)',
                backgroundColor: 'var(--color-surface-container)',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              YIL: {project.year}
            </span>
          )}

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginLeft: 'auto',
              fontFamily: 'var(--font-tech)',
              fontSize: '11px',
              color: 'var(--color-secondary)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                boxShadow: '0 0 6px var(--color-secondary)',
              }}
            />
            <span>SAHA DOĞRULAMALI / YAYINDA</span>
          </div>
        </div>

        {/* Project Title */}
        <h1
          id="project-detail-title"
          className="headline-xl"
          style={{
            color: 'var(--color-on-surface)',
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-md)',
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h1>

        {/* Client Tag */}
        {project.client && (
          <div
            className="font-tech"
            style={{
              fontSize: '13px',
              color: 'var(--color-outline)',
              marginBottom: 'var(--space-lg)',
            }}
          >
            KURUM / İŞVEREN:{' '}
            <span style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>
              {project.client}
            </span>
          </div>
        )}

        {/* Summary Description */}
        <p
          className="body-lg"
          style={{
            color: 'var(--color-on-surface-variant)',
            lineHeight: 1.7,
            maxWidth: '960px',
            marginBottom: 'var(--space-2xl)',
            fontSize: '18px',
          }}
        >
          {project.summary}
        </p>

        {/* High-Impact Outcome Metrics Strip */}
        {project.outcomeMetrics && project.outcomeMetrics.length > 0 && (
          <div
            id="project-metrics-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 'var(--space-md)',
              padding: 'var(--space-xl)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-surface-container-high)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
            }}
          >
            {project.outcomeMetrics.map((om, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  borderLeft: idx > 0 ? '1px solid var(--color-surface-container-high)' : 'none',
                  paddingLeft: idx > 0 ? 'var(--space-lg)' : 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span
                    className="font-tech"
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: idx === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
                      lineHeight: 1.1,
                    }}
                  >
                    {om.metric}
                  </span>
                </div>
                <span
                  className="body-sm"
                  style={{
                    color: 'var(--color-on-surface-variant)',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  {om.description}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="project-media">
          <MediaFrame media={project.coverImage} alt={project.title} priority />
        </div>
      </div>
    </section>
  )
}
