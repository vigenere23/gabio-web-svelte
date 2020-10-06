<main>
	<GioWebPage headerHeight="0px">
		<GioSection {dark}>
			<GioContent>
				<GioTitle {dark} centered>Hello, world!</GioTitle>
				<GioSubtitle {dark}>Como estas?</GioSubtitle>
				<GioText {dark}>Visit the <GioSmartLink href="https://svelte.dev/tutorial">Svelte tutorial</GioSmartLink> to <GioTag {dark}>learn</GioTag><GioTag {dark}>learn</GioTag> how to build Svelte apps.</GioText>
				<GioBodyText {dark}>Some body told <GioInlineCode {dark}>me there waaas an</GioInlineCode> empty street somewhere that I didn't want to jaaaaaaaam...</GioBodyText>
				<GioCaption {dark}>Click here for more!</GioCaption>
				<GioHeading {dark} level={1}>Yooo bros!</GioHeading>
				<GioHeading {dark} level={2}>Yooo bros! <GioTag {dark}>Svelte</GioTag></GioHeading>
				<GioHeading {dark} level={3}>Yooo bros!</GioHeading>
				<GioHeading {dark} level={4}>Yooo bros!</GioHeading>
				<GioButton><span>Home</span><GioIcon name="home" /></GioButton>
				<GioButton dark><GioIcon name="github" /><span>Github</span></GioButton>
				<GioCodeBlock language="ruby" code={`one dark`}></GioCodeBlock>
				<GioBodyText>
					<GioList>
						<GioListItem>
							Hello!
							<GioList>
								<GioListItem>Hello!</GioListItem>
								<GioListItem>Hello!</GioListItem>
							</GioList>
						</GioListItem>
						<GioListItem>Hello!</GioListItem>
					</GioList>
				</GioBodyText>
			</GioContent>
		</GioSection>
	</GioWebPage>
</main>

<script lang="ts">
	import {
		GioTitle,
		GioText,
		GioBodyText,
		GioHeading,
		GioCaption,
		GioInlineCode,
		GioSection,
		GioContent,
		GioTag,
		GioSubtitle,
		GioWebPage,
		GioCodeBlock,
		GioButton,
		GioSmartLink,
		GioIcon,
		GioList,
		GioListItem
	} from '@gabio/design-svelte'

	const dark = false
</script>

<style lang="scss" global>
	@import '@gabio/design-svelte/src/styles/reset';
	@import '@gabio/design-svelte/src/styles/code-themes/one-dark-prism';
</style>
