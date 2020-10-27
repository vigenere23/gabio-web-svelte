import { wrap } from 'svelte-spa-router/wrap'
import Home from './views/Home.svelte'
import Article from './views/Article.svelte'
import Test from './views/Test.svelte'
import NotFound from './views/NotFound.svelte'

const production = !process.env.ROLLUP_WATCH

export const routes: Map<string | RegExp, any> = new Map()

routes.set('/', Home)
routes.set('/article/:id', Article)
// routes.set(/^\/(#.*)?$/, Home)
// routes.set(/^\/article\/(?<id>)(#.*)?$/, Article)
routes.set(
  '/test',
  wrap({
    conditions: [() => !production],
    component: Test
  })
)
routes.set('/404', NotFound)
routes.set('*', NotFound)
