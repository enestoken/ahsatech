import React from 'react'

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ahsatech.com/#organization',
    name: 'AhsaTech Yazılım ve Hassas Elektronik Teknolojileri A.Ş.',
    alternateName: 'AhsaTech',
    url: 'https://ahsatech.com',
    logo: 'https://ahsatech.com/favicon.ico',
    description:
      'Geleceğin Yazılım Mimarileri & Hassas Elektronik Sistemleri. Gömülü donanım, endüstriyel IoT, DO-254/178C aviyonik ve bulut telemetri mühendisliği.',
    foundingDate: '2019',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Bilişim Vadisi Yerleşkesi, Teknoloji Geliştirme Bölgesi No: 14/B',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        postalCode: '41400',
        addressCountry: 'TR',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Al-Ahsa Oasis Tech Hub, Building 7, King Fahd Industrial Road',
        addressLocality: 'Al-Ahsa',
        addressRegion: 'Eastern Province',
        addressCountry: 'SA',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+90-262-678-9000',
        contactType: 'technical support',
        email: 'muhendislik@ahsatech.com',
        areaServed: ['TR', 'EU'],
        availableLanguage: ['Turkish', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+966-13-580-1234',
        contactType: 'customer service',
        email: 'gcc@ahsatech.com',
        areaServed: ['SA', 'AE', 'QA', 'KW', 'BH', 'OM'],
        availableLanguage: ['Arabic', 'English'],
      },
    ],
    knowsAbout: [
      'Embedded Systems Engineering',
      'Industrial IoT & SCADA',
      'Custom PCB Layout & SMT Assembly',
      'STM32 & ARM Cortex Microcontrollers',
      'Galvanically Isolated Telemetry',
      'Cloud Architecture & Time-Series Data Pipelines',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ahsatech.com/#website',
    url: 'https://ahsatech.com',
    name: 'AhsaTech Yazılım & Elektronik',
    publisher: {
      '@id': 'https://ahsatech.com/#organization',
    },
    inLanguage: 'tr-TR',
  }

  return (
    <>
      <script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
