# Building a complete Vue library

###### My journey through the unexplained world of publishing a Vue library, alongside with Typescript support and source files sharing.

After creating the whole gab.io brand, I wanted to use the designed components in other projects (such as resumes, cover letters, business cards, etc.). That said, I needed to export those components to form what is called a "library".

## Solution 1 : Git submodule

Of course the first step is to export all the reusable components and move them to a new repository. Then, in the Vue project that will use the components, you simply add the library repo as a submodule. Unfortunatly, this brings some major problems :

- It is hard to correctly version
- You can't use the SSH link like you would for any other projects (think about the public users)
- Nothing is actually built : you simply share the .Vue components, meaning that the user has to do all the work

Therefore, while this solution works for your private projects, it will not work for usage by the general public.

## Solution 2 : NPM package

That's of course the main goal here. But there are actually a lot of steps involved. First of all, you need to understand what publishing a package truly means, which config options you need and how to structure everything so that you files are available at the wanted paths.

### Step 1 : Understanding the basics

Let's say we want to publish a complete Vue library. Let's also say that you want your user to be able to add it's how components that will match the library's design. To do so, you have 2 options :

- Exporting global css classes for colors, backgrounds, typography, etc., meaning that you end up doing a global class-based styling instead of component based
- Directly exporting source SCSS variables, classes and mixins as well as Vue mixins, meaning that the user can extend your design and style it directly in it's components

Here, the later option is really more readable, usable and modular since you don't have to rely on an extensive class list for each HTML elements you define and can use a more component-based approach. That's also why I decided to export "container" components that simply add predefined styles to a component. If I just wanted to style the components with CSS, then I would simply have publish a single CSS file and no components would have been needed.

That said, we are going to opt for the second option. That means not only we need to publish the prebuilt Vue components, but also some classes and styles. Here's the structure I'm hoping for :

- `default` : the bundled and compiled Vue components
- `/lib/styles` : the source SCSS variables, functions and mixins (like `$primary-color`)
- `/lib/mixins` : the Vue mixins to extend (like `Darkable`)

It's not clear, but for succeeding such a task, you will need **3 separate processes** :

- bundling : pre-compiling Vue components and minifying them into javascript bundles
- transpiling : Typescript classes transpiled to Javascript
- copying : directly copying source files to the distributed package (ex: SCSS files)

### Step 2 : building the Vue components

Since those will be written with Typescript, you will of course need a `tsconfig.js` file. Ideally, you would want those components in a different folder than
