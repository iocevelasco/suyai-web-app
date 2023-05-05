import { Route, route } from 'static-route-paths'

// DOCS: https://github.com/NullVoxPopuli/static-route-paths

export type QuickTransferRoute = Route & {
  edit: Route & 'edit'
}

const routes = route({
  root: route(),
  all: route('*'),
  login: route('login'),
  dashboard: route('dashboard'),
})

export const getAbsolutePath = (path: string) => (path[0] === '/' ? path : `/${path}`)

export default routes
