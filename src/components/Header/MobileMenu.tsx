'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileMenu({ navLinks }: { navLinks: Array<{ label: string; url: string }> }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const close = () => {
    dialog.current?.close()
    setIsOpen(false)
    trigger.current?.focus()
  }
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const breakpoint = window.matchMedia('(min-width: 1200px)')
    const onResize = () => {
      if (breakpoint.matches) dialog.current?.close()
    }
    breakpoint.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = previous
      breakpoint.removeEventListener('change', onResize)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={trigger}
        className="menu-trigger"
        type="button"
        aria-label="Menüyü aç"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          dialog.current?.showModal()
          setIsOpen(true)
        }}
      >
        <span aria-hidden="true">☰</span>
        <span>Menü</span>
      </button>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-navigation"
        aria-labelledby="menu-title"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialog.current) close()
        }}
      >
        <div className="mobile-navigation__content">
          <div className="mobile-navigation__heading">
            <strong id="menu-title">AhsaTech</strong>
            <button type="button" className="menu-close" aria-label="Menüyü kapat" onClick={close}>
              ×
            </button>
          </div>
          <nav aria-label="Mobil gezinme">
            {navLinks.map((link, idx) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={close}
                aria-current={
                  pathname === link.url || (link.url !== '/' && pathname.startsWith(link.url + '/'))
                    ? 'page'
                    : undefined
                }
              >
                <span aria-hidden="true">0{idx + 1}</span>
                {link.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
          <Link href="/teklif-al" className="btn-primary" onClick={close}>
            Teklif Al <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </dialog>
    </>
  )
}
