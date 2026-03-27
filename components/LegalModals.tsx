'use client'

import { useState, useEffect } from 'react'

type ModalId = 'privacy' | 'terms' | 'hipaa' | 'accessibility' | null

const LINKS: { id: ModalId & string; label: string }[] = [
  { id: 'privacy',       label: 'Privacy Policy'     },
  { id: 'terms',         label: 'Terms of Service'   },
  { id: 'hipaa',         label: 'HIPAA Notice'        },
  { id: 'accessibility', label: 'Accessibility'       },
]

export default function LegalModals() {
  const [open, setOpen] = useState<ModalId>(null)

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Trigger links — rendered inline in footer */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.25rem' }}>
        {LINKS.map(l => (
          <button
            key={l.id}
            onClick={() => setOpen(l.id as ModalId)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.4)',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(null) }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(39,58,58,0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              background: '#FAFAF8',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              borderRadius: '2px',
              animation: 'modalIn 0.25s ease',
            }}
          >
            {/* Header */}
            <div style={{ background: '#2F4A3A', padding: '2.25rem 2.5rem 1.75rem', position: 'sticky', top: 0, zIndex: 2 }}>
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  fontFamily: 'sans-serif',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#FAFAF8')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                ×
              </button>
              <h3 style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: '1.75rem', fontWeight: 400, color: '#FAFAF8', marginBottom: '0.25rem' }}>
                {LINKS.find(l => l.id === open)?.label}
              </h3>
              <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>
                Effective January 1, 2026 · Abby Moody, PMHNP-BC
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: '2.5rem' }}>
              {open === 'hipaa'         && <HipaaContent />}
              {open === 'privacy'       && <PrivacyContent />}
              {open === 'terms'         && <TermsContent />}
              {open === 'accessibility' && <AccessibilityContent />}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}

// ─── Shared helpers ─────────────────────────────────────────────────────────

const h4Style: React.CSSProperties = {
  fontFamily: 'var(--font-crimson), Georgia, serif',
  fontSize: '1.15rem',
  fontWeight: 400,
  color: '#2F4A3A',
  marginTop: '1.75rem',
  marginBottom: '0.5rem',
}
const pStyle: React.CSSProperties = {
  fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
  fontSize: '0.93rem',
  color: '#526055',
  lineHeight: 1.75,
  marginBottom: '0.6rem',
}
const liStyle: React.CSSProperties = {
  fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
  fontSize: '0.93rem',
  color: '#526055',
  paddingLeft: '1.2rem',
  position: 'relative',
  lineHeight: 1.65,
  marginBottom: '0.35rem',
}
const divider = <div style={{ width: '40px', height: '1px', background: '#C3D8BF', margin: '1.5rem 0' }} />
const note = (text: React.ReactNode) => (
  <div style={{ background: '#EEF0E8', padding: '1.2rem 1.5rem', borderLeft: '2px solid #C3D8BF', marginTop: '2rem' }}>
    <p style={{ ...pStyle, marginBottom: 0 }}>{text}</p>
  </div>
)
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li style={liStyle}><span style={{ position: 'absolute', left: 0, color: '#6A8B68' }}>—</span>{children}</li>
)

// ─── HIPAA ───────────────────────────────────────────────────────────────────

function HipaaContent() {
  return (
    <>
      <h4 style={{ ...h4Style, marginTop: 0 }}>Your Rights</h4>
      <p style={pStyle}>When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Get a copy of your health and claims records','Correct your health and claims records','Request confidential communications','Ask us to limit the information we share','Get a list of those with whom we\'ve shared your information','Get a copy of this privacy notice','Choose someone to act for you','File a complaint if you believe your privacy rights have been violated'].map(t => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      {divider}
      <h4 style={h4Style}>Your Choices</h4>
      <p style={pStyle}>For certain health information, you can tell us your choices about what we share. Tell us what you want us to do, and we will follow your instructions.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Share information with your family, close friends, or others involved in your care','Share information in a disaster relief situation','Include your information in a hospital directory','Contact you for fundraising efforts','Share your information for marketing purposes','Share a de-identified version of your information for research or other purposes'].map(t => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      {divider}
      <h4 style={h4Style}>Our Uses and Disclosures</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Bullet><strong>Treat you</strong> — We can use your health information and share it with other professionals who are treating you.</Bullet>
        <Bullet><strong>Run our practice</strong> — We can use and share your health information to run our practice, improve your care, and contact you when necessary.</Bullet>
        <Bullet><strong>Bill for your services</strong> — We can use and share your health information to bill and get payment from health plans or other entities.</Bullet>
      </ul>
      {divider}
      <h4 style={h4Style}>How We Protect Your Information</h4>
      <p style={pStyle}>We use administrative, physical, and technical safeguards to protect the privacy of your medical information. All electronic communications — including messaging through Spruce Health — are conducted over HIPAA-compliant, encrypted channels.</p>
      {divider}
      <h4 style={h4Style}>Our Responsibilities</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['We are required by law to maintain the privacy and security of your protected health information.','We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.','We must follow the duties and privacy practices described in this notice and give you a copy of it.','We will not use or share your information other than as described here unless you tell us we can in writing.'].map(t => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      {divider}
      <h4 style={h4Style}>Questions or Complaints</h4>
      <p style={pStyle}>If you have questions about this notice or believe your privacy rights have been violated, you may contact us directly or file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights.</p>
      {note(<><strong>Contact:</strong> (000) 000-0000 · This notice is provided in accordance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations.</>)}
    </>
  )
}

// ─── Privacy Policy ──────────────────────────────────────────────────────────

function PrivacyContent() {
  return (
    <>
      <h4 style={{ ...h4Style, marginTop: 0 }}>Overview</h4>
      <p style={pStyle}>Abby Moody, PMHNP-BC is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and safeguard the information you provide when you visit this website or interact with our practice.</p>
      {divider}
      <h4 style={h4Style}>Information We Collect</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Bullet><strong>Information you provide directly</strong> — your name, email, phone number, and anything submitted through our contact or intake forms.</Bullet>
        <Bullet><strong>Health information</strong> — collected through intake forms and clinical interactions, governed separately under our HIPAA Notice.</Bullet>
        <Bullet><strong>Usage data</strong> — general information about how you interact with this website, collected through standard web analytics.</Bullet>
      </ul>
      {divider}
      <h4 style={h4Style}>How We Use Your Information</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['To respond to your inquiries and schedule appointments','To provide and manage your clinical care','To communicate with you about your care and the practice','To improve the content and functionality of this website','To comply with legal and regulatory obligations'].map(t => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      {divider}
      <h4 style={h4Style}>How We Protect Your Information</h4>
      <p style={pStyle}>All clinical communications are conducted through HIPAA-compliant, encrypted channels. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      {divider}
      <h4 style={h4Style}>Cookies</h4>
      <p style={pStyle}>This website may use basic cookies to support functionality. We do not use tracking cookies for advertising. You may disable cookies in your browser settings at any time.</p>
      {divider}
      <h4 style={h4Style}>Your Rights</h4>
      <p style={pStyle}>You have the right to request access to, correction of, or deletion of your personal information. To make a request, please contact us directly.</p>
      {divider}
      <h4 style={h4Style}>Changes to This Policy</h4>
      <p style={pStyle}>We may update this policy from time to time. Continued use of this website constitutes acceptance of any updated policy.</p>
      {note(<><strong>Questions?</strong> Contact us at (000) 000-0000.</>)}
    </>
  )
}

// ─── Terms of Service ────────────────────────────────────────────────────────

function TermsContent() {
  return (
    <>
      <h4 style={{ ...h4Style, marginTop: 0 }}>Acceptance of Terms</h4>
      <p style={pStyle}>By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
      {divider}
      <h4 style={h4Style}>Not a Substitute for Medical Care</h4>
      <p style={pStyle}>The content on this website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Never use this site as a substitute for professional medical advice from a qualified provider who knows your situation.</p>
      <p style={pStyle}>If you are experiencing a medical or psychiatric emergency, call 911 or go to your nearest emergency room. For mental health crises, call or text <strong>988</strong> immediately.</p>
      {divider}
      <h4 style={h4Style}>No Provider-Patient Relationship</h4>
      <p style={pStyle}>Visiting this website or submitting a contact form does not establish a provider-patient relationship with Abby Moody, PMHNP-BC. A clinical relationship is only established after a formal intake process has been completed and both parties have agreed to begin care.</p>
      {divider}
      <h4 style={h4Style}>Accuracy of Information</h4>
      <p style={pStyle}>We make reasonable efforts to ensure accuracy but make no warranties regarding the completeness or reliability of any content. Information may change without notice.</p>
      {divider}
      <h4 style={h4Style}>Intellectual Property</h4>
      <p style={pStyle}>All content on this website — including text, design, and copy — is the property of Abby Moody, PMHNP-BC and may not be reproduced or used without prior written permission.</p>
      {divider}
      <h4 style={h4Style}>Limitation of Liability</h4>
      <p style={pStyle}>To the fullest extent permitted by law, Abby Moody, PMHNP-BC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>
      {divider}
      <h4 style={h4Style}>Changes to These Terms</h4>
      <p style={pStyle}>We reserve the right to update these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
      {note(<><strong>Questions?</strong> Contact us at (000) 000-0000.</>)}
    </>
  )
}

// ─── Accessibility ───────────────────────────────────────────────────────────

function AccessibilityContent() {
  return (
    <>
      <h4 style={{ ...h4Style, marginTop: 0 }}>Our Commitment</h4>
      <p style={pStyle}>Abby Moody, PMHNP-BC is committed to ensuring this website is accessible to all people, including those with disabilities. We believe everyone deserves equal access to information about mental health care.</p>
      {divider}
      <h4 style={h4Style}>Standards We Aim to Meet</h4>
      <p style={pStyle}>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA — guidelines that make web content more accessible to people with visual, auditory, physical, cognitive, and neurological disabilities.</p>
      {divider}
      <h4 style={h4Style}>Current Accessibility Features</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['Semantic HTML structure to support screen readers','Sufficient color contrast between text and backgrounds','Keyboard-navigable interactive elements including modals','Descriptive aria-labels on interactive components','Responsive design that adapts to all screen sizes and orientations','Text that can be resized without loss of content or functionality'].map(t => <Bullet key={t}>{t}</Bullet>)}
      </ul>
      {divider}
      <h4 style={h4Style}>Known Limitations</h4>
      <p style={pStyle}>While we strive for full accessibility, some areas may not yet fully meet WCAG 2.1 AA standards. We are actively working to identify and address these areas.</p>
      {divider}
      <h4 style={h4Style}>Alternative Access</h4>
      <p style={pStyle}>If you are unable to access any content or functionality due to a disability, please contact us. We are happy to provide information in an alternative format or assist you in another way.</p>
      {divider}
      <h4 style={h4Style}>Feedback</h4>
      <p style={pStyle}>If you experience accessibility barriers on this site, please let us know. We take all feedback seriously and aim to respond within 2 business days.</p>
      {note(<><strong>Contact us:</strong> (000) 000-0000</>)}
    </>
  )
}
