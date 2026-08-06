import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: '🖼 Gallery',
  type: 'document',

  fields: [
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
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'number',
      initialValue: 0,
      description: '0 = first image, 1 = second image...',
    }),

    defineField({
      name: 'images',
      title: 'Upload Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: 'category',
      media: 'images.0',
    },
  },
})
