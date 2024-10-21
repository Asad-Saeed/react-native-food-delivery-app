import {defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'string',
      validation(rule) {
        return rule.required().max(200)
      },
    },
    {
      name: 'image',
      title: 'Image for Category',
      type: 'image',
    },
  ],
})
