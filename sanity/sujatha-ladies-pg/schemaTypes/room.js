import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'room',
  title: '🛏 Rooms',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Room Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Example: ₹8,000 / Month',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'images',
      title: 'Room Images',
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
      name: 'features',
      title: 'Room Features',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
      description: 'Example: WiFi, Wardrobe, Study Table',
    }),

    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'featured',
      title: 'Featured Room',
      type: 'boolean',
      initialValue: false,
      description: 'Only one room should be featured.',
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
      name: 'displayOrderAsc',
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
      subtitle: 'price',
      media: 'images.0',
      available: 'available',
    },

    prepare({title, subtitle, media, available}) {
      return {
        title,
        subtitle: `${subtitle} • ${available ? '🟢 Available' : '🔴 Full'}`,
        media,
      }
    },
  },
})
