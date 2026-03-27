interface HeroData {
  heading?: string
  subheading?: string
  ctaLabel?: string
}

interface HeroProps {
  data?: HeroData | null
}

export default function Hero({ data }: HeroProps) {
  const ctaLabel = data?.ctaLabel ?? 'Begin Your Care'

  return (
    <section
      id="top"
      className="flex flex-col sm:flex-row relative overflow-hidden"
      style={{ minHeight: '78vh' }}
    >
      {/* ── Left: text ───────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:pl-20 sm:pr-8 pt-10 sm:pt-0 pb-16 sm:pb-0 relative z-10">

        <div className="eyebrow mb-5">Psychiatric &amp; Mental Health Care</div>

        <h1
          className="text-slate-deep mb-6"
          style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.04,
          }}
        >
          {data?.heading ?? <>Mental health care<br />that sees <span style={{ fontStyle: 'italic' }}>all</span> of you</>}
        </h1>

        <p
          className="mb-6"
          style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: 'clamp(1.2rem, 2.1vw, 1.55rem)',
            fontWeight: 300,
            color: '#6A8B68',
            lineHeight: 1.2,
          }}
        >
          Genetics-informed whole-person psychiatry
        </p>

        <p
          className="text-text-mid leading-relaxed mb-10 max-w-md"
          style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', lineHeight: 1.8 }}
        >
          {data?.subheading ?? 'Abby Moody offers psychiatric care grounded in genetic science — so your diagnosis, your treatment, and your medications are built around your biology, not a best guess.'}
        </p>

        <div className="flex items-center gap-5 flex-wrap">
          <a href="#new-patients" className="btn btn-primary">{ctaLabel}</a>
          <a
            href="#about"
            className="text-text-mid hover:text-slate-deep transition-colors flex items-center gap-1.5"
            style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.85rem', letterSpacing: '0.06em' }}
          >
            Meet Abby
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

      {/* ── Right: photo panel ─────────────────────────────── */}
      <div
        className="w-full sm:w-[48%] self-stretch relative overflow-hidden"
        style={{ minHeight: '52vh' }}
      >
        <img
          src="/pexels-ketut-subiyanto-4473896.jpg"
          alt="Abby Moody"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '22% center' }}
        />

        {/* Quote overlay */}
        <div className="absolute inset-0 flex items-end" style={{ padding: '0 2rem 3.5rem' }}>
          <div
            className="w-full"
            style={{
              background: 'rgba(39,58,58,0.72)',
              backdropFilter: 'blur(8px)',
              padding: '1.5rem 2rem',
              borderLeft: '2px solid #C9967E',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-crimson), Georgia, serif',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
              }}
            >
              &ldquo;Where science becomes personal — and mental health care finally makes sense.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
