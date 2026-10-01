import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Project } from '@/payload-types'
import { MediaFrame } from '../UI/MediaFrame'

export interface FeaturedProjectsBlockProps {
  eyebrow?: string
  title?: string
  viewAllBtnText?: string
  limit?: number
  manualProjects?: Array<Project | number>
}

export const FeaturedProjectsComponent: React.FC<FeaturedProjectsBlockProps> = async ({
  eyebrow = 'Portfolyo & Referanslar',
  title = 'Öne Çıkan Saha Çalışmalarımız',
  viewAllBtnText = 'Tüm Projeleri Keşfet',
  limit = 3,
  manualProjects,
}) => {
  let projects: Project[] = []

  if (manualProjects && manualProjects.length > 0) {
    projects = manualProjects.filter((project): project is Project => typeof project === 'object')
  } else {
    try {
      const payloadConfig = await config
      const payload = await getPayload({ config: payloadConfig })
      const res = await payload.find({
        collection: 'projects',
        where: {
          status: { equals: 'published' },
        },
        limit: limit || 3,
        sort: '-createdAt',
      })
      projects = res.docs
    } catch (err) {
      console.warn('[FeaturedProjects] Projeler çekilirken fallback kullanıldı:', err)
    }
  }

  return (
    <section className="featured-projects section-space">
      <div className="container">
        <header className="section-heading">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="headline-lg">{title}</h2>
          </div>
          <Link className="text-link" href="/projelerimiz">
            {viewAllBtnText}
            <span aria-hidden="true">↗</span>
          </Link>
        </header>
        <div className="featured-project-list">
          {projects.map((project, idx) => (
            <article className="featured-case" key={project.id}>
              <div className="case-index">
                <span>0{idx + 1}</span>
                <small>{project.year}</small>
              </div>
              <div className="case-copy">
                <span className="eyebrow">
                  {project.category === 'hardware'
                    ? 'Gömülü Donanım'
                    : project.category === 'iot'
                      ? 'Endüstriyel IoT'
                      : 'Kurumsal Yazılım'}
                </span>
                <h3>
                  <Link href={'/projelerimiz/' + project.slug}>{project.title}</Link>
                </h3>
                {project.client && <p className="case-client">MÜŞTERİ: {project.client}</p>}
                <p>{project.summary}</p>
                <MediaFrame media={project.coverImage} alt={project.title} />
              </div>
              <div className="case-result">
                {project.mcuCore && <span className="technical-label">{project.mcuCore}</span>}
                {project.outcomeMetrics?.[0] ? (
                  <div>
                    <strong>{project.outcomeMetrics[0].metric}</strong>
                    <p>{project.outcomeMetrics[0].description}</p>
                  </div>
                ) : (
                  <span className="technical-label">Marmara AR-GE</span>
                )}
                <Link className="text-link" href={'/projelerimiz/' + project.slug}>
                  İncele <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
