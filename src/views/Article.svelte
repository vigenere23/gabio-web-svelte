<TopBar dark>
  <div slot="left">
    <HomeButton />
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

<script lang="ts">
  import { replace } from 'svelte-spa-router'
  import TopBar from '../components/TopBar.svelte'
  import {
    GioSection,
    GioContent,
    GioButton,
    GioIcon
  } from '@gabio/design-svelte'
  import { onMount, SvelteComponent } from 'svelte'
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

  onMount(() => {
    const articleName = fromKebabCasetoPascalCase(params.id)
    const articleFile = articleFolder[articleName]

    if (!articleFile) {
      replace('/404')
      return
    }

    const articleMeta = articles.find((article) => article.id === params.id)
    repo = articleMeta && articleMeta.repo
    portfolio = articleMeta && articleMeta.portfolio
    article = articleFile
  })
</script>
