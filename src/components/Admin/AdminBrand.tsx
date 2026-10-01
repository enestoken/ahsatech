import React from 'react'
import Link from 'next/link'

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? 'ahsa-brand-mark ahsa-brand-mark--compact' : 'ahsa-brand-mark'}
      viewBox="0 0 48 48"
      role="img"
      aria-label="AhsaTech"
    >
      <rect width="48" height="48" rx="10" fill="#064c35" />
      <path
        d="M24 6 30 18 42 24 30 30 24 42 18 30 6 24 18 18 24 6Z"
        fill="none"
        stroke="#34e9fd"
        strokeWidth="1.8"
      />
      <rect
        x="16.5"
        y="16.5"
        width="15"
        height="15"
        rx="2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        transform="rotate(45 24 24)"
      />
      <circle cx="24" cy="24" r="2.8" fill="#34e9fd" />
    </svg>
  )
}

export function AdminLogo() {
  return (
    <div className="ahsa-admin-logo" aria-label="AhsaTech Yönetim Paneli">
      <BrandMark />
      <span>
        <strong>AhsaTech</strong>
        <small>İçerik Yönetimi</small>
      </span>
    </div>
  )
}

export function AdminIcon() {
  return <BrandMark compact />
}

export function AdminWelcome() {
  return (
    <section className="ahsa-admin-welcome">
      <div>
        <span className="ahsa-admin-welcome__eyebrow">AhsaTech Yönetim Merkezi</span>
        <h1>İçerik ve başvuruları tek yerden yönetin</h1>
        <p>Sayfalar, projeler, ürünler ve gelen teklif talepleri için hızlı erişim.</p>
      </div>
      <nav aria-label="Hızlı yönetim bağlantıları">
        <a href="/" target="_blank" rel="noreferrer">
          Siteyi görüntüle
        </a>
        <Link href="/admin/collections/projects/create">Yeni proje</Link>
        <Link href="/admin/collections/products/create">Yeni ürün</Link>
        <Link href="/admin/collections/rfq-submissions">Teklif talepleri</Link>
      </nav>
    </section>
  )
}
