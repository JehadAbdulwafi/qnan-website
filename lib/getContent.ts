
type Content = Array<{
  children?: Array<{
    marks?: Array<string>
    text?: string
    _type: 'span'
    _key: string
  }>
  style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
  listItem?: 'bullet' | 'number'
  markDefs?: Array<{
    href?: string
    _type: 'link'
    _key: string
  }>
  level?: number
  _type: 'block'
  _key: string
}>

function getContent(content: { en?: Content; ar?: Content }, activeLang: string) {
  const title = activeLang === 'en' ? content.en : content.ar;
  return title || content.en || content.ar;
}

export { getContent };
