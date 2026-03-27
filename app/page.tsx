import CrisisBanner     from '@/components/CrisisBanner'
import Nav              from '@/components/Nav'
import Hero             from '@/components/Hero'
import Bridge           from '@/components/Bridge'
import Pillars          from '@/components/Pillars'
import About            from '@/components/About'
import Testimonial      from '@/components/Testimonial'
import NewPatientSteps  from '@/components/NewPatientSteps'
import Footer           from '@/components/Footer'
import { getAllPageData } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function Home() {
  let data: Awaited<ReturnType<typeof getAllPageData>> | null = null

  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
      data = await getAllPageData()
    }
  } catch {
    // fall back to hardcoded defaults
  }

  const settings = data?.settings
  const hero     = data?.hero
  const about    = data?.about
  const steps    = data?.steps

  return (
    <>
      <CrisisBanner />
      <Nav practiceName={settings?.practiceName} />
      <main>
        <Hero data={hero} />
        <Bridge />
        <Pillars />
        <About data={about} />
        <NewPatientSteps
          data={steps}
          faxNumber={settings?.faxNumber}
          spruceLink={settings?.spruceLink}
          phoneNumber={settings?.phoneNumber}
        />
        <Testimonial />
      </main>
      <Footer
        practiceName={settings?.practiceName}
        tagline={settings?.tagline}
        faxNumber={settings?.faxNumber}
        phoneNumber={settings?.phoneNumber}
        spruceLink={settings?.spruceLink}
      />
    </>
  )
}
