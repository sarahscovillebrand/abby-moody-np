export default function Bridge() {
  return (
    <section style={{ background: '#2F4A3A', padding: '6rem 2rem' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2
          style={{
            fontFamily: 'var(--font-crimson), Georgia, serif',
            fontSize: 'clamp(1.9rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#FAFAF8',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Mental health care that starts<br />
          with your biology.
        </h2>
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'rgba(122,158,142,0.4)',
            margin: '0 auto 1.5rem',
          }}
        />
        <p
          style={{
            fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.85,
            maxWidth: '68ch',
            margin: '0 auto',
          }}
        >
          Too many people cycle through medications that don&rsquo;t work and appointments that feel rushed.
          Abby built this practice on a different conviction: that effective psychiatric care begins with understanding who you are — at a biological level.
        </p>
      </div>
    </section>
  )
}
