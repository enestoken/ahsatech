import React from 'react'
import type { Metadata } from 'next'
import { ContactHero } from '@/components/Contact/ContactHero'
import { OfficeLocations } from '@/components/Contact/OfficeLocations'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'AhsaTech iletişim bilgileri, çalışma saatleri ve ofis adresleri.',
}

export default function ContactPage() {
  return (
    <div id="contact-page-main">
      <ContactHero />

      <OfficeLocations />
    </div>
  )
}
