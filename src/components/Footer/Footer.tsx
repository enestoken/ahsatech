import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Logo } from '../UI/Logo'

export const Footer: React.FC = async () => {
  let siteName = 'AhsaTech'
  let contactEmail = 'info@ahsatech.com'
  let contactPhone = '+90 (216) 400 20 00'
  let address = 'Teknokent AR-GE Merkezi, No:42 Al-Ahsa / İstanbul'

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    if (settings) {
      if (settings.siteName) siteName = settings.siteName
      if (settings.contactEmail) contactEmail = settings.contactEmail
      if (settings.contactPhone) contactPhone = settings.contactPhone
      if (settings.address) address = settings.address
    }
  } catch (err) {
    console.warn('[Footer] Site settings yüklenirken fallback kullanıldı:', err)
  }

  return (
    <footer
      className="corporate-footer"
      style={{
        backgroundColor: 'var(--color-surface-container-lowest)',
        borderTop: '1px solid var(--color-surface-container-high)',
        boxShadow: '0 -2px 16px rgba(19, 29, 34, 0.03)',
        marginTop: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top 1px subtle divider */}
      <div
        style={{ height: '1px', backgroundColor: 'var(--color-surface-variant)', width: '100%' }}
      />

      <div
        className="container"
        style={{ paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-2xl)' }}
      >
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Brand Info & Mission Statement (2 cols on desktop) */}
          <div style={{ gridColumn: 'span 2', maxWidth: '420px' }}>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <Logo />
            </div>
            <p
              className="body-md"
              style={{ marginBottom: 'var(--space-lg)', color: 'var(--color-on-surface-variant)' }}
            >
              Gelenekten Geleceğe Mühendislik: Yüksek teknolojili yazılım mimarileri, endüstriyel
              IoT ve hassas gömülü elektronik çözümleri.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                backgroundColor: 'var(--color-surface-container)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-surface-container-high)',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '18px', color: 'var(--color-secondary)' }}
              >
                verified
              </span>
              <span
                className="font-tech"
                style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-primary)' }}
              >
                ISO 9001 &amp; ISO 27001 ONAYLI MÜHENDİSLİK
              </span>
            </div>
          </div>

          {/* Sütun 1: Mühendislik & Hizmetler */}
          <div>
            <div
              className="font-tech"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)',
              }}
            >
              Hizmetlerimiz
            </div>
            <ul
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <li>
                <Link href="/projelerimiz" className="body-sm footer-link">
                  Gömülü Sistemler &amp; PCB
                </Link>
              </li>
              <li>
                <Link href="/urunler-cozumler" className="body-sm footer-link">
                  Endüstriyel IoT Ağ Geçitleri
                </Link>
              </li>
              <li>
                <Link href="/projelerimiz" className="body-sm footer-link">
                  Özel Yazılım Mimarileri
                </Link>
              </li>
              <li>
                <Link href="/urunler-cozumler" className="body-sm footer-link">
                  Uç Yapay Zeka (Edge AI)
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="body-sm footer-link">
                  Ar-Ge &amp; Seri Prototipleme
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 2: Kurumsal */}
          <div>
            <div
              className="font-tech"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)',
              }}
            >
              Kurumsal
            </div>
            <ul
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <li>
                <Link href="/hakkimizda" className="body-sm footer-link">
                  Hakkımızda &amp; Değerler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="body-sm footer-link">
                  Ar-Ge Laboratuvarlarımız
                </Link>
              </li>
              <li>
                <Link href="/projelerimiz" className="body-sm footer-link">
                  Başarı Hikayeleri
                </Link>
              </li>
              <li>
                <Link href="/urunler-cozumler" className="body-sm footer-link">
                  Tescilli Ürün Ailesi
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: İletişim & Lokasyon */}
          <div>
            <div
              className="font-tech"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-md)',
              }}
            >
              İletişim &amp; Merkez
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '18px',
                    color: 'var(--color-secondary)',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  apartment
                </span>
                <span className="body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {address}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)', flexShrink: 0 }}
                >
                  mail
                </span>
                <a href={`mailto:${contactEmail}`} className="body-sm footer-link">
                  {contactEmail}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '18px', color: 'var(--color-secondary)', flexShrink: 0 }}
                >
                  call
                </span>
                <span
                  className="body-sm"
                  style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}
                >
                  {contactPhone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-surface-container-high)',
            paddingTop: 'var(--space-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-md)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '16px', color: 'var(--color-outline)' }}
            >
              hub
            </span>
            <span className="body-sm" style={{ color: 'var(--color-outline)' }}>
              © 2026 {siteName} Yazılım ve Elektronik Teknolojileri A.Ş. Tüm hakları saklıdır.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link
              href="/"
              className="font-tech"
              style={{ fontSize: '11px', color: 'var(--color-outline)' }}
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/"
              className="font-tech"
              style={{ fontSize: '11px', color: 'var(--color-outline)' }}
            >
              KVKK Aydınlatma Metni
            </Link>
            <Link
              href="/"
              className="font-tech"
              style={{ fontSize: '11px', color: 'var(--color-outline)' }}
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
