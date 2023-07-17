import { route } from 'static-route-paths'

// DOCS: https://github.com/NullVoxPopuli/static-route-paths

const routes = route({
  root: route(),
  all: route('*'),
  login: route('login'),
  signup: route('signup'),
  dashboard: route('dashboard'),
})

export default routes
