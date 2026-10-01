import React from 'react'
import Link from 'next/link'

export interface HeroBlockProps {
  eyebrow?: string
  heading?: string
  description?: string
  primaryBtnText?: string
  primaryBtnUrl?: string
  secondaryBtnText?: string
  secondaryBtnUrl?: string
  trustBadges?: Array<{ icon?: string; label?: string }>
}

export const HeroComponent: React.FC<HeroBlockProps> = ({
  eyebrow = 'Yeni Nesil Mühendislik Çözümleri',
  heading = 'Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
  description = 'AhsaTech; endüstriyel IoT, gömülü sistemler, yapay zekâ destekli kurumsal yazılımlar ve donanım tasarımıyla global standartlarda anahtar teslim mühendislik çözümleri üretir.',
  primaryBtnText = 'Projelerimizi İnceleyin',
  primaryBtnUrl = '/projelerimiz',
  secondaryBtnText = 'Çözüm Kataloğu',
  secondaryBtnUrl = '/urunler-cozumler',
  trustBadges = [
    { icon: 'verified', label: 'ISO 9001:2015' },
    { icon: 'memory', label: 'Altium & KiCad IPC-CID' },
    { icon: 'cloud_done', label: 'AWS & Azure IoT Partner' },
  ],
}) => {
  return (
    <section className="home-hero">
      <div className="container home-hero__layout">
        <div className="home-hero__copy">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="display-lg">{heading}</h1>
          <p className="body-lg home-hero__description">{description}</p>
          <div className="home-hero__actions">
            {primaryBtnText && (
              <Link href={primaryBtnUrl || '/projelerimiz'} className="btn-primary">
                {primaryBtnText}
                <span aria-hidden="true">↗</span>
              </Link>
            )}
            {secondaryBtnText && (
              <Link href={secondaryBtnUrl || '/urunler-cozumler'} className="btn-secondary">
                {secondaryBtnText}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
        {trustBadges && trustBadges.length > 0 && (
          <aside className="home-hero__engineering" aria-label="Teknik yeterlilikler">
            <div className="engineering-emblem" aria-hidden="true">
              <svg viewBox="0 0 400 250" fill="none">
                <g stroke="currentColor" strokeWidth="1">
                  <path d="M20 60h85l40 40h40M20 190h85l40-40h40M380 60h-85l-40 40h-40M380 190h-85l-40-40h-40M160 15v40l25 25M240 15v40l-25 25M160 235v-40l25-25M240 235v-40l-25-25" />
                  <rect x="145" y="70" width="110" height="110" rx="3" />
                  <rect x="156" y="81" width="88" height="88" rx="1" />
                  <path d="M175 96h50v58h-50zM145 110h-20m20 15h-20m20 15h-20m130-30h20m-20 15h20m-20 15h20" />
                  <circle cx="20" cy="60" r="4" />
                  <circle cx="20" cy="190" r="4" />
                  <circle cx="380" cy="60" r="4" />
                  <circle cx="380" cy="190" r="4" />
                </g>
                <path d="M192 139l8-28 8 28m-13-9h10" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
            <span className="home-hero__facts-title">Teknik yeterlilikler</span>
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="home-hero__fact">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <strong>{badge.label}</strong>
              </div>
            ))}
          </aside>
        )}
      </div>
    </section>
  )
}
