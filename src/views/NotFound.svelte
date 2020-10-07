<div class="not-found">
  <GioWebPage class="not-found">
    <GioSection>
      <GioContent>
        <GioTitle noMargin fontSize="140px">404</GioTitle>
        <GioSubtitle>This page was not found</GioSubtitle>
        <div class="not-found__links">
          <!-- <BackButton dark /> -->
          <GioButton dark href="/">
            <GioIcon name="home"></GioIcon>
            <span>Home</span>
          </GioButton>
        </div>
      </GioContent>
    </GioSection>
  </GioWebPage>
</div>

<script lang="ts">
  import {
    GioWebPage,
    GioSection,
    GioContent,
    GioTitle,
    GioSubtitle,
    GioButton,
    GioIcon
  } from '@gabio/design-svelte'
</script>

<style lang="scss">
  .not-found {
    :global(.gio-section) {
      height: 100vh;
    }
  
    :global(.gio-content) {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    &__links {
      display: flex;
      justify-content: center;
    }
  }
  </style>
  