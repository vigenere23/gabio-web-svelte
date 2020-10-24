<GioSection {dark}>
  <GioContent>
    <GioTitle {dark} centered>Hello, world!</GioTitle>
    <GioSubtitle {dark}>Como estas?</GioSubtitle>
    <GioText {dark}>
      Visit the
      <GioSmartLink href="https://svelte.dev/tutorial">
        Svelte tutorial
      </GioSmartLink>
      to
      <GioTag {dark}>learn</GioTag>
      <GioTag {dark}>learn</GioTag>
      how to build Svelte apps.
    </GioText>
    <GioBodyText {dark}>
      Some body told
      <GioInlineCode {dark}>me there waaas an</GioInlineCode>
      empty street somewhere that I didn't want to jaaaaaaaam...
    </GioBodyText>
    <GioCaption {dark}>Click here for more!</GioCaption>
    <GioHeading {dark} level={1}>Yooo bros!</GioHeading>
    <GioHeading {dark} level={2}>
      Yooo bros!
      <GioTag {dark}>Svelte</GioTag>
    </GioHeading>
    <GioHeading {dark} level={3}>Yooo bros!</GioHeading>
    <GioHeading {dark} level={4}>Yooo bros!</GioHeading>
    <GioButton>
      <span>Home</span>
      <GioIcon name="home" />
    </GioButton>
    <GioButton dark href="http://google.com">
      <GioIcon name="github" /><span>Github</span>
    </GioButton>
    <GioCodeBlock language="ruby" code={`one dark`} />
    <GioBodyText {dark}>
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
    <GioCard
      {dark}
      href="http://google.com"
      title="Project Luna"
      desc="Una escapada della teritoria commo esta la vida satina petina magnana"
      tags={['vue', 'react', 'svelte']}>
      <div slot="image">
        <GioImage
          desc="An image"
          srcs={['images/projects/cooky.png']}
          objectFit="contain" />
      </div>
      <div slot="actions">
        <GioButton size="small" dark={!dark}>
          <GioIcon name="github" /><span>Github</span>
        </GioButton>
      </div>
    </GioCard>
    <GioCaptionedImage {dark} caption="yoooooooo" width="60%">
      <div slot="image">
        <GioImage desc="An image" srcs={['images/projects/glow4002.png']} />
      </div>
    </GioCaptionedImage>
  </GioContent>
</GioSection>

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
    GioCodeBlock,
    GioButton,
    GioSmartLink,
    GioIcon,
    GioList,
    GioListItem,
    GioCard,
    GioImage,
    GioCaptionedImage
  } from '@gabio/design-svelte'

  const dark = true
</script>
