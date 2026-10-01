import React from 'react'

interface GirihBackgroundProps {
  opacity?: number
  className?: string
}

export const GirihBackground: React.FC<GirihBackgroundProps> = ({ opacity = 0.45, className = '' }) => {
  return (
    <div
      className={`girih-bg ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
        overflow: 'hidden',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--color-outline-variant)' }}
      >
        <pattern id="circuit-girih-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Girih 45-degree diamond tile */}
          <path d="M60 0L120 60L60 120L0 60Z" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.4" />
          {/* Inner silicon ring */}
          <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.5" />
          {/* Bus conductors */}
          <path d="M0 60H46M74 60H120M60 0V46M60 74V120" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          {/* Solder / Via pads */}
          <circle cx="60" cy="14" r="2.5" fill="var(--color-secondary)" opacity="0.6" />
          <circle cx="106" cy="60" r="2.5" fill="var(--color-secondary)" opacity="0.6" />
          <circle cx="60" cy="106" r="2.5" fill="var(--color-secondary)" opacity="0.6" />
          <circle cx="14" cy="60" r="2.5" fill="var(--color-secondary)" opacity="0.6" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-girih-pattern)" />
      </svg>
    </div>
  )
}
