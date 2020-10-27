<div>
  <GioTitle noMargin fontSize="3rem">gab.io - personnal branding</GioTitle>
  <GioSubtitle>The story behind the brand and the design.</GioSubtitle>
  <GioCaption>
    <GioBodyText>
      Design library available for
      <GioSmartLink
        accent
        href="https://www.npmjs.com/package/@gabio/design-vue">
        Vue
      </GioSmartLink>
      and
      <GioSmartLink
        accent
        href="https://www.npmjs.com/package/@gabio/design-svelte">
        Svelte
      </GioSmartLink>!
    </GioBodyText>
  </GioCaption>
  <GioBodyText>
    <GioCaptionedImage caption="gab.io logo">
      <div slot="image">
        <GioImage
          srcs={['images/projects/gab-io.png']}
          desc="gab.io logo"
          lazy />
      </div>
    </GioCaptionedImage>
  </GioBodyText>
  <GioSubtitle>
    It all started a while back, when I first discovered the Web world. There
    were no longer boundaries between design and code, and finally a bridge
    emerged between the two. It was probably my biggest revelation, and I&#39;ve
    swim in it since then.
  </GioSubtitle>
  <GioBodyText>
    After accumulating years of practice, projects, ideas and prototypes, it was
    finally time for me to try, once again, to find an image that suits me. Now
    that I have way enough projects to show, there were no more excuses. I
    <strong>had</strong>
    to find something. Else, how do you want me to sell myself as a software
    engineer with design skills? This creation, this image, this website was,
    for me, the only true way that could distinguish myself. In the following
    sections, I will guide you around the main elements of the brand, the design
    specs, the app developpment, etc.
  </GioBodyText>
  <GioHeading level={1} id="branding">Branding</GioHeading>
  <GioHeading level={2} id="the-name">The name</GioHeading>
  <GioBodyText>
    First off, the name. I&#39;ve searched for one for a long time, fell on
    <em>vigenere23</em>
    when I was into crypto and never changed it since. I no longer feel like
    it&#39;s representing myself anymore, which means it is time for a change. I
    once tried and played with
    <GioInlineCode>gab.code</GioInlineCode>
    when these new domain names appeared. It was nice, I liked that, but it was
    a bit too related to the
    <em>coding</em>
    part of programming. Since then, I&#39;ve become way past this single phase,
    and entered more into the world of software
    <strong>design</strong>, so it has to be more related to the abstract
    concepts of the computing world, and less to the code itself. One thing for
    sure was that I always liked the
    <em>gab</em>
    part since it&#39;s the only part of my name that is close to being
    international (or at least pronounceable in english). I then got the idea of
    using
    <GioInlineCode>.io</GioInlineCode>
    instead, which is a more abstract relation to computer science. Also, I
    thought it would be catchy and short enough for a suitable brand name. So
    that was it,
    <GioInlineCode>gab.io</GioInlineCode>
    pleased me well enough to start playing with it for a logo, which was the
    second part of this whole process.
  </GioBodyText>
  <GioHeading level={2} id="the-logo">The logo</GioHeading>
  <GioBodyText>
    I&#39;ve always liked geometric shapes. They offer a broad range of
    possibilities by their simplicity, plus they are easier to play with. I
    already got a design for
    <GioInlineCode>gab.code</GioInlineCode>
    that uses those shapes and was felling creative about those. As I started
    playing with them, I noticed some imbalance in the horizontal axe since one
    part was longer than the other (around the
    <GioInlineCode>.</GioInlineCode>). After cutting the
    <GioInlineCode>a</GioInlineCode>
    and the
    <GioInlineCode>b</GioInlineCode>, the same problem appeared but this time on
    the vertical axis. Seeing that the
    <GioInlineCode>.</GioInlineCode>
    on the
    <GioInlineCode>i</GioInlineCode>
    was also repetitive with the other one, I had the idea to rotate the last
    part to fuse both dots. The last step was to arrange the logo so that it
    looked somehow aligned. The solution came from an old learning about visual
    illusions and relative spaces, were it showed how the environment around an
    object can affect its perception. Thus, framing the
    <GioInlineCode>g.io</GioInlineCode>
    in a parallelogram shape did the job quite well. Then you have it. A
    beautiful, yet simple logo, that represents pretty much all I am. :
    Minimalist, mathematical, organized. For the colors, I initially went
    monotone, since I tend to focus on contours and shapes instead of patterns
    and colors. Plus, the contrast ratio is always pleasant, and pretty much any
    color can then be used depending on the context. I then adapted the main
    color to match the color scheme discussed in the next section.
  </GioBodyText>
  <GioBodyText>
    <GioCaptionedImage caption="Logo units and measures">
      <div slot="image">
        <GioImage
          srcs={['images/projects/gab-io/logo-measures.png']}
          desc="Logo units and measures"
          lazy />
      </div>
    </GioCaptionedImage>
  </GioBodyText>
  <GioHeading level={1} id="design-specs">Design specs</GioHeading>
  <GioHeading level={2} id="color-scheme">Color scheme</GioHeading>
  <GioBodyText>
    For the colors, I was inspired by both the
    <strong>One Dark</strong>
    syntax highlight and the
    <strong>Nord</strong>
    palette. They are both based on dark
    <em>bluey</em>
    greys, which are not too aggressive and very pleasant to the eye. The idea
    was to have a reversible design, which means that each component could be
    either light-themed or dark-themed, and each element would fit well in every
    situation. That&#39;s were I came up with 4 colors per scheme. Each palette
    has a base color with 220 hue and 15% saturation, and all others are lighter
    or darker by factors of 5%. This gives just enough colors to match every
    element states needed.
  </GioBodyText>
  <GioBodyText>
    <GioCaptionedImage caption="Color schemes (dark and light)">
      <div slot="image">
        <GioImage
          srcs={['images/projects/gab-io/colors.png']}
          desc="Color schemes (dark and light)"
          lazy />
      </div>
    </GioCaptionedImage>
  </GioBodyText>
  <GioHeading level={2} id="typography">Typography</GioHeading>
  <GioBodyText>
    For the main font, I went with
    <GioInlineCode>Roboto</GioInlineCode>
    since it offers amazing readability and support. To get a little punch, I
    gave a try to
    <GioInlineCode>Sen</GioInlineCode>
    bold, modern and geometric sans-serif font. It is distinguishable enough to
    be used in a logo, but yet subtle enough to be used in more text-based
    content, which suits perfectly with headings and titles. I was especially
    pleased with how consistant the strokes are, since some fonts have really
    thiner parts on some letters, which would not have been consistent with the
    design. The heading 1 also contains a small underline just to add some more
    legibility to the main divisions.
  </GioBodyText>
  <GioBodyText>
    As the monospace font for code snippets and inline code, I went with
    <GioInlineCode>Fira Code</GioInlineCode>. If you&#39;re not familiar with
    it, it&#39;s basically one of the only fonts that makes sens in the
    programming world (along with
    <GioInlineCode>Droid Sans Mono</GioInlineCode>
    and a few others) : every symbol is aligned (
    <GioInlineCode>=+&lbrace;-%&gt;#</GioInlineCode>), the weight is just
    perfect and it offers amazing ligatures (like
    <GioInlineCode>=&gt;</GioInlineCode>
    or
    <GioInlineCode>===</GioInlineCode>), which are all very usefull for quick
    spotting and prolonged reading.
  </GioBodyText>
  <GioCodeBlock
    language="js"
    code="//%20code%20block%0Aimport%20Vue%20from%20'vue'%0A%0Aexport%20class%20ComponentRegisterer%20%7B%0A%20%20register()%20%7B%0A%20%20%20%20const%20componentFiles%20=%20require.context('../components',%20true,%20/.(vue%7Cjs)$/)%0A%20%20%7D%0A%7D" />
  <GioBodyText>
    For the text colors, I&#39;m using transparency instead of the color palette
    since it improves readability on different backgrounds. The base color is
    <GioInlineCode>dark-1</GioInlineCode>
    (or
    <GioInlineCode>light-1</GioInlineCode>) and is used for headings. The main
    text has a
    <strong><GioInlineCode>80%</GioInlineCode></strong>
    opacity over the base color to prevent eye fatigue and better adapt to any
    background. Thirdly, the tertiary text have a
    <strong><GioInlineCode>60%</GioInlineCode></strong>
    opacity and is used for subtitles and other less meaningful informations.
  </GioBodyText>
  <GioBodyText>
    <GioCaptionedImage caption="Typography (size in px, light and dark)">
      <div slot="image">
        <GioImage
          srcs={['images/projects/gab-io/typography.png']}
          desc="Typography (size in px, light and dark)"
          lazy />
      </div>
    </GioCaptionedImage>
  </GioBodyText>
  <GioHeading level={1} id="conclusion">Conclusion</GioHeading>
  <GioBodyText>
    There you go! I hope you enjoyed embarking in this journey with me! Stay
    tuned for more articles coming about the making of the
    <GioInlineCode>@gabio</GioInlineCode>
    ecosystem!
  </GioBodyText>
</div>

<script lang="ts">
  import {
    GioTitle,
    GioSubtitle,
    GioSmartLink,
    GioBodyText,
    GioCaption,
    GioCaptionedImage,
    GioImage,
    GioHeading,
    GioInlineCode,
    GioCodeBlock
  } from '@gabio/design-svelte'
</script>
