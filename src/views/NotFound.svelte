<div class="not-found">
  <GioWebPage class="not-found">
    <GioSection>
      <GioContent>
        <GioTitle noMargin fontSize="140px">404</GioTitle>
        <GioSubtitle>This page was not found</GioSubtitle>
        <div class="not-found__links">
          <!-- <BackButton dark /> -->
          <HomeButton dark></HomeButton>
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
    GioSubtitle
  } from '@gabio/design-svelte'
  import HomeButton from '../components/buttons/HomeButton.svelte'
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
  