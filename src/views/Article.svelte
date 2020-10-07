<TopBar dark>
  <div slot="left">
    <HomeButton />
  </div>
  <div slot="right">
    {#if repo}
    <GioButton href={repo}>
      <GioIcon name="code"></GioIcon>
      <span>Source</span>
    </GioButton>
    {/if}
    {#if portfolio}
    <GioButton href={portfolio} noMarginRight>
      <GioIcon name="paint-brush"></GioIcon>
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
  import { onMount, SvelteComponent } from 'svelte';
  import { projects } from '../data/projects'
  import { fromKebabCasetoPascalCase } from '@gabio/design-svelte/src/utils/strings'
  import * as articleFolder from '../data/articles'
  import HomeButton from '../components/buttons/HomeButton.svelte';

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
      replace('404')
      return
    }

    const project = projects.find(project => project.id === params.id)
    repo = project && project.repo
    portfolio = project && project.portfolio
    article = articleFile
  })
</script>
