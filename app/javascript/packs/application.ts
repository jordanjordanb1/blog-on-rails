import ReactOnRails from 'react-on-rails'
import type { ReactComponentOrRenderFunction } from 'react-on-rails/node_package/lib/types'
import Index from '../pages/index'
import ViewPostById from '../pages/posts/[:id]'
import Init from '../setup/init'

// All of the pages in the app
// ! EACH PAGE MUST BE WRAPPED IN THE INIT FUNCTION
const PAGES: Record<string, ReactComponentOrRenderFunction> = {
  // @ts-ignore
  Index: Init(Index),
  // @ts-ignore
  ViewPostById: Init(ViewPostById),
}

ReactOnRails.register({
  ...PAGES,
})
