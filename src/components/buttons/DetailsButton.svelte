<GioButton size="small" {dark} {href} noMarginRight>
  <span>Details</span>
  <GioIcon name="external-link-alt" />
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  export let href: string
  export let dark = false
</script>
