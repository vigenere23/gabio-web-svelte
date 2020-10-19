# gab.io - personnal branding

###### The story behind the brand and the design.

> Design library available for [Vue](https://www.npmjs.com/package/@gabio/design-vue) and [Svelte](https://www.npmjs.com/package/@gabio/design-svelte)!

![gab.io logo](images/projects/gab-io.png)

###### It all started a while back, when I first discovered the Web world. There were no longer boundaries between design and code, and finally a bridge emerged between the two. It was probably my biggest revelation, and I've swim in it since then.

After accumulating years of practice, projects, ideas and prototypes, it was finally time for me to try, once again, to find an image that suits me. Now that I have way enough projects to show, there were no more excuses. I **had** to find something. Else, how do you want me to sell myself as a software engineer with design skills? This creation, this image, this website was, for me, the only true way that could distinguish myself. In the following sections, I will guide you around the main elements of the brand, the design specs, the app developpment, etc.

## Branding

### The name

First off, the name. I've searched for one for a long time, fell on _vigenere23_ when I was into crypto and never changed it since. I no longer feel like it's representing myself anymore, which means it is time for a change. I once tried and played with `gab.code` when these new domain names appeared. It was nice, I liked that, but it was a bit too related to the _coding_ part of programming. Since then, I've become way past this single phase, and entered more into the world of software **design**, so it has to be more related to the abstract concepts of the computing world, and less to the code itself. One thing for sure was that I always liked the _gab_ part since it's the only part of my name that is close to being international (or at least pronounceable in english). I then got the idea of using `.io` instead, which is a more abstract relation to computer science. Also, I thought it would be catchy and short enough for a suitable brand name. So that was it, `gab.io` pleased me well enough to start playing with it for a logo, which was the second part of this whole process.

### The logo

I've always liked geometric shapes. They offer a broad range of possibilities by their simplicity, plus they are easier to play with. I already got a design for `gab.code` that uses those shapes and was felling creative about those. As I started playing with them, I noticed some imbalance in the horizontal axe since one part was longer than the other (around the `.`). After cutting the `a` and the `b`, the same problem appeared but this time on the vertical axis. Seeing that the `.` on the `i` was also repetitive with the other one, I had the idea to rotate the last part to fuse both dots. The last step was to arrange the logo so that it looked somehow aligned. The solution came from an old learning about visual illusions and relative spaces, were it showed how the environment around an object can affect its perception. Thus, framing the `g.io` in a parallelogram shape did the job quite well. Then you have it. A beautiful, yet simple logo, that represents pretty much all I am. : Minimalist, mathematical, organized. For the colors, I initially went monotone, since I tend to focus on contours and shapes instead of patterns and colors. Plus, the contrast ratio is always pleasant, and pretty much any color can then be used depending on the context. I then adapted the main color to match the color scheme discussed in the next section.

![Logo units and measures](images/projects/gab-io/logo-measures.png)

## Design specs

### Color scheme

For the colors, I was inspired by both the **One Dark** syntax highlight and the **Nord** palette. They are both based on dark _bluey_ greys, which are not too aggressive and very pleasant to the eye. The idea was to have a reversible design, which means that each component could be either light-themed or dark-themed, and each element would fit well in every situation. That's were I came up with 4 colors per scheme. Each palette has a base color with 220 hue and 15% saturation, and all others are lighter or darker by factors of 5%. This gives just enough colors to match every element states needed.

![Color schemes (dark and light)](images/projects/gab-io/colors.png)

### Typography

For the main font, I went with `Roboto` since it offers amazing readability and support. To get a little punch, I gave a try to `Sen` bold, modern and geometric sans-serif font. It is distinguishable enough to be used in a logo, but yet subtle enough to be used in more text-based content, which suits perfectly with headings and titles. I was especially pleased with how consistant the strokes are, since some fonts have really thiner parts on some letters, which would not have been consistent with the design. The heading 1 also contains a small underline just to add some more legibility to the main divisions.

As the monospace font for code snippets and inline code, I went with `Fira Code`. If you're not familiar with it, it's basically one of the only fonts that makes sens in the programming world (along with `Droid Sans Mono` and a few others) : every symbol is aligned (`=+{-%>#`), the weight is just perfect and it offers amazing ligatures (like `=>` or `===`), which are all very usefull for quick spotting and prolonged reading.

```js
// code block
import Vue from 'vue'

export class ComponentRegisterer {
  register() {
    const componentFiles = require.context('../components', true, /.(vue|js)$/)
  }
}
```

For the text colors, I'm using transparency instead of the color palette since it improves readability on different backgrounds. The base color is `dark-1` (or `light-1`) and is used for headings. The main text has a **`80%`** opacity over the base color to prevent eye fatigue and better adapt to any background. Thirdly, the tertiary text have a **`60%`** opacity and is used for subtitles and other less meaningful informations.

![Typography (size in px, light and dark)](images/projects/gab-io/typography.png)

## Conclusion

There you go! I hope you enjoyed embarking in this journey with me! Stay tuned for more articles coming about the making of the `@gabio` ecosystem!
