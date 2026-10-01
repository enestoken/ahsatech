import React from 'react'
import Link from 'next/link'

export const ContactHero: React.FC = () => {
  return (
    <section className="contact-hero" id="contact-hero-section">
      <div className="container">
        <nav aria-label="Breadcrumb" className="contact-hero__breadcrumb">
          <Link href="/">Ana Sayfa</Link>
          <span aria-hidden="true">/</span>
          <span>İletişim</span>
        </nav>

        <div className="contact-hero__layout">
          <div>
            <span className="label-md contact-hero__eyebrow">İletişim</span>
            <h1 className="display-lg">Bizimle iletişime geçin</h1>
          </div>
          <p className="body-lg">
            Ofis adresleri, telefon numaraları, e-posta adresleri ve çalışma saatlerine aşağıdan ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}
