import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/components/Blocks/RenderBlocks'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const res = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })

    const page = res.docs[0]
    if (!page) {
      return {
        title: 'Sayfa Bulunamadı | AhsaTech',
      }
    }

    return {
      title: `${page.title} | AhsaTech`,
      description: page.metaDescription || `${page.title} — AhsaTech Yazılım ve Elektronik Teknolojileri`,
    }
  } catch (err) {
    return {
      title: 'AhsaTech Mühendislik',
    }
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const page = res.docs[0]

  if (!page) {
    notFound()
  }

  return (
    <div className="dynamic-page">
      <RenderBlocks layout={page.layout || []} />
    </div>
  )
}
