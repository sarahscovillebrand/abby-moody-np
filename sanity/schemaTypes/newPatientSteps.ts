import { defineField, defineType } from 'sanity'

export const newPatientSteps = defineType({
  name: 'newPatientSteps',
  title: 'New Patient Steps',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Becoming a New Patient',
    }),
    defineField({
      name: 'sectionIntro',
      title: 'Section Intro',
      type: 'text',
      rows: 2,
      initialValue:
        "We're glad you're here. Follow the steps below to get started — the process is straightforward and we'll be with you every step of the way.",
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'downloadFile',
              title: 'Downloadable Form (PDF)',
              type: 'file',
              options: { accept: '.pdf' },
              description: 'Optional: attach a fillable PDF form for patients to download.',
            }),
            defineField({
              name: 'downloadLabel',
              title: 'Download Button Label',
              type: 'string',
              initialValue: 'Download Forms',
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      initialValue: [
        {
          _type: 'step',
          title: 'Download Your New Patient Forms',
          description:
            'Click the button below to download your new patient intake paperwork. Print and complete all forms before submission.',
          downloadLabel: 'Download Forms',
        },
        {
          _type: 'step',
          title: 'Submit Your Completed Forms',
          description:
            'Once your forms are complete, you can submit them in one of two ways: fax your paperwork directly to our office, or securely upload them through the Spruce Communications app.',
        },
        {
          _type: 'step',
          title: "We'll Be in Touch",
          description:
            "After we receive your paperwork, a member of our team will reach out to schedule your first appointment. We look forward to meeting you.",
        },
      ],
    }),
    defineField({
      name: 'faxNote',
      title: 'Fax Instruction Note',
      type: 'string',
      initialValue: 'Prefer to fax? Send your completed forms to:',
    }),
    defineField({
      name: 'spruceNote',
      title: 'Spruce Instruction Note',
      type: 'string',
      initialValue: 'Or upload securely via the Spruce Communications app:',
    }),
    defineField({
      name: 'spruceButtonLabel',
      title: 'Spruce Button Label',
      type: 'string',
      initialValue: 'Open Spruce App',
    }),
  ],
  preview: {
    select: { title: 'sectionTitle' },
  },
})
