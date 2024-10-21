import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'dish',
      title: 'Dishes Name',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation(rule) {
        return rule.required().max(200)
      },
    },
    {
      name: 'price',
      title: 'Price for Dish in USD',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image for Dish',
      type: 'image',
    },
  ],
})
