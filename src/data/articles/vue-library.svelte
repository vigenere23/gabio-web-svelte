<div>
  <GioTitle noMargin fontSize="3rem">Building a complete Vue library</GioTitle>
  <GioSubtitle>
    My journey through the unexplained world of publishing a Vue library,
    alongside with Typescript support and source files sharing.
  </GioSubtitle>
  <GioBodyText>
    After creating the whole gab.io brand, I wanted to use the designed
    components in other projects (such as resumes, cover letters, business
    cards, etc.). That said, I needed to export those components to form what is
    called a &quot;library&quot;.
  </GioBodyText>
  <GioHeading level={1} id="#solution-1-git-submodule">
    Solution 1 : Git submodule
  </GioHeading>
  <GioBodyText>
    Of course the first step is to export all the reusable components and move
    them to a new repository. Then, in the Vue project that will use the
    components, you simply add the library repo as a submodule. Unfortunatly,
    this brings some major problems :
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>It is hard to correctly version</GioListItem>
      <GioListItem>
        You can&#39;t use the SSH link like you would for any other projects
        (think about the public users)
      </GioListItem>
      <GioListItem>
        Nothing is actually built : you simply share the .Vue components,
        meaning that the user has to do all the work
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    Therefore, while this solution works for your private projects, it will not
    work for usage by the general public.
  </GioBodyText>
  <GioHeading level={1} id="#solution-2-npm-package">
    Solution 2 : NPM package
  </GioHeading>
  <GioBodyText>
    That&#39;s of course the main goal here. But there are actually a lot of
    steps involved. First of all, you need to understand what publishing a
    package truly means, which config options you need and how to structure
    everything so that you files are available at the wanted paths.
  </GioBodyText>
  <GioHeading level={2} id="#step-1-understanding-the-basics">
    Step 1 : Understanding the basics
  </GioHeading>
  <GioBodyText>
    Let&#39;s say we want to publish a complete Vue library. Let&#39;s also say
    that you want your user to be able to add it&#39;s how components that will
    match the library&#39;s design. To do so, you have 2 options :
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        Exporting global css classes for colors, backgrounds, typography, etc.,
        meaning that you end up doing a global class-based styling instead of
        component based
      </GioListItem>
      <GioListItem>
        Directly exporting source SCSS variables, classes and mixins as well as
        Vue mixins, meaning that the user can extend your design and style it
        directly in it&#39;s components
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    Here, the later option is really more readable, usable and modular since you
    don&#39;t have to rely on an extensive class list for each HTML elements you
    define and can use a more component-based approach. That&#39;s also why I
    decided to export &quot;container&quot; components that simply add
    predefined styles to a component. If I just wanted to style the components
    with CSS, then I would simply have publish a single CSS file and no
    components would have been needed.
  </GioBodyText>
  <GioBodyText>
    That said, we are going to opt for the second option. That means not only we
    need to publish the prebuilt Vue components, but also some classes and
    styles. Here&#39;s the structure I&#39;m hoping for :
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        <GioInlineCode>default</GioInlineCode>
        : the bundled and compiled Vue components
      </GioListItem>
      <GioListItem>
        <GioInlineCode>/lib/styles</GioInlineCode>
        : the source SCSS variables, functions and mixins (like
        <GioInlineCode>$primary-color</GioInlineCode>)
      </GioListItem>
      <GioListItem>
        <GioInlineCode>/lib/mixins</GioInlineCode>
        : the Vue mixins to extend (like
        <GioInlineCode>Darkable</GioInlineCode>)
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    It&#39;s not clear, but for succeeding such a task, you will need
    <strong>3 separate processes</strong>
    :
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        bundling : pre-compiling Vue components and minifying them into
        javascript bundles
      </GioListItem>
      <GioListItem>
        transpiling : Typescript classes transpiled to Javascript
      </GioListItem>
      <GioListItem>
        copying : directly copying source files to the distributed package (ex:
        SCSS files)
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioHeading level={2} id="#step-2-building-the-vue-components">
    Step 2 : building the Vue components
  </GioHeading>
  <GioBodyText>
    Since those will be written with Typescript, you will of course need a
    <GioInlineCode>tsconfig.js</GioInlineCode>
    file. Ideally, you would want those components in a different folder than
  </GioBodyText>
</div>

<script lang="ts">
  import {
    GioTitle,
    GioSubtitle,
    GioBodyText,
    GioHeading,
    GioListItem,
    GioList,
    GioInlineCode
  } from '@gabio/design-svelte'
</script>
