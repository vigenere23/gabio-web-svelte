<GioButton {dark} href={href}>
  <GioIcon name="envelope" />
  <span>Email</span>
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  const href = 'mailto:gab.stpierre23@gmail.com'
  
  export let dark: boolean = false
</script>
