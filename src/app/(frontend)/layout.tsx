import React from 'react'
import type { Metadata } from 'next'
import './styles.css'
import './engineering.css'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { JsonLd } from '@/components/SEO/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),
  title: {
    default: 'AhsaTech | Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
    template: '%s — AhsaTech',
  },
  description:
    'AhsaTech; endüstriyel IoT, gömülü sistemler, DO-254/178C aviyonik, yapay zekâ destekli kurumsal yazılımlar ve donanım tasarımıyla anahtar teslim mühendislik çözümleri üretir.',
  keywords: [
    'gömülü sistemler',
    'PCB tasarımı',
    'endüstriyel IoT',
    'SCADA gateway',
    'savunma sanayii elektronik',
    'AhsaTech',
    'STM32',
    'LoRaWAN',
    'Marmara Teknokent',
  ],
  authors: [{ name: 'AhsaTech Mühendislik Masası', url: 'https://ahsatech.com' }],
  creator: 'AhsaTech Yazılım ve Elektronik',
  publisher: 'AhsaTech',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'AhsaTech | Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
    description:
      'Endüstriyel IoT, gömülü sistemler, yapay zekâ destekli kurumsal yazılımlar ve anahtar teslim mühendislik çözümleri.',
    url: 'https://ahsatech.com',
    siteName: 'AhsaTech Yazılım & Elektronik',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhsaTech | Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri',
    description:
      'Gömülü donanım ve endüstriyel telemetri mühendisliğinde yüksek güvenilirlikli çözümler.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <JsonLd />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          İçeriğe geç
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} style={{ minHeight: 'calc(100vh - 160px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
