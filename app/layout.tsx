import type { Metadata } from 'next'
import { Crimson_Pro } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Abby Moody, PMHNP-BC | Psychiatric Mental Health Nurse Practitioner',
  description:
    'Personalized psychiatric care guided by pharmacogenomic testing. Abby Moody, PMHNP-BC specializes in genetic-informed medication management for mental health.',
  openGraph: {
    title: 'Abby Moody, PMHNP-BC',
    description: 'Personalized psychiatric care rooted in science and compassion.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={crimsonPro.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=garet@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
