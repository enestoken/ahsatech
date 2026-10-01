import React from 'react'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showSubtitle?: boolean
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link href="/" className={`logo-link ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* 8-Point Rosette & Circuit Hybrid Emblem */}
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          backgroundColor: 'var(--color-primary-container)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(6, 76, 53, 0.2)',
          border: '1px solid rgba(52, 233, 253, 0.3)',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer 8-fold star outline */}
          <polygon
            points="50,5 63,37 95,50 63,63 50,95 37,63 5,50 37,37"
            stroke="var(--color-secondary-container)"
            strokeWidth="3.5"
            fill="none"
            opacity="0.85"
          />
          {/* Inner 45-degree rotated diamond */}
          <rect
            x="28"
            y="28"
            width="44"
            height="44"
            rx="4"
            stroke="var(--color-on-primary)"
            strokeWidth="2.5"
            fill="none"
            transform="rotate(45 50 50)"
          />
          {/* Silicon Microchip Core */}
          <rect x="36" y="36" width="28" height="28" rx="3" fill="var(--color-primary)" />
          {/* Glowing central data pip */}
          <circle cx="50" cy="50" r="5" fill="var(--color-secondary-container)" />
          {/* Circuit trace terminals */}
          <line x1="50" y1="5" x2="50" y2="28" stroke="var(--color-secondary-container)" strokeWidth="3" />
          <line x1="50" y1="72" x2="50" y2="95" stroke="var(--color-secondary-container)" strokeWidth="3" />
          <line x1="5" y1="50" x2="28" y2="50" stroke="var(--color-secondary-container)" strokeWidth="3" />
          <line x1="72" y1="50" x2="95" y2="50" stroke="var(--color-secondary-container)" strokeWidth="3" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          className="font-display"
          style={{
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-primary)',
            lineHeight: 1,
          }}
        >
          AhsaTech
        </span>
        {showSubtitle && (
          <span
            className="font-tech"
            style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-outline)',
              marginTop: '3px',
            }}
          >
            Yazılım &amp; Elektronik
          </span>
        )}
      </div>
    </Link>
  )
}
