import {StructureResolver} from 'sanity/structure'
import {definePlugin} from 'sanity'

export const singletonTypes = new Set(['websiteSettings'])

export const singletonPlugin = definePlugin({
  name: 'singletonPlugin',

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((template) => !singletonTypes.has(template.templateId))
      }

      return prev
    },

    actions: (prev, {schemaType}) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(({action}) => action !== 'duplicate' && action !== 'delete')
      }

      return prev
    },
  },
})

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('🏡 Manage Website')
        .child(S.document().schemaType('websiteSettings').documentId('websiteSettings')),

      ...S.documentTypeListItems().filter((item) => item.getId() !== 'websiteSettings'),
    ])
