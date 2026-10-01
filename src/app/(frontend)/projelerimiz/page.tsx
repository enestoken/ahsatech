import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ProjectsHero } from '@/components/Projects/ProjectsHero'
import {
  ProjectsPortfolioClient,
  type ProjectDoc,
} from '@/components/Projects/ProjectsPortfolioClient'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Projelerimiz — AhsaTech Saha İspatlı Donanım, IoT & Yazılım Portföyü',
  description:
    'Enerji şebekelerinden tarımsal IoT istasyonlarına, patlayıcı alan telemetrisinden temiz oda kontrolörlerine; uçtan uca hassas mühendislik çözümlerimiz.',
}

export default async function ProjectsPage() {
  let projects: ProjectDoc[] = []

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const res = await payload.find({
      collection: 'projects',
      where: {
        status: { equals: 'published' },
      },
      sort: '-createdAt',
      limit: 100,
    })

    projects = res.docs as unknown as ProjectDoc[]
  } catch (err) {
    console.error('[ProjectsPage] Projeler çekilirken hata oluştu:', err)
  }

  return (
    <div id="projects-page-main">
      <ProjectsHero totalProjectsCount={projects.length} />
      <ProjectsPortfolioClient initialProjects={projects} />
    </div>
  )
}
