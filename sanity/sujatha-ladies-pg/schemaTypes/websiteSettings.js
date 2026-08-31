import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'websiteSettings',
  title: '🏡 Manage Website',
  type: 'document',

  groups: [
    {
      name: 'home',
      title: '🏠 Home',
      default: true,
    },
    {
      name: 'about',
      title: '👩 About',
    },
    {
      name: 'contact',
      title: '📞 Contact',
    },
    {
      name: 'branding',
      title: '🎨 Branding',
    },
    {
      name: 'footer',
      title: '🦶 Footer',
    },
    {
      name: 'seo',
      title: '🌍 SEO',
    },
  ],

  fields: [
    // ---------------- HOME ----------------

    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'home',
      options: {
        hotspot: true,
      },
      description: 'Upload the main hero image.',
    }),

    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'home',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
      group: 'home',
    }),

    // ---------------- ABOUT ----------------

    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      group: 'about',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      group: 'about',
    }),

    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      rows: 6,
      group: 'about',
    }),

    // ---------------- CONTACT ----------------

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.email(),
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      group: 'contact',
    }),

    defineField({
      name: 'googleMaps',
      title: 'Google Maps Location',
      type: 'url',
      group: 'contact',
      description: 'Paste the Google Maps location link here.',
    }),

    // ---------------- BRANDING ----------------

    defineField({
      name: 'logo',
      title: 'Website Logo',
      type: 'image',
      group: 'branding',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'branding',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: '🏡 Manage Website',
      }
    },
  },
})
