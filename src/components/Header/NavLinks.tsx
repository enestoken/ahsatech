'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkItem {
  label: string
  url: string
}

interface NavLinksProps {
  links: NavLinkItem[]
}

export const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Ana gezinme"
      className="desktop-nav"
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {links.map((link) => {
        const isActive =
          pathname === link.url || (link.url !== '/' && pathname.startsWith(link.url + '/'))
        return (
          <Link
            key={link.url}
            href={link.url}
            aria-current={isActive ? 'page' : undefined}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-tech)',
              fontSize: '13px',
              fontWeight: isActive ? 700 : 500,
              letterSpacing: '0.03em',
              color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
              backgroundColor: isActive ? 'var(--color-surface-container)' : 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
