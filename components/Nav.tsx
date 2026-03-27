'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface NavProps {
  practiceName?: string
}

export default function Nav({ practiceName = 'Abby Moody, PMHNP-BC' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About',        href: '#about'       },
    { label: 'New Patients', href: '#new-patients' },
  ]

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-500"
      style={{
        backgroundColor: '#EEF0E8',
        borderBottom: '1px solid rgba(44, 58, 56, 0.12)',
        boxShadow: scrolled ? '0 1px 16px rgba(44,58,56,0.07)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-8 sm:px-16 py-3 flex items-center justify-between">

        {/* Name */}
        <a
          href="/"
          className="flex items-center gap-0.5 text-slate-deep hover:text-slate transition-colors"
          style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.35rem', fontWeight: 400 }}
        >
          <Image src="/Abby Moody.png" alt="Abby Moody logo" width={32} height={32} style={{ objectFit: 'contain' }} />
          {practiceName.split(',')[0]}{' '}
          <span className="font-light text-sage-mid" style={{ marginLeft: '0.35rem' }}>
            {practiceName.includes(',') ? practiceName.slice(practiceName.indexOf(',') + 1).trim() : ''}
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-mid hover:text-slate-deep transition-colors"
              style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#new-patients" className="btn btn-primary">
            Begin Your Care
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-slate"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="sm:hidden bg-linen/95 backdrop-blur-md border-t border-stone px-8 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-mid"
              style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#new-patients" onClick={() => setMenuOpen(false)} className="btn btn-primary text-center">
            Begin Your Care
          </a>
        </div>
      )}
    </header>
  )
}
