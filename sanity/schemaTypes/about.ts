import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'About Abby',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Abby Moody, PMHNP-BC',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      initialValue: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: "I'm Abby Moody, a board-certified Psychiatric Mental Health Nurse Practitioner with a passion for personalized care. I specialize in pharmacogenomic testing — using your unique genetic profile to identify how your body metabolizes psychiatric medications.",
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Through tools like GeneSight testing, I work to take the guesswork out of psychiatric prescribing. Instead of a trial-and-error approach, we start with data — so you spend less time searching for the right medication and more time feeling like yourself.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: "I believe mental health care should feel collaborative, compassionate, and grounded. You're not just a diagnosis — you're a whole person, and your care should reflect that.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials / Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short credential bullets shown beneath the bio.',
      initialValue: [
        'PMHNP-BC — Board Certified Psychiatric Mental Health Nurse Practitioner',
        'Pharmacogenomics & GeneSight Testing Specialist',
        'Accepting new patients',
      ],
    }),
  ],
  preview: {
    select: { title: 'sectionTitle', media: 'photo' },
  },
})
