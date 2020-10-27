<Router
  {routes}
  on:routeLoaded={routeLoaded}
  on:conditionsFailed={conditionsFailed}
  restoreScrollState />

<script lang="ts">
  import Router, { replace } from 'svelte-spa-router'
  import { routes } from './routes'

  function routeLoaded(event: any) {
    const elementId = event.detail.location.split('#')[1]

    if (elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        setTimeout(() => element.scrollIntoView(true), 300)
      }
    }
  }

  function conditionsFailed() {
    replace('/404')
  }
</script>

<style lang="scss" global>
  @import '@gabio/design-svelte/src/styles/reset';
  @import '@gabio/design-svelte/src/styles/code-themes/one-dark-prism';
</style>
