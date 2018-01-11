import Index from './pages/index'
import Portfolio from './pages/portfolio'
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
import Signout from './pages/signout'
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
  portfolio: '/portfolio',
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
  path: pathnames.signout,
  component: Signout
}, { 
  path: pathnames.forgot,
  component: Forgot
}, { 
  path: pathnames.portfolio,
  protected: true,
  component: Portfolio
}, { 
  path: pathnames.tracker.index,
  protected: true,
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
  protected: true,
  component: Activity
}, { 
  path: pathnames.reports,
  protected: true,
  component: Reports
}, { 
  path: pathnames.settings.index,
  protected: true,
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