import { wrap } from 'svelte-spa-router/wrap'
import DefaultLayout from './layouts/DefaultLayout.svelte'
import Home from './views/Home.svelte'
import Article from './views/Article.svelte'
import Test from './views/Test.svelte'
import NotFound from './views/NotFound.svelte'

const production = !process.env.ROLLUP_WATCH

export const routes = {
  '/': wrap({
    component: DefaultLayout,
    props: {
      view: Home
    }
  }),
  '/article/:id': wrap({
    component: DefaultLayout,
    props: {
      view: Article
    }
  }),
  '/test': wrap({
    conditions: [() => !production],
    component: DefaultLayout,
    props: {
      view: Test
    }
  }),
  '/404': wrap({
    component: DefaultLayout,
    props: {
      view: NotFound
    }
  }),
  '*': wrap({
    component: DefaultLayout,
    props: {
      view: NotFound
    }
  })
}
