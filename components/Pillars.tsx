const pillars = [
  {
    num: '01',
    title: 'Genetics-Informed',
    body: 'Your genes influence how your brain works and how medications interact with your body. Abby uses that information — not guesswork — to guide every clinical decision.',
  },
  {
    num: '02',
    title: 'Whole-Person',
    body: 'Mental health doesn\'t exist in isolation. Abby looks at sleep, stress, physical health, and life history together — because that\'s the only way to build care that actually holds.',
  },
  {
    num: '03',
    title: 'Deeply Personal',
    body: 'You will not feel like a number here. Abby works with a small number of patients at a time, by design — so your care truly reflects who you are.',
  },
]

export default function Pillars() {
  return (
    <section style={{ background: '#FAFAF8', padding: '7rem 2rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <div className="eyebrow justify-center mb-5">A different kind of psychiatric care</div>
          <h2
            style={{
              fontFamily: 'var(--font-crimson), Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
              fontWeight: 300,
              color: '#2F4A3A',
            }}
          >
            Three things that set this practice apart.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="px-8 py-10"
              style={{
                borderTop: '1px solid #DCE4D8',
                borderLeft: i > 0 ? '1px solid #DCE4D8' : undefined,
                borderBottom: '1px solid #DCE4D8',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-crimson), Georgia, serif',
                  fontSize: '3.25rem',
                  fontWeight: 300,
                  color: '#C3D8BF',
                  lineHeight: 1,
                  marginBottom: '1.5rem',
                }}
              >
                {p.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-crimson), Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#2F4A3A',
                  marginBottom: '0.75rem',
                }}
              >
                {p.title}
              </h3>
              <div style={{ width: '40px', height: '1px', background: '#7A9B7C', marginBottom: '1.25rem' }} />
              <p
                style={{
                  fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
                  fontSize: '1.05rem',
                  color: '#526055',
                  lineHeight: 1.75,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
