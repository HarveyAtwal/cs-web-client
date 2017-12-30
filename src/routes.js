import Index from './pages/index'
import Dashboard from './pages/dashboard'
import Tracker from './pages/tracker'
import TrackerProfits from './pages/tracker/profits'
import TrackerTrades from './pages/tracker/trades'
import Activity from './pages/activity'
import Reports from './pages/reports'
import Settings from './pages/settings'
import SettingsProfile from './pages/settings/profile'
import SettingsPassword from './pages/settings/password'
import SettingsApiImport from './pages/settings/api'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Forgot from './pages/forgot'
import NoMatch from './pages/404'

const pathnames = {
  index: '/',
  invite: '/invite',
  signin: '/signin',
  signout: '/signout',
  signup: '/signup',
  forgot: '/forgot',
  terms: '/terms',
  privacy: '/privacy',
  dashboard: '/dashboard',
  tracker: {
    index: '/tracker',
    trades: '/tracker/trades',
    profits: '/tracker/profits',
  },
  activity: '/activity',
  reports: '/reports',
  settings: {
    index: '/settings',
    profile: '/settings/profile',
    password: '/settings/password',
    apiImport: '/settings/api/import',
  }
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
  path: pathnames.tracker.index,
  protected: false,
  component: Tracker,
  routes: [{
    path: pathnames.tracker.trades,
    component: TrackerTrades
  }, { 
    path: pathnames.tracker.profits,
    component: TrackerProfits
  }]
}, { 
  path: pathnames.activity,
  protected: false,
  component: Activity
}, { 
  path: pathnames.reports,
  protected: false,
  component: Reports
}, { 
  path: pathnames.settings.index,
  protected: false,
  component: Settings,
  routes: [{
    path: pathnames.settings.profile,
    component: SettingsProfile
  }, { 
    path: pathnames.settings.password,
    component: SettingsPassword
  }, { 
    path: pathnames.settings.apiImport,
    component: SettingsApiImport
  }]
}, {
  component: NoMatch
}]

export default routes
export { 
  pathnames
}