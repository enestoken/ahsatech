import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Logo } from '../UI/Logo'
import { NavLinks } from './NavLinks'
import { MobileMenu } from './MobileMenu'

export const Header: React.FC = async () => {
  let navLinks = [
    { label: 'Ana Sayfa', url: '/' },
    { label: 'Hakkımızda & Vizyon', url: '/hakkimizda' },
    { label: 'Projelerimiz', url: '/projelerimiz' },
    { label: 'Ürünler & Çözümler', url: '/urunler-cozumler' },
    { label: 'İletişim', url: '/iletisim' },
  ]

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' })

    if (siteSettings?.navLinks && siteSettings.navLinks.length > 0) {
      navLinks = siteSettings.navLinks.map((item) => ({
        label: item.url === '/iletisim' ? 'İletişim' : item.label,
        url: item.url,
      }))
    }
  } catch (err) {
    // Veritabanı başlatılma aşamasında fallback linkler kullanılır
    console.warn('[Header] Site settings yüklenirken fallback kullanıldı:', err)
  }

  return (
    <header
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        boxShadow: '0 1px 10px rgba(19, 29, 34, 0.04)',
      }}
    >
      <div
        className="container"
        style={{
          height: '76px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-md)',
        }}
      >
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <div className="desktop-only">
          <NavLinks links={navLinks.filter((link) => !/^\/admin(?:[/?#]|$)/.test(link.url))} />
        </div>

        {/* Right CTA & Utilities */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Direct RFQ CTA Button */}
          <Link
            href="/teklif-al"
            className="btn-primary desktop-only"
            style={{ padding: '0.65rem 1.25rem', fontSize: '13px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>
              request_quote
            </span>
            <span>Teklif Al</span>
          </Link>

          {/* Mobile Hamburger Drawer Trigger */}
          <div className="mobile-only">
            <MobileMenu
              navLinks={navLinks.filter((link) => !/^\/admin(?:[/?#]|$)/.test(link.url))}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
