import { defineConfig, type DocumentActionsResolver } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemaTypes'

// Singleton document types — only one of each should ever exist
const singletonTypes = new Set(['siteSettings', 'hero', 'about', 'newPatientSteps'])

const singletonActions: DocumentActionsResolver = (input, context) => {
  if (!singletonTypes.has(context.schemaType)) return input
  return input.filter(({ action }) => !['duplicate', 'unpublish', 'delete'].includes(action ?? ''))
}

export default defineConfig({
  name: 'abby-moody-pmhnp',
  title: 'Abby Moody — Site Editor',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Hero Section')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('About Section')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('New Patient Steps')
              .id('newPatientSteps')
              .child(
                S.document().schemaType('newPatientSteps').documentId('newPatientSteps'),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: singletonActions,
  },
})
