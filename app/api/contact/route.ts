import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL   = 'abbymoodynp@gmail.com'
const FROM_EMAIL = 'onboarding@resend.dev' // replace with your verified domain once set up

export async function POST(req: NextRequest) {
  const { firstName, lastName, phone, email, currentProvider, reason } = await req.json()

  const providerLabels: Record<string, string> = {
    yes: 'Yes',
    no: 'No',
    previously: 'Not currently, but has in the past',
  }

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2F4A3A;">
      <h2 style="font-size: 1.5rem; font-weight: 300; border-bottom: 1px solid #DCE4D8; padding-bottom: 1rem; margin-bottom: 1.5rem;">
        New Patient Inquiry
      </h2>
      <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 0.9rem;">
        <tr><td style="padding: 0.5rem 0; color: #7E9480; width: 40%;">Name</td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="padding: 0.5rem 0; color: #7E9480;">Phone</td><td>${phone}</td></tr>
        <tr><td style="padding: 0.5rem 0; color: #7E9480;">Email</td><td>${email}</td></tr>
        <tr><td style="padding: 0.5rem 0; color: #7E9480;">Currently seeing a provider</td><td>${providerLabels[currentProvider] ?? currentProvider}</td></tr>
        <tr><td style="padding: 0.5rem 0; color: #7E9480; vertical-align: top;">What brings them in</td><td style="padding: 0.5rem 0;">${reason}</td></tr>
      </table>
    </div>
  `

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Patient Inquiry — ${firstName} ${lastName}`,
      html,
      reply_to: email,
    }),
  })

  if (!res.ok) {
    const error = await res.text()
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
