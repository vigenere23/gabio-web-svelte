<GioButton {dark} {href}>
  <GioIcon name="linkedin-in" />
  <span>LinkedIn</span>
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  const href = 'https://linkedin.com/in/gab-io'

  export let dark: boolean = false
</script>
