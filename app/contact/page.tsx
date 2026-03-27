'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    currentProvider: '',
    reason: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
    fontSize: '0.95rem',
    color: '#2F4A3A',
    background: '#FAFAF8',
    border: '1px solid #D8DAD4',
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontFamily: 'Garet, DM Sans, system-ui, sans-serif',
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#7E9480',
    fontWeight: 500,
    display: 'block',
    marginBottom: '0.4rem',
  }

  if (status === 'success') {
    return (
      <>
        <Nav />
        <main style={{ background: '#EEF0E8', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <div style={{ width: '48px', height: '1px', background: '#6A8B68', margin: '0 auto 2rem' }} />
            <h1 style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 300, color: '#2F4A3A', marginBottom: '1rem' }}>
              Message received.
            </h1>
            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.1rem', color: '#526055', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Thank you for reaching out. Someone from our team will be in touch with you shortly.
            </p>
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Nav />
      <main style={{ background: '#EEF0E8', minHeight: '100vh', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6A8B68', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '28px', height: '1px', background: '#6A8B68' }} />
              Get in Touch
            </div>
            <h1 style={{ fontFamily: 'var(--font-crimson), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#2F4A3A', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Send us a message.
            </h1>
            <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '1.05rem', color: '#526055', lineHeight: 1.8 }}>
              Fill out the form below and someone from our team will reach out to you shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Name row */}
            <div className="grid sm:grid-cols-2" style={{ gap: '1rem' }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Jane"
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Phone + Email row */}
            <div className="grid sm:grid-cols-2" style={{ gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="(913) 000-0000"
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="jane@email.com"
                />
              </div>
            </div>

            {/* Current provider */}
            <div>
              <label style={labelStyle}>Are you currently seeing a mental health provider?</label>
              <select
                name="currentProvider"
                required
                value={form.currentProvider}
                onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237E9490' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', cursor: 'pointer' }}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="previously">Not currently, but I have in the past</option>
              </select>
            </div>

            {/* Reason */}
            <div>
              <label style={labelStyle}>What brings you in?</label>
              <textarea
                name="reason"
                required
                value={form.reason}
                onChange={handleChange}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Share a little about what you're hoping to address or any questions you have for us."
              />
            </div>

            {/* Submit */}
            <div style={{ paddingTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ opacity: status === 'sending' ? 0.6 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p style={{ fontFamily: 'Garet, DM Sans, system-ui, sans-serif', fontSize: '0.85rem', color: '#B07A5F', marginTop: '0.75rem' }}>
                  Something went wrong. Please try again or call us directly at (913) 586-9939.
                </p>
              )}
            </div>

          </form>
        </div>
      </main>
    </>
  )
}
