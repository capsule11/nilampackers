import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,
    useCdn: false,
    apiVersion: '2025-02-06', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
    // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content, accessing drafts or using draft perspectives
})

const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}