<GioButton {dark} {href}>
  <GioIcon name="behance" />
  <span>Behance</span>
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  const href = 'https://behance.net/gab-io'

  export let dark: boolean = false
</script>
