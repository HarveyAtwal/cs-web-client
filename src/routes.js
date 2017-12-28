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
  dashboard: '/dashboard',
  tracker: '/tracker',
  activity: '/activity',
  reports: '/reports',
  settings: '/settings',
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
  protected: false,
  component: Dashboard
}, { 
  path: pathnames.tracker,
  protected: false,
  component: Dashboard
}, { 
  path: pathnames.activity,
  protected: false,
  component: Dashboard
}, { 
  path: pathnames.reports,
  protected: false,
  component: Dashboard
}, { 
  path: pathnames.settings,
  protected: false,
  component: Dashboard
}, {
  component: NoMatch
}]

export default routes
export { 
  pathnames
}