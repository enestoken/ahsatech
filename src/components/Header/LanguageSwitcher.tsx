'use client'

import React, { useState } from 'react'

export const LanguageSwitcher: React.FC = () => {
  const [lang, setLang] = useState<'TR' | 'EN'>('TR')

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 8px',
        backgroundColor: 'var(--color-surface-container)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-surface-container-high)',
      }}
    >
      <button
        type="button"
        onClick={() => setLang('TR')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-tech)',
          fontSize: '11px',
          fontWeight: lang === 'TR' ? 700 : 500,
          color: lang === 'TR' ? 'var(--color-primary)' : 'var(--color-outline)',
          padding: '2px 4px',
          transition: 'color 0.2s',
        }}
      >
        TR
      </button>
      <span style={{ color: 'var(--color-outline-variant)', fontSize: '11px', margin: '0 2px' }}>|</span>
      <button
        type="button"
        onClick={() => setLang('EN')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-tech)',
          fontSize: '11px',
          fontWeight: lang === 'EN' ? 700 : 500,
          color: lang === 'EN' ? 'var(--color-primary)' : 'var(--color-outline)',
          padding: '2px 4px',
          transition: 'color 0.2s',
        }}
      >
        EN
      </button>
    </div>
  )
}
