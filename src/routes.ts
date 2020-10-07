import { wrap } from 'svelte-spa-router/wrap'
import DefaultLayout from './layouts/DefaultLayout.svelte'
import Test from './views/Test.svelte'
import NotFound from './views/NotFound.svelte'

export const routes = {
  '/': wrap({
    component: DefaultLayout,
    props: {
      view: Test
    }
  }),
  '/test': wrap({
    component: DefaultLayout,
    props: {
      view: Test
    }
  }),
  '*': NotFound
}
