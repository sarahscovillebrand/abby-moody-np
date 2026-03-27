import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Abby Moody, PMHNP-BC',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      initialValue:
        'Psychiatric care guided by your genetics. Because the right medication should work with your body — not against it.',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Button Label',
      type: 'string',
      initialValue: 'Become a Patient',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image (optional)',
      type: 'image',
      description: 'Optional soft background image. Leave blank for the default sage gradient.',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
})
