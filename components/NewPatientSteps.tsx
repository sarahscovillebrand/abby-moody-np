'use client'

import { useState } from 'react'

interface Step {
  title?: string
  description?: string
  downloadLabel?: string
  downloadFile?: { asset?: { url: string; originalFilename?: string } } | null
}

interface NewPatientData {
  sectionTitle?: string
  sectionIntro?: string
  steps?: Step[]
  faxNote?: string
  spruceNote?: string
  spruceButtonLabel?: string
}

interface Props {
  data?: NewPatientData | null
  faxNumber?: string
  spruceLink?: string
  phoneNumber?: string
}

const defaultSteps: Step[] = [
  {
    title: 'Reach Out to Our Office',
    description: 'Get in touch with us to begin the onboarding process. Our team will guide you through everything you need to get started.',
  },
  {
    title: 'Download & Complete Your Intake Forms',
    description: 'Download your new patient paperwork and begin filling it out at your own pace before your first appointment.',
    downloadLabel: 'Download Forms',
  },
  {
    title: "Sit Tight — We'll Be in Touch",
    description: "Someone from our team will respond to your message, call, or text and walk you through the steps of the patient onboarding process.",
  },
]

export default function NewPatientSteps({ data, faxNumber, spruceLink, phoneNumber }: Props) {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const sectionTitle = data?.sectionTitle ?? 'Becoming a New Patient'
  const sectionIntro = data?.sectionIntro ?? "Getting started is straightforward. Follow the steps below and we'll take care of the rest."
  const steps        = data?.steps?.length ? data.steps : defaultSteps
  const faxNote      = data?.faxNote ?? 'Fax to:'
  const spruceNote   = data?.spruceNote ?? 'Or upload via Spruce:'
  const spruceBtnLabel = data?.spruceButtonLabel ?? 'Open Spruce App'

  return (
    <section id="new-patients" style={{ background: 'linear-gradient(135deg, #6A8B68 0%, #486858 100%)', padding: '4rem 2rem' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="max-w-2xl mb-8">
          <div className="mb-3" style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ display: 'block', width: '28px', height: '1px', background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            Getting Started
          </div>
          <h2 style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, color: '#F8F3EC', marginBottom: '0.5rem' }}>
            {sectionTitle}
          </h2>
          <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            {sectionIntro}
          </p>
        </div>

        <div>
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid sm:grid-cols-[72px_1fr]"
              style={{ gap: '1.5rem', paddingBottom: '2rem', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none', marginBottom: i < steps.length - 1 ? '2rem' : 0 }}
            >
              {/* Number */}
              <div>
                <span style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '3rem', fontWeight: 300, color: 'rgba(255,255,255,0.22)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#F8F3EC', marginBottom: '0.35rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '0.85rem' }}>
                  {step.description}
                </p>

                {/* Contact options — step 1 */}
                {i === 0 && (
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 mt-1" style={{ maxWidth: '480px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderLeft: '2px solid rgba(255,255,255,0.3)', borderRadius: '2px' }}>
                      <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem' }}>Call or text us</p>
                      <a
                        href={phoneNumber ? `tel:${phoneNumber.replace(/\D/g, '')}` : '#'}
                        style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.95rem', fontWeight: 500, color: '#F8F3EC', textDecoration: 'none' }}
                      >
                        {phoneNumber ?? '(913) 586-9939'}
                      </a>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem 1rem', borderLeft: '2px solid rgba(255,255,255,0.3)', borderRadius: '2px' }}>
                      <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.3rem' }}>Prefer to write?</p>
                      <a
                        href="/contact"
                        className="btn btn-clay"
                        style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}
                      >
                        Send us a message
                      </a>
                    </div>
                  </div>
                )}

                {/* First appointment accordion — step 3 */}
                {i === 2 && (
                  <div style={{ marginTop: '1rem' }}>
                    <button
                      onClick={() => setAppointmentOpen(!appointmentOpen)}
                      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationThickness: '1px' }}
                    >
                      Wondering what happens at your first appointment?
                      <svg
                        width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: 'transform 0.25s', transform: appointmentOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {appointmentOpen && (
                      <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0' }}>

                        {/* Appointment step 1 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '0.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
                          <span style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.2rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)', paddingTop: '0.1rem' }}>1</span>
                          <div>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 500, color: '#F8F3EC', marginBottom: '0.3rem' }}>Come in and meet Abby</p>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
                              Your first visit takes place at our Prairie Village office. We'll get you settled and introduce you to Abby before diving in.
                            </p>
                            <a
                              href="https://maps.google.com/?q=8016+Stateline+Road+Suite+205+Prairie+Village+KS+66208"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                              </svg>
                              8016 Stateline Rd, Suite 205 · Prairie Village, KS
                            </a>
                          </div>
                        </div>

                        {/* Appointment step 2 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '0.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
                          <span style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.2rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)', paddingTop: '0.1rem' }}>2</span>
                          <div>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 500, color: '#F8F3EC', marginBottom: '0.3rem' }}>Talk through your symptoms & history</p>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                              Abby will walk through your medical history, past experiences, and current symptoms to lay a thoughtful foundation for your care.
                            </p>
                          </div>
                        </div>

                        {/* Appointment step 3 */}
                        <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '0.75rem' }}>
                          <span style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.2rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)', paddingTop: '0.1rem' }}>3</span>
                          <div>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', fontWeight: 500, color: '#F8F3EC', marginBottom: '0.3rem' }}>Receive your Genomind genetic test kit</p>
                            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                              Abby will order a Genomind genetic test kit sent directly to your home. Your results help us understand which medications are best suited to your unique biology.
                            </p>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                )}

                {/* Download button — step 2 */}
                {i === 1 && (
                  <a
                    href={step.downloadFile?.asset?.url ?? '#'}
                    download={step.downloadFile?.asset?.originalFilename ?? undefined}
                    onClick={!step.downloadFile?.asset?.url ? (e) => e.preventDefault() : undefined}
                    className="btn btn-clay"
                    style={{ opacity: step.downloadFile?.asset?.url ? 1 : 0.55, cursor: step.downloadFile?.asset?.url ? 'pointer' : 'not-allowed', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', fontSize: '0.75rem' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {step.downloadLabel ?? 'Download Forms'}
                    {!step.downloadFile?.asset?.url && <span style={{ fontSize: '0.72rem', fontWeight: 400, opacity: 0.7 }}>(coming soon)</span>}
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
