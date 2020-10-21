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
            href={project.notReady ? '' : project.link}>
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
            href={project.notReady ? '' : project.link}
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
      <div class="home__projects">
        {#each articles as article}
          <GioCard
            title={article.title}
            tags={article.tags}
            desc={article.desc}
            href={articleLink(article.id)}>
            <div slot="image">
              {#if article.images}
                <GioImage
                  lazy
                  srcs={article.images}
                  desc={article.title}
                  objectFit={article.imageSize || 'cover'} />
              {/if}
            </div>
          </GioCard>
        {/each}
      </div>
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
  import GithubButton from '../components/buttons/GithubButton.svelte';
  import EmailButton from '../components/buttons/EmailButton.svelte';
  import LinkedInButton from '../components/buttons/LinkedInButton.svelte';
  import { intro } from '../data/intro'
  import { codingProjects } from '../data/coding'
  import { designProjects } from '../data/design'
  import { articles } from '../data/blog'
  import { contacts } from '../data/contacts'
  import { toSpaRoute } from '@gabio/design-svelte/lib/url'

  function articleLink(id: string): string {
    return toSpaRoute(`article/${id}`)
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
