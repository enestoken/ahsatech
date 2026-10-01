import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ProductsHero } from '@/components/Products/ProductsHero'
import {
  ProductsHardwareCatalog,
  type ProductDoc,
} from '@/components/Products/ProductsHardwareCatalog'
import { SoftwareSolutionsShowcase } from '@/components/Products/SoftwareSolutionsShowcase'
import { OemOdmRoadmap } from '@/components/Products/OemOdmRoadmap'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Ürünler & Çözümler — AhsaTech Standart Donanım & Kurumsal Bulut',
  description:
    'DIN-Ray endüstriyel ağ geçitleri, uç yapay zeka işlem üniteleri, ultra düşük güç LoRa sensör düğümleri ve 5 aşamalı OEM/ODM üretim yol haritası.',
}

export default async function ProductsPage() {
  let products: ProductDoc[] = []

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const res = await payload.find({
      collection: 'products',
      where: {
        status: { equals: 'published' },
      },
      sort: 'createdAt',
      limit: 100,
    })

    products = res.docs as unknown as ProductDoc[]
  } catch (err) {
    console.error('[ProductsPage] Ürünler çekilirken hata oluştu:', err)
  }

  return (
    <div id="products-catalog-main">
      <ProductsHero />
      <ProductsHardwareCatalog products={products} />
      <SoftwareSolutionsShowcase />
      <OemOdmRoadmap />
    </div>
  )
}
