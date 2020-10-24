<GioButton {dark} {href}>
  <GioIcon name="github" />
  <span>Github</span>
</GioButton>

<script lang="ts">
  import { GioButton, GioIcon } from '@gabio/design-svelte'

  const href = 'https://github.com/vigenere23'

  export let dark: boolean = false
</script>
