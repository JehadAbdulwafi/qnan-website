import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

function urlFor(source: string) {
  return builder.image(source)
}

export { urlFor }
