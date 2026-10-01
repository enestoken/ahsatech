import type { Metadata } from 'next'
import { QuoteHero } from '@/components/Contact/QuoteHero'
import { SmartRFQForm } from '@/components/Contact/SmartRFQForm'

export const metadata: Metadata = {
  title: 'Teklif Al',
  description: 'AhsaTech mühendislik projeleri için teknik ihtiyaç ve teklif talebi formu.',
}

export default function QuotePage() {
  return (
    <div id="quote-page-main">
      <QuoteHero />
      <section className="quote-form-section" id="rfq-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <SmartRFQForm />
        </div>
      </section>
    </div>
  )
}
