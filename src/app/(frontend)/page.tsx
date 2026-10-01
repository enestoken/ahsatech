import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/components/Blocks/RenderBlocks'
import { HeroComponent } from '@/components/Blocks/HeroComponent'
import { TelemetryComponent } from '@/components/Blocks/TelemetryComponent'
import { CompetenciesComponent } from '@/components/Blocks/CompetenciesComponent'
import { FeaturedProjectsComponent } from '@/components/Blocks/FeaturedProjectsComponent'
import { SynergyComponent } from '@/components/Blocks/SynergyComponent'
import { TrustMetricsComponent } from '@/components/Blocks/TrustMetricsComponent'
import { MiniContactComponent } from '@/components/Blocks/MiniContactComponent'

export const metadata: Metadata = {
  title: 'AhsaTech | Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
  description:
    'AhsaTech; endüstriyel IoT, gömülü sistemler, yapay zekâ destekli kurumsal yazılımlar ve donanım tasarımıyla global standartlarda anahtar teslim mühendislik çözümleri üretir.',
}

export default async function HomePage() {
  let homePage = null

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const res = await payload.find({
      collection: 'pages',
      where: {
        or: [{ isHome: { equals: true } }, { slug: { equals: 'ana-sayfa' } }, { slug: { equals: 'home' } }],
      },
      limit: 1,
    })

    if (res.docs.length > 0) {
      homePage = res.docs[0]
    }
  } catch (err) {
    console.warn('[HomePage] Dinamik sayfa sorgulanırken fallback kullanıldı:', err)
  }

  // Eğer admin panelinde bir Ana Sayfa oluşturulmuşsa, bloklarını sırasıyla render et
  if (homePage?.layout && homePage.layout.length > 0) {
    return <RenderBlocks layout={homePage.layout} />
  }

  // Admin panelinde henüz ana sayfa oluşturulmamışsa varsayılan modüler blokları göster
  return (
    <div>
      <HeroComponent />
      <TelemetryComponent />
      <CompetenciesComponent />
      <FeaturedProjectsComponent />
      <SynergyComponent />
      <TrustMetricsComponent />
      <MiniContactComponent />
    </div>
  )
}
