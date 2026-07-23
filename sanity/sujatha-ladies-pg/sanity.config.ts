import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemaTypes'

import {singletonPlugin, structure} from './schemaTypes/plugins/singletonPlugin'

export default defineConfig({
  name: 'default',

  title: 'Sujatha Ladies PG',

  projectId: 'skoz7mue',

  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),

    singletonPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})
