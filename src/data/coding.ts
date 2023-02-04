import type { Project } from '../types/Project'

export const codingProjects: Project[] = [
  {
    title: 'Disma',
    tags: ['cli', 'library', 'Rust'],
    desc: "Manage your Discord server's roles and channels by applying large scale changes using a simple configuration file.",
    link: 'https://vigenere23.github.io/disma',
    images: [
      'https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
    ]
  },
  {
    title: 'ModuPipe',
    tags: ['library', 'pipeline', 'Rust'],
    desc: 'A small library offering well-designed interfaces and implementations for easily building ETL-like pipelines.',
    link: 'https://github.com/vigenere23/modupipe-rs',
    images: [
      'https://images.unsplash.com/photo-1586057285471-2f78bffaf074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80'
    ]
  },
  {
    title: 'Unsplash CLI',
    tags: ['cli', 'bash', 'unix'],
    desc: 'A simple CLI tool and daemon to download and set Unsplash images as wallpapers, for both Mac and Linux.',
    link: 'https://github.com/vigenere23/unsplash',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  },
  {
    title: 'EMG data pipeline',
    tags: ['concurrency', 'realtime'],
    desc: 'Ultra fast, modular and flexible multiprocess data acquisition pipeline for realtime finger predictions from EMG.',
    link: 'https://github.com/vigenere23/finger-angles-predictions-EMG',
    images: [
      'images/projects/biomed_thumb.webp',
      'images/projects/biomed.webp',
      'images/projects/biomed.png'
    ]
  },
  // {
  //   title: 'R Docker template',
  //   tags: ['R', 'docker', 'template'],
  //   desc:
  //     'A minimal template for using R with renv inside a Docker image with cache volume, graphics and language server.',
  //   link: 'https://github.com/vigenere23/R-docker-template',
  //   images: [
  //     'images/projects/docker_thumb.webp',
  //     'images/projects/docker.webp',
  //     'images/projects/docker.png'
  //   ]
  // },
  {
    title: 'SPAMDUL',
    tags: ['api', 'ddd', 'architecture'],
    desc: 'A complex API in DDD built around clean architecture, aggregates, vertical slicing and SOLID+T principles.',
    link: 'https://github.com/vigenere23/spamdul',
    images: [
      'images/projects/spamdul_thumb.webp',
      'images/projects/spamdul.png'
    ]
  },
  {
    title: 'gab.io',
    tags: ['library', 'web'],
    desc: 'A Frontend ecosystem for building web apps, from killer design libraries to automated tools and best practices.',
    link: 'https://github.com/vigenere23/gabio-design-svelte',
    images: ['images/projects/gab-io_thumb.webp', 'images/projects/gab-io.png']
  },
  {
    title: 'PSAR',
    tags: ['robot', 'fullstack', 'real-time'],
    desc: 'Small robot with artificial intelligence and vision with object detection, pathfinding and real-time communication.',
    link: 'https://github.com/vigenere23/psar',
    video: 'images/projects/psar.mp4'
  },
  // {
  //   title: 'uBeat',
  //   tags: ['frontend', 'auth', 'api'],
  //   desc:
  //     "Search, save and play any song from iTunes in a clean and modern interface, linked to Spotify's artists API.",
  //   link: 'https://github.com/vigenere23/ubeat',
  //   images: ['images/projects/ubeat_thumb.webp', 'images/projects/ubeat.png']
  // },
  {
    title: 'Glow4002 festival',
    tags: ['api', 'ddd', 'architecture'],
    desc: 'Backend domain-driven design with clean architecture in a TDD approach and SOLID principles.',
    link: 'https://github.com/vigenere23/glow4002',
    images: [
      'images/projects/glow4002_thumb.webp',
      'images/projects/glow4002.png'
    ]
  },
  {
    title: 'Cooky',
    tags: ['fullstack', 'data', 'docker'],
    desc: 'Create, share and manage recipes in a beautiful UI, containerised with Docker and with a homemade micro-ORM.',
    link: 'https://github.com/vigenere23/cooky',
    images: ['images/projects/cooky_thumb.webp', 'images/projects/cooky.png'],
    imageSize: 'contain'
  }
  // {
  //   title: 'VirtuBois',
  //   tags: ['graphical', 'java', 'MVC'],
  //   desc:
  //     "Java sotware implementing Larman's architecture using JavaFX and GRASP principles to manage a 2D wood yard.",
  //   link: 'https://github.com/vigenere23/virtubois',
  //   images: [
  //     'images/projects/virtubois_thumb.webp',
  //     'images/projects/virtubois.png'
  //   ]
  // },
  // {
  //   title: 'Lost in space',
  //   tags: ['fullstack', 'game', 'python'],
  //   desc:
  //     'Python space ship game project with physics using Pyglet and a socket server for multiplayer gameplay.',
  //   link: 'https://github.com/vigenere23/lost-in-space',
  //   images: [
  //     'images/projects/lost-in-space_thumb.webp',
  //     'images/projects/lost-in-space.png'
  //   ]
  // },
  // {
  //   title: 'Memento',
  //   tags: ['fullstack', 'database', 'rails'],
  //   desc:
  //     'Server-side Ruby on rails app for sharing small memories and thoughts to the world, made in a single week while learning.',
  //   link: 'https://github.com/vigenere23/memento',
  //   images: [
  //     'images/projects/memento_thumb.webp',
  //     'images/projects/memento.png'
  //   ]
  // }
]
