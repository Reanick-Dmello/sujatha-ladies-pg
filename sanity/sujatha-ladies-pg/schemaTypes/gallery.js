import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: '🖼 Gallery',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Example: Deluxe Room',
    }),

    defineField({
      name: 'image',
      title: 'Gallery Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Rooms', value: 'Rooms'},
          {title: 'Food', value: 'Food'},
          {title: 'Amenities', value: 'Amenities'},
          {title: 'Exterior', value: 'Exterior'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      initialValue: false,
      description: 'Used as the large featured image.',
    }),

    defineField({
      name: 'showOnHomepage',
      title: 'Show on Homepage',
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
      title: 'title',
      subtitle: 'category',
      media: 'image',
      featured: 'featured',
    },

    prepare({title, subtitle, media, featured}) {
      return {
        title,
        subtitle: `${subtitle}${featured ? ' ⭐ Featured' : ''}`,
        media,
      }
    },
  },
})
