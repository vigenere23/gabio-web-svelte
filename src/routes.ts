import { wrap } from 'svelte-spa-router/wrap'
import DefaultLayout from './layouts/DefaultLayout.svelte'
import Home from './views/Home.svelte'
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
  '/test': wrap({
    conditions: [() => !production],
    component: DefaultLayout,
    props: {
      view: Test
    }
  }),
  '/404': NotFound,
  '*': NotFound
}
