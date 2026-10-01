import React from 'react'
import { HeroComponent } from './HeroComponent'
import { TelemetryComponent } from './TelemetryComponent'
import { CompetenciesComponent } from './CompetenciesComponent'
import { FeaturedProjectsComponent } from './FeaturedProjectsComponent'
import { TrustMetricsComponent } from './TrustMetricsComponent'
import { MiniContactComponent } from './MiniContactComponent'
import { RichTextComponent } from './RichTextComponent'
import { SynergyComponent } from './SynergyComponent'

interface RenderBlocksProps {
  layout?: any[]
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ layout }) => {
  if (!layout || layout.length === 0) {
    return null
  }

  return (
    <div className="page-blocks-wrapper">
      {layout.map((block, index) => {
        const key = block.id || `${block.blockType}-${index}`

        switch (block.blockType) {
          case 'heroBlock':
            return <HeroComponent key={key} {...block} />

          case 'telemetryBlock':
            return <TelemetryComponent key={key} {...block} />

          case 'competenciesBlock':
            return <CompetenciesComponent key={key} {...block} />

          case 'featuredProjectsBlock':
            return <FeaturedProjectsComponent key={key} {...block} />

          case 'synergyBlock':
            return <SynergyComponent key={key} {...block} />

          case 'trustMetricsBlock':
            return <TrustMetricsComponent key={key} {...block} />

          case 'miniContactBlock':
            return <MiniContactComponent key={key} {...block} />

          case 'richTextBlock':
            return <RichTextComponent key={key} {...block} />

          default:
            console.warn(`[RenderBlocks] Bilinmeyen blok tipi: ${block.blockType}`)
            return null
        }
      })}
    </div>
  )
}
