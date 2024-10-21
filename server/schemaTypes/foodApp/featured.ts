import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'description',
      title: 'Restaurant Description',
      type: 'string',
      validation(rule) {
        return rule.required().max(200)
      },
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
