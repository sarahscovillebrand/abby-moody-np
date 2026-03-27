export default function Testimonial() {
  return (
    <section
      style={{
        background: '#EEF0E8',
        padding: '8rem 2rem',
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: '7rem',
            lineHeight: 0.5,
            color: 'rgba(92,128,112,0.2)',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          &ldquo;
        </span>
        <blockquote
          style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
            fontWeight: 300,
            color: '#2F4A3A',
            lineHeight: 1.55,
            marginBottom: '2rem',
          }}
        >
          I&rsquo;d tried four different antidepressants over six years. Within weeks of Abby reviewing my genetic results, we had a medication that actually worked. I wish I&rsquo;d found her sooner.
        </blockquote>
        <p
          style={{
            fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7E9480',
          }}
        >
          — Rebecca T., 34 &nbsp;·&nbsp; Genetic Testing &amp; Medication Management
        </p>
      </div>
    </section>
  )
}
