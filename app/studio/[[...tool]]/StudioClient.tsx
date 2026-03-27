'use client'

import dynamic from 'next/dynamic'

const SanityStudio = dynamic(() => import('@/components/SanityStudio'), { ssr: false })

export default function StudioClient() {
  return <SanityStudio />
}
