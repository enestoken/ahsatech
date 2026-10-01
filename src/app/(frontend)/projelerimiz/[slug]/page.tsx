import React from 'react'
import { MediaFrame } from '@/components/UI/MediaFrame'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ProjectDetailHeader } from '@/components/Projects/ProjectDetailHeader'
import { ProjectArchitectureDiagram } from '@/components/Projects/ProjectArchitectureDiagram'
import { ProjectSpecsAndTech } from '@/components/Projects/ProjectSpecsAndTech'
import { ProjectDetailCTA } from '@/components/Projects/ProjectDetailCTA'
import type { ProjectDoc } from '@/components/Projects/ProjectsPortfolioClient'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getProjectBySlug(slug: string): Promise<ProjectDoc | null> {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // 1. Try exact slug match
    const res = await payload.find({
      collection: 'projects',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
    })

    if (res.totalDocs > 0) {
      return res.docs[0] as unknown as ProjectDoc
    }

    // 2. Try prefix or substring match for resilient URL matching (e.g. smartgrid-v3 -> smartgrid-v3-enerji-izleme)
    const allPublished = await payload.find({
      collection: 'projects',
      where: {
        status: { equals: 'published' },
      },
      limit: 100,
    })

    const matched = allPublished.docs.find((p) => {
      const pSlug = (p.slug || '').toLowerCase()
      const searchSlug = slug.toLowerCase()
      return (
        pSlug === searchSlug ||
        pSlug.startsWith(searchSlug) ||
        searchSlug.startsWith(pSlug) ||
        pSlug.includes(searchSlug) ||
        searchSlug.includes(pSlug)
      )
    })

    if (matched) {
      return matched as unknown as ProjectDoc
    }

    return null
  } catch (err) {
    console.error(`[ProjectDetailPage] '${slug}' çekilirken hata:`, err)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Proje Bulunamadı — AhsaTech',
      description: 'Talep ettiğiniz proje detay sayfası bulunamadı.',
    }
  }

  return {
    title: `${project.title} — AhsaTech Vaka Analizi`,
    description:
      project.summary ||
      'AhsaTech hassas mühendislik saha projesi vaka analizi ve mimari dokümantasyonu.',
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div id={`project-detail-page-${project.slug}`}>
      <ProjectDetailHeader project={project} />
      <ProjectArchitectureDiagram project={project} />
      <ProjectSpecsAndTech project={project} />
      <div className="container project-gallery">
        {project.gallery?.map((item, index) => (
          <MediaFrame key={index} media={item.image} alt={project.title} />
        ))}
      </div>
      <ProjectDetailCTA />
    </div>
  )
}
