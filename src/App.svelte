<main>
	<GioTitle centered>Hello, world!</GioTitle>
	<GioText>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</GioText>
	<GioBodyText>Some body told <GioInlineCode>me there waaas an</GioInlineCode> empty street somewhere that I didn't want to jaaaaaaaam...</GioBodyText>
	<GioHeading level={1}>Yooo bros!</GioHeading>
	<GioHeading level={2}>Yooo bros!</GioHeading>
	<GioHeading level={3}>Yooo bros!</GioHeading>
	<GioHeading level={4}>Yooo bros!</GioHeading>
	<GioCaption>Click here for more!</GioCaption>
</main>

<script lang="ts">
	import {
		GioTitle,
		GioText,
		GioBodyText,
		GioHeading,
		GioCaption,
		GioInlineCode
	} from '@gabio/design-svelte'
</script>

<style lang="scss">
	@import '@gabio/design-svelte/src/styles/reset';

	:root {
		font-size: 16px; // for adjusting rem units
	}
</style>
