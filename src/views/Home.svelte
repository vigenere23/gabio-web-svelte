<div class="home">
  <GioSection id="intro" dark>
    <GioContent>
      <GioTitle dark centered>{intro.title}</GioTitle>
      <GioSubtitle dark centered>{intro.subtitle}</GioSubtitle>
    </GioContent>
  </GioSection>

  <GioSection id="coding">
    <GioContent maxWidth="1100px">
      <GioTitle centered>Coding projects</GioTitle>
      <div class="home__projects">
        {#each codingProjects as project}
          <GioCard
            title={project.title}
            tags={project.tags}
            desc={project.desc}
            href={project.notReady ? project.repo : articleLink(project.id)}>
            <div slot="image">
              {#if project.images}
                <GioImage
                  lazy
                  srcs={project.images}
                  desc={project.title}
                  objectFit={project.imageSize || 'cover'} />
                {:else}
                  <video
                  class="home__video"
                  src={project.video}
                  loop
                  muted
                  autoplay
                ></video>
              {/if}
            </div>
            <div slot="actions">
              <DetailsButton dark href={project.notReady ? project.repo : articleLink(project.id)} />
            </div>
          </GioCard>
        {/each}
      </div>

      <GioSubtitle centered>Want to see more? Here are some places to explore!</GioSubtitle>
      <div class="home__links">
        <GithubButton dark />
      </div>
    </GioContent>
  </GioSection>

  <GioSection dark id="design">
    <GioContent maxWidth="1100px">
      <GioTitle dark centered>Design projects</GioTitle>
      <div class="home__projects">
        {#each designProjects as project}
          <GioCard
            dark
            title={project.title}
            tags={project.tags}
            desc={project.desc}
            href={articleLink(project.id)}
            notReady={project.notReady}>
            <div slot="image">
              {#if project.images}
                <GioImage
                  lazy
                  srcs={project.images}
                  desc={project.title}
                  objectFit={project.imageSize || 'cover'} />
                {:else}
                  <video
                  class="home__video"
                  src={project.video}
                  loop
                  muted
                  autoplay
                ></video>
              {/if}
            </div>
            <div slot="actions">
              <DetailsButton href={articleLink(project.id)} />
            </div>
          </GioCard>
        {/each}
      </div>

      <GioSubtitle dark centered>Want to see more? Here are some places to explore!</GioSubtitle>
      <div class="home__links">
        <BehanceButton />
      </div>
    </GioContent>
  </GioSection>

  <GioSection id="blog">
    <GioContent>
      <GioTitle centered>Blog</GioTitle>
      <GioSubtitle centered>Coming soon!</GioSubtitle>
    </GioContent>
  </GioSection>

  <GioSection dark id="contact">
    <GioContent>
      <GioTitle dark centered>Contact</GioTitle>
      <GioSubtitle dark centered>{contacts.subtitle}</GioSubtitle>
      <div class="home__links">
        <EmailButton />
        <LinkedInButton />
      </div>
    </GioContent>
  </GioSection>
</div>

<script lang="ts">
  import {
    GioSection,
    GioContent,
    GioTitle,
    GioSubtitle,
    GioCard,
    GioImage
  } from '@gabio/design-svelte'
  import BehanceButton from '../components/buttons/BehanceButton.svelte';
  import DetailsButton from '../components/buttons/DetailsButton.svelte'
  import GithubButton from '../components/buttons/GithubButton.svelte';
  import EmailButton from '../components/buttons/EmailButton.svelte';
  import LinkedInButton from '../components/buttons/LinkedInButton.svelte';
  import { intro } from '../data/intro'
  import { projects } from '../data/projects'
  import { contacts } from '../data/contacts'

  $: codingProjects = projects.filter(project => project.categories.includes('coding'))
  $: designProjects = projects.filter(project => project.categories.includes('design'))

  function articleLink(id: string): string {
    return `#/article/${id}`
  }
</script>

<style lang="scss">
  .home {
    &__projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    &__links {
      margin: 32px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    :global(&__links > *) {
      margin: 0 16px;
    }

    &__video {
      object-fit: cover;
    }
  }
</style>
