import type { Article } from '../types/Article'

export const articles: Article[] = [
  {
    title: "What launchd doesn't tell you",
    tags: ['mac OS', 'bash'],
    desc: 'A few tips to help you get started with this MacOS tool.',
    id: 'launchd',
    repo: 'https://github.com/vigenere23/unsplash',
    images: ['https://images.unsplash.com/photo-1560574188-6a6774965120?w=400']
  },
  {
    title: 'gab.io personal branding',
    tags: ['branding', 'design'],
    desc: 'The ideas and prototypes behind the project.',
    id: 'gab-io',
    repo: 'https://github.com/vigenere23/gabio-web-svelte',
    portfolio: 'https://www.behance.net/gallery/95727733/gabio-branding',
    images: ['images/projects/gab-io_thumb.webp', 'images/projects/gab-io.png']
  }
]
