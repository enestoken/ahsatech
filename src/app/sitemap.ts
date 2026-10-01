import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projelerimiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/urunler-cozumler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // 1. Dinamik Projeler
    const projects = await payload.find({
      collection: 'projects',
      limit: 100,
      depth: 0,
    })

    const projectUrls: MetadataRoute.Sitemap = projects.docs.map((proj: any) => ({
      url: `${baseUrl}/projelerimiz/${proj.slug}`,
      lastModified: new Date(proj.updatedAt || proj.createdAt),
      changeFrequency: 'monthly',
      priority: 0.75,
    }))

    // 2. Dinamik Ürünler
    const products = await payload.find({
      collection: 'products',
      limit: 100,
      depth: 0,
    })

    const productUrls: MetadataRoute.Sitemap = products.docs.map((prod: any) => ({
      url: `${baseUrl}/urunler-cozumler/${prod.slug}`,
      lastModified: new Date(prod.updatedAt || prod.createdAt),
      changeFrequency: 'monthly',
      priority: 0.75,
    }))

    // 3. Dinamik Sayfalar (Pages)
    const pages = await payload.find({
      collection: 'pages',
      limit: 100,
      depth: 0,
    })

    const customPageUrls: MetadataRoute.Sitemap = pages.docs
      .filter((p: any) => p.slug && p.slug !== 'home' && p.slug !== 'index')
      .map((p: any) => ({
        url: `${baseUrl}/${p.slug}`,
        lastModified: new Date(p.updatedAt || p.createdAt),
        changeFrequency: 'monthly',
        priority: 0.7,
      }))

    return [...staticRoutes, ...projectUrls, ...productUrls, ...customPageUrls]
  } catch (err) {
    console.error('[Sitemap] Dinamik kayıtlar çekilirken hata:', err)
    return staticRoutes
  }
}
