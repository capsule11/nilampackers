import { defineField, defineType } from 'sanity'

export const pageImagesType = defineType({
    name: 'page_images',
    title: 'Page Images',
    type: 'document',
    fields: [
        defineField({
            name: 'page_name',
            type: 'string'
        }),
        defineField({
            name: 'category_name',
            type: 'string',
        }),
        defineField({
            name: "images",
            type: "array",
            of: [{ type: 'image' }]

        })
    ],
})