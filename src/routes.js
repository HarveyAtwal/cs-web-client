import Index from './pages/index'
import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Forgot from './pages/forgot'
import NoMatch from './pages/404'

const pathnames = {
  index: '/',
  signin: '/signin',
  signup: '/signup',
  forgot: '/forgot',
  terms: '/terms',
  privacy: '/privacy',
  dashboard: '/dashboard'
}

const routes = [{ 
  path: pathnames.index,
  exact: true,
  component: Index
}, { 
  path: pathnames.signin,
  component: Signin
}, { 
  path: pathnames.signup,
  component: Signup
}, { 
  path: pathnames.forgot,
  component: Forgot
}, { 
  path: pathnames.dashboard,
  protected: true,
  component: Dashboard
}, {
  component: NoMatch
}]

export default routes
export { 
  pathnames
}