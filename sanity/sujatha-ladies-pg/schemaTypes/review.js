import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'review',
  title: '⭐ Reviews',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
      options: {
        list: [
          {title: 'Student', value: 'Student'},
          {title: 'Working Professional', value: 'Working Professional'},
          {title: 'Software Engineer', value: 'Software Engineer'},
          {title: 'Teacher', value: 'Teacher'},
          {title: 'Other', value: 'Other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
        layout: 'radio',
      },
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),

    defineField({
      name: 'review',
      title: 'Review',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'photo',
      title: 'Customer Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],

  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrder',
      by: [
        {
          field: 'displayOrder',
          direction: 'asc',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'profession',
      media: 'photo',
      rating: 'rating',
    },

    prepare({title, subtitle, media, rating}) {
      const stars = '⭐'.repeat(rating || 0)

      return {
        title,
        subtitle: `${subtitle} • ${stars}`,
        media,
      }
    },
  },
})
