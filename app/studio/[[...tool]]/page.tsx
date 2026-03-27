import type { Metadata, Viewport } from 'next'
import StudioClient from './StudioClient'

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Site Editor — Abby Moody',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function StudioPage() {
  return <StudioClient />
}
