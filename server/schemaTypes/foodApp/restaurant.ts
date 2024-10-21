import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
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
      name: 'image',
      title: 'Image for Dish',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    },
    {
      name: 'lng',
      title: 'Longitude of Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'rating',
      title: 'Enter a number between 1 and 5',
      type: 'number',
      validation(rule) {
        return rule.required().min(1).max(5).error('Please enter a number between 1 and 5')
      },
    },
    {
      name: 'review',
      title: 'Reviws',
      type: 'string',
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
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation(rule) {
        return rule.required()
      },
    },
  ],
})
