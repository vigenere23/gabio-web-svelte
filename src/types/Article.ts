export type Article = {
  title: string
  tags: string[]
  desc: string
  id: string
  repo?: string
  portfolio?: string
  images?: string[]
  video?: string
  imageSize?: 'cover' | 'contain'
}
