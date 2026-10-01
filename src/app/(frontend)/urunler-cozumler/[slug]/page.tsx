import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ProductDetailHeader } from '@/components/Products/ProductDetailHeader'
import { ProductPinoutDiagram } from '@/components/Products/ProductPinoutDiagram'
import { ProductSpecsMatrix } from '@/components/Products/ProductSpecsMatrix'
import { ProductDetailCTA } from '@/components/Products/ProductDetailCTA'
import type { ProductDoc } from '@/components/Products/ProductsHardwareCatalog'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getProductBySlug(slug: string): Promise<ProductDoc | null> {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // 1. Try exact slug match
    const res = await payload.find({
      collection: 'products',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
    })

    if (res.totalDocs > 0) {
      return res.docs[0] as unknown as ProductDoc
    }

    // 2. Try prefix or substring match for resilient matching
    const allPublished = await payload.find({
      collection: 'products',
      where: {
        status: { equals: 'published' },
      },
      limit: 100,
    })

    const matched = allPublished.docs.find((p) => {
      const pSlug = (p.slug || '').toLowerCase()
      const searchSlug = slug.toLowerCase()
      const modelCode = (p.modelCode || '').toLowerCase().replace(/[^a-z0-9]/g, '')
      const cleanSearch = searchSlug.replace(/[^a-z0-9]/g, '')

      return (
        pSlug === searchSlug ||
        pSlug.startsWith(searchSlug) ||
        searchSlug.startsWith(pSlug) ||
        pSlug.includes(searchSlug) ||
        searchSlug.includes(pSlug) ||
        modelCode.includes(cleanSearch) ||
        cleanSearch.includes(modelCode)
      )
    })

    if (matched) {
      return matched as unknown as ProductDoc
    }

    return null
  } catch (err) {
    console.error(`[ProductDetailPage] '${slug}' çekilirken hata:`, err)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Ürün Bulunamadı — AhsaTech',
      description: 'Talep ettiğiniz ürün detay sayfası bulunamadı.',
    }
  }

  return {
    title: `${product.title} (${product.modelCode}) — AhsaTech Donanım Şartnamesi`,
    description:
      product.summary || 'AhsaTech endüstriyel donanım teknik şartnamesi ve pinout diyagramı.',
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div id={`product-detail-page-${product.slug}`}>
      <ProductDetailHeader product={product} />
      <ProductPinoutDiagram product={product} />
      <ProductSpecsMatrix product={product} />
      <ProductDetailCTA />
    </div>
  )
}
