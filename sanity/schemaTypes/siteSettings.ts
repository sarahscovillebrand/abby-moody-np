import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'practiceName',
      title: 'Practice Name',
      type: 'string',
      initialValue: 'Abby Moody, PMHNP-BC',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline shown in the footer and meta description.',
      initialValue: 'Personalized psychiatric care rooted in science and compassion.',
    }),
    defineField({
      name: 'faxNumber',
      title: 'Fax Number',
      type: 'string',
      initialValue: '(000) 000-0000',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'spruceLink',
      title: 'Spruce App Link',
      type: 'url',
      description: 'Link to your Spruce Communications patient portal.',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Primary accent color in hex (e.g. #52796f). Default is sage green.',
      initialValue: '#52796f',
      validation: (Rule) =>
        Rule.regex(/^#([0-9a-fA-F]{3}){1,2}$/, {
          name: 'hex color',
          invert: false,
        }).warning('Enter a valid hex color like #52796f'),
    }),
  ],
  preview: {
    select: { title: 'practiceName' },
  },
})
