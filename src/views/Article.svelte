<DefaultLayout>
  <TopBar dark>
    <div slot="left">
      <HomeButton noMarginLeft />
    </div>
    <div slot="right">
      {#if repo}
        <GioButton href={repo}>
          <GioIcon name="code" />
          <span>Source</span>
        </GioButton>
      {/if}
      {#if portfolio}
        <GioButton href={portfolio} noMarginRight>
          <GioIcon name="paint-brush" />
          <span>Portfolio</span>
        </GioButton>
      {/if}
    </div>
  </TopBar>
  <GioSection>
    <GioContent maxWidth="750px">
      <svelte:component this={article} />
    </GioContent>
  </GioSection>
</DefaultLayout>

<script lang="ts">
  import { replace } from 'svelte-spa-router'
  import DefaultLayout from '../layouts/DefaultLayout.svelte'
  import TopBar from '../components/TopBar.svelte'
  import {
    GioSection,
    GioContent,
    GioButton,
    GioIcon
  } from '@gabio/design-svelte'
  import { afterUpdate, SvelteComponent } from 'svelte'
  import { fromKebabCasetoPascalCase } from '@gabio/design-svelte/lib/strings'
  import * as articleFolder from '../data/articles'
  import HomeButton from '../components/buttons/HomeButton.svelte'
  import { articles } from '../data/blog'

  interface Params {
    id?: string
  }

  let article: SvelteComponent
  let repo: string = undefined
  let portfolio: string = undefined

  export let params: Params = {}

  afterUpdate(() => {
    const articleName = fromKebabCasetoPascalCase(params.id)
    const articleFile = articleFolder[articleName]
    const articleMeta = articles.find((article) => article.id === params.id)

    if (!articleFile || !articleMeta) {
      replace('/404')
      return
    }

    repo = articleMeta.repo
    portfolio = articleMeta.portfolio
    article = articleFile
  })
</script>
