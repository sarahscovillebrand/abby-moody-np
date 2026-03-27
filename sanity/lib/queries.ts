import { groq } from 'next-sanity'
import { client } from './client'

// ─── Queries ────────────────────────────────────────────────────────────────

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  practiceName,
  tagline,
  faxNumber,
  phoneNumber,
  spruceLink,
  accentColor
}`

const heroQuery = groq`*[_type == "hero"][0]{
  heading,
  subheading,
  ctaLabel,
  backgroundImage{ asset->{ url }, hotspot, crop }
}`

const aboutQuery = groq`*[_type == "about"][0]{
  sectionTitle,
  photo{ asset->{ url }, hotspot, crop, alt },
  bio,
  credentials
}`

const newPatientStepsQuery = groq`*[_type == "newPatientSteps"][0]{
  sectionTitle,
  sectionIntro,
  faxNote,
  spruceNote,
  spruceButtonLabel,
  steps[]{
    title,
    description,
    downloadLabel,
    downloadFile{ asset->{ url, originalFilename } }
  }
}`

// ─── Fetchers ────────────────────────────────────────────────────────────────

export async function getSiteSettings() {
  if (!client) return null
  return client.fetch(siteSettingsQuery, {}, { next: { tags: ['siteSettings'] } })
}

export async function getHero() {
  if (!client) return null
  return client.fetch(heroQuery, {}, { next: { tags: ['hero'] } })
}

export async function getAbout() {
  if (!client) return null
  return client.fetch(aboutQuery, {}, { next: { tags: ['about'] } })
}

export async function getNewPatientSteps() {
  if (!client) return null
  return client.fetch(newPatientStepsQuery, {}, { next: { tags: ['newPatientSteps'] } })
}

export async function getAllPageData() {
  if (!client) return null
  const [settings, hero, about, steps] = await Promise.all([
    getSiteSettings(),
    getHero(),
    getAbout(),
    getNewPatientSteps(),
  ])
  return { settings, hero, about, steps }
}
