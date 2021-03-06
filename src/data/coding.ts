import type { Project } from '../types/Project'

export const codingProjects: Project[] = [
  {
    title: 'SPAMDUL',
    tags: ['ddd', 'api', 'architecture'],
    desc:
      'A complex API in DDD built around clean architecture, aggregates, vertical slicing and SOLID+T principles.',
    link: 'https://github.com/vigenere23/spamdul',
    images: [
      'images/projects/spamdul_thumb.webp',
      'images/projects/spamdul.png'
    ]
  },
  {
    title: 'gab.io',
    tags: ['web', 'library'],
    desc:
      'A Frontend ecosystem for building web apps, from killer design libraries to automated tools and best practices.',
    link: 'https://github.com/vigenere23/gabio-design-svelte',
    images: ['images/projects/gab-io_thumb.webp', 'images/projects/gab-io.png']
  },
  {
    title: 'PSAR',
    tags: ['robot', 'fullstack', 'real-time'],
    desc:
      'Small robot with artificial intelligence and vision with object detection, pathfinding and real-time communication.',
    link: 'https://github.com/vigenere23/psar',
    video: 'images/projects/psar.mp4'
  },
  {
    title: 'uBeat',
    tags: ['frontend', 'auth', 'api'],
    desc:
      "Search, save and play any song from iTunes in a clean and modern interface, linked to Spotify's artists API.",
    link: 'https://github.com/vigenere23/ubeat',
    images: ['images/projects/ubeat_thumb.webp', 'images/projects/ubeat.png']
  },
  {
    title: 'Glow4002 festival',
    tags: ['ddd', 'backend', 'api', 'tests'],
    desc:
      'Backend domain-driven design with clean architecture in a test-driven-development approach and SOLID principles.',
    link: 'https://github.com/vigenere23/glow4002',
    images: [
      'images/projects/glow4002_thumb.webp',
      'images/projects/glow4002.png'
    ]
  },
  {
    title: 'Cooky',
    tags: ['fullstack', 'data', 'docker'],
    desc:
      'Create, share and manage recipes in a beautiful UI, containerised with Docker and with a homemade micro-ORM.',
    link: 'https://github.com/vigenere23/cooky',
    images: ['images/projects/cooky_thumb.webp', 'images/projects/cooky.png'],
    imageSize: 'contain'
  },
  {
    title: 'VirtuBois',
    tags: ['graphical', 'java', 'MVC'],
    desc:
      "Java sotware implementing Larman's architecture using JavaFX and GRASP principles to manage a 2D wood yard.",
    link: 'https://github.com/vigenere23/virtubois',
    images: [
      'images/projects/virtubois_thumb.webp',
      'images/projects/virtubois.png'
    ]
  },
  {
    title: 'Lost in space',
    tags: ['fullstack', 'game', 'python'],
    desc:
      'Python space ship game project with physics using Pyglet and a socket server for multiplayer gameplay.',
    link: 'https://github.com/vigenere23/lost-in-space',
    images: [
      'images/projects/lost-in-space_thumb.webp',
      'images/projects/lost-in-space.png'
    ]
  },
  {
    title: 'Memento',
    tags: ['fullstack', 'database', 'rails'],
    desc:
      'Server-side Ruby on rails app for sharing small memories and thoughts to the world, made in a single week while learning.',
    link: 'https://github.com/vigenere23/memento',
    images: [
      'images/projects/memento_thumb.webp',
      'images/projects/memento.png'
    ]
  }
]
