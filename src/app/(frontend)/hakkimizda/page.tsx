import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { AboutHero } from '@/components/About/AboutHero'
import { MissionVision } from '@/components/About/MissionVision'
import { FounderAndValues } from '@/components/About/FounderAndValues'
import { LifecyclePipeline } from '@/components/About/LifecyclePipeline'
import { RDLabsAndTeam } from '@/components/About/RDLabsAndTeam'
import { MilestonesTimeline } from '@/components/About/MilestonesTimeline'
import { AboutCTA } from '@/components/About/AboutCTA'

export const metadata: Metadata = {
  title: 'Hakkımızda & Vizyon | AhsaTech Yazılım ve Elektronik',
  description:
    'AhsaTech, kadim geometri ve hassas mühendisliğin kesişim noktasında yüksek teknolojili gömülü sistemler, endüstriyel IoT ve kurumsal yazılımlar üretir.',
}

export default async function AboutPage() {
  let corporateData: any = null

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    corporateData = await payload.findGlobal({
      slug: 'corporate',
    })
  } catch (err) {
    console.warn('[AboutPage] Corporate global bilgileri çekilirken fallback kullanıldı:', err)
  }

  const precisionMetrics = corporateData?.precisionMetrics?.map((m: any) => ({
    value: m.value,
    unit: m.unit,
    label: m.label,
  }))

  const corporateValues = corporateData?.values?.map((v: any) => ({
    title: v.title,
    description: v.description,
  }))

  const milestones = corporateData?.milestones?.map((m: any) => ({
    year: m.year,
    title: m.title,
    description: m.description,
  }))

  const laboratories = corporateData?.laboratories?.map((l: any) => ({
    name: l.name,
    description: l.description,
  }))

  return (
    <div className="about-page">
      {/* 1. Felsefe ve Hassasiyet Şeridi */}
      <AboutHero
        tagline={corporateData?.heroTagline}
        philosophy={corporateData?.heroPhilosophy}
        metrics={precisionMetrics}
      />

      {/* 2. Misyon & Vizyon Kartları */}
      <MissionVision
        missionTitle={corporateData?.missionTitle}
        missionText={corporateData?.missionText}
        visionTitle={corporateData?.visionTitle}
        visionText={corporateData?.visionText}
      />

      {/* 3. Kurucu Manifestosu & 4 İlke */}
      <FounderAndValues values={corporateValues} />

      {/* 4. 5 Aşamalı Ürün Yaşam Döngüsü */}
      <LifecyclePipeline />

      {/* 5. Ar-Ge Laboratuvarı & Uzman Kadro */}
      <RDLabsAndTeam laboratories={laboratories} />

      {/* 6. Tarihçe & Kilometre Taşları (Dinamik Timeline) */}
      <MilestonesTimeline milestones={milestones} />

      {/* 7. Kapanış Eylem Çağrısı */}
      <AboutCTA />
    </div>
  )
}
