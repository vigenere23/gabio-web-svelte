export type Project = {
  title: string
  tags: string[]
  desc: string
  link: string
  images?: string[]
  video?: string
  imageSize?: 'cover' | 'contain'
}
