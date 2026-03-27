export default function CrisisBanner() {
  return (
    <div
      className="w-full py-2 px-4 sm:py-3 sm:px-8 text-center relative z-50"
      style={{ background: 'rgba(106, 139, 104, 0.8)' }}
    >
      <p
        style={{
          fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
          fontSize: '0.8rem',
          letterSpacing: '0.04em',
          color: '#FAFAF8',
        }}
      >
        If you are in crisis, call or text{' '}
        <strong>988</strong>
        {' '}(Suicide &amp; Crisis Lifeline) or text HOME to{' '}
        <strong>741741</strong>.
      </p>
    </div>
  )
}
