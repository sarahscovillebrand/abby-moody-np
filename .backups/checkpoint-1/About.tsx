import Image from 'next/image'
import { PortableText } from '@portabletext/react'

interface AboutData {
  sectionTitle?: string
  photo?: { asset?: { url: string }; alt?: string } | null
  bio?: unknown[]
  credentials?: string[]
}

interface AboutProps {
  data?: AboutData | null
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: '#526055', lineHeight: 1.8, marginBottom: '1.25rem' }}>{children}</p>
    ),
  },
}

export default function About({ data }: AboutProps) {
  const sectionTitle = data?.sectionTitle ?? 'About Abby'
  const photoUrl     = data?.photo?.asset?.url
  const altText      = data?.photo?.alt ?? 'Abby Moody, PMHNP-BC'
  const bio          = data?.bio
  const credentials  = data?.credentials ?? [
    'PMHNP-BC — Board Certified Psychiatric Mental Health Nurse Practitioner',
    'Pharmacogenomics & GeneSight Testing Specialist',
    'Now accepting new patients',
  ]

  const defaultBio = [
    "I'm Abby Moody, a board-certified Psychiatric Mental Health Nurse Practitioner specializing in pharmacogenomic testing — using your unique genetic profile to guide psychiatric prescribing.",
    "I believe mental health care should feel collaborative, compassionate, and precise. You're not just a diagnosis — you're a whole person, and your care should reflect that.",
  ]

  return (
    <section id="about" style={{ background: '#DCE4D8', padding: '7rem 2rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="eyebrow mb-14">{sectionTitle}</div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.65fr_1.2fr] gap-16 lg:gap-24 items-start">

          {/* Photo */}
          <div className="relative" style={{ paddingTop: '2rem' }}>
            <div style={{ aspectRatio: '3/4', borderRadius: '2px', overflow: 'hidden', background: 'linear-gradient(150deg, #C3D8BF 0%, #7A9B7C 50%, #4A6E58 100%)' }}>
              {photoUrl ? (
                <Image src={photoUrl} alt={altText} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <span style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '5rem', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>AM</span>
                  <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Photo coming soon</p>
                </div>
              )}
            </div>

            {/* Floating credential badge */}
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '0.5rem', background: '#FAFAF8', padding: '1.2rem 1.8rem', borderRadius: '2px', boxShadow: '0 12px 32px rgba(39,58,58,0.1)', minWidth: '170px' }}>
              <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6A8B68', marginBottom: '0.25rem' }}>Certified</p>
              <p style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.1rem', fontWeight: 400, color: '#2F4A3A' }}>PMHNP-BC</p>
              <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.78rem', color: '#7E9480', marginTop: '0.15rem' }}>Board Certified</p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-2">
            <blockquote style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 300, color: '#2C3A30', lineHeight: 1.4, paddingLeft: '1.25rem', borderLeft: '2px solid #B07A5F', marginBottom: '2rem' }}>
              &ldquo;The right medication should work with your body — not against it.&rdquo;
            </blockquote>

            {bio ? (
              <PortableText value={bio as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
            ) : (
              defaultBio.map((para, i) => (
                <p key={i} style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: '#526055', lineHeight: 1.8, marginBottom: '1.25rem' }}>{para}</p>
              ))
            )}

            {credentials.length > 0 && (
              <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0', listStyle: 'none' }}>
                {credentials.map((cred, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.7rem 0', borderBottom: '1px solid #DCE4D8' }}>
                    <span style={{ color: '#6A8B68', marginTop: '0.1rem' }}>✓</span>
                    <span style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: '#526055' }}>{cred}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
