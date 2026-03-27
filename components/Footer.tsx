import LegalModals from './LegalModals'

interface FooterProps {
  practiceName?: string
  tagline?: string
  faxNumber?: string
  phoneNumber?: string
  spruceLink?: string
}

export default function Footer({
  practiceName = 'Abby Moody, PMHNP-BC',
  tagline = 'Psychiatric & mental health care grounded in genetics and whole-person understanding.',
  faxNumber,
  phoneNumber,
  spruceLink,
}: FooterProps) {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'Home',         href: '#top'          },
    { label: 'About Abby',   href: '#about'         },
    { label: 'New Patients', href: '#new-patients'  },
  ]

  return (
    <footer style={{ background: '#2F4A3A' }}>
      <div className="max-w-6xl mx-auto px-8 sm:px-16" style={{ paddingTop: '5rem', paddingBottom: '2.5rem' }}>

        {/* Top grid */}
        <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.25rem', fontWeight: 400, color: '#FAFAF8', marginBottom: '0.75rem' }}>
              {practiceName.split(',')[0]}{' '}
              <span style={{ fontWeight: 300, color: '#7A9B7C' }}>
                {practiceName.includes(',') ? practiceName.slice(practiceName.indexOf(',') + 1).trim() : ''}
              </span>
            </p>
            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '34ch' }}>
              {tagline}
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <a
                href="https://maps.google.com/?q=8016+Stateline+Road+Suite+205+Prairie+Village+KS+66208"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, textDecoration: 'none' }}
              >
                8016 Stateline Road, Suite 205<br />
                Prairie Village, KS 66208
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.2rem', fontWeight: 500 }}>
              Navigate
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="footer-nav-link"
                    style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.2rem', fontWeight: 500 }}>
              Connect
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a
                  href="#new-patients"
                  className="footer-nav-link"
                  style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                >
                  Begin Your Care
                </a>
              </li>
              <li>
                <a
                  href={phoneNumber ? `tel:${phoneNumber.replace(/\D/g, '')}` : 'tel:'}
                  className="footer-nav-link"
                  style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                >
                  {phoneNumber ?? '(913) 586-9939'}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="footer-nav-link"
                  style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                >
                  Send us a message
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <LegalModals />
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)' }}>
            © {year} {practiceName}. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)' }}>
            In crisis? Call or text <strong style={{ color: 'rgba(255,255,255,0.5)' }}>988</strong>.
          </p>
        </div>
      </div>
    </footer>
  )
}
