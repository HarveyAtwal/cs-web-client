import pathToRegexp from 'path-to-regexp'

import Index from './ui/pages/index'
import NoMatch from './ui/pages/404'
import Signin from './ui/pages/signin'
import Signout from './ui/pages/signout'
import Signup from './ui/pages/signup'
import Forgot from './ui/pages/forgot'
import Portfolio from './ui/pages/portfolio'
import PortfolioHome from './ui/pages/portfolio/home'
import PortfolioTracker from './ui/pages/portfolio/tracker'
import PortfolioTrackerProfits from './ui/pages/portfolio/tracker/profits'
import PortfolioTrackerTrades from './ui/pages/portfolio/tracker/trades'
import PortfolioActivity from './ui/pages/portfolio/activity'
import PortfolioReports from './ui/pages/portfolio/reports'
import PortfolioSettings from './ui/pages/portfolio/settings'
import PortfolioSettingsProfile from './ui/pages/portfolio/settings/profile'
import PortfolioSettingsPassword from './ui/pages/portfolio/settings/password'
import PortfolioSettingsApiImport from './ui/pages/portfolio/settings/api'

import Profile from './ui/pages/profile'
import ProfileGeneral from './ui/pages/profile/general'
import ProfilePassword from './ui/pages/profile/password'


const pathnames = {
  index: '/',
  invite: '/invite',
  signin: '/signin',
  signout: '/signout',
  signup: '/signup',
  forgot: '/forgot',
  terms: '/terms',
  privacy: '/privacy',
  profile: {
    index: "/profile",
    general: "/profile/general",
    password: "/profile/password"
  },
  portfolio: {
    index: '/portfolio/:id',
    home: '/portfolio/:id/home',
    tracker: {
      index: '/portfolio/:id/tracker',
      trades: '/portfolio/:id/tracker/trades',
      profits: '/portfolio/:id/tracker/profits',
    },
    activity: '/portfolio/:id/activity',
    reports: '/portfolio/:id/reports',
    settings: {
      index: '/portfolio/:id/settings',
      profile: '/portfolio/:id/settings/profile',
      password: '/portfolio/:id/settings/password',
      api: '/portfolio/:id/settings/api'
    },
  },
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
  path: pathnames.profile.index,
  protected: true,
  component: Profile,
  routes: [{
    path: pathnames.profile.general,
    component: ProfileGeneral,
  }, {
    path: pathnames.profile.password,
    component: ProfilePassword,
  }]
}, {
  path: pathnames.portfolio.index,
  protected: true,
  component: Portfolio,
  routes: [{
    path: pathnames.portfolio.home,
    component: PortfolioHome,
  }, {
    path: pathnames.portfolio.tracker.index,
    component: PortfolioTracker,
    routes: [{
      path: pathnames.portfolio.tracker.trades,
      component: PortfolioTrackerTrades
    }, {
      path: pathnames.portfolio.tracker.profits,
      component: PortfolioTrackerProfits
    }]
  }, {
    path: pathnames.portfolio.activity,
    component: PortfolioActivity
  }, {
    path: pathnames.portfolio.reports,
    component: PortfolioReports
  }, {
    path: pathnames.portfolio.settings.index,
    protected: true,
    component: PortfolioSettings,
    routes: [{
      path: pathnames.portfolio.settings.profile,
      component: PortfolioSettingsProfile
    }, {
      path: pathnames.portfolio.settings.password,
      component: PortfolioSettingsPassword
    }, {
      path: pathnames.portfolio.settings.api,
      component: PortfolioSettingsApiImport
    }]
  }]
}, {
  component: NoMatch
}]

export default routes
export const compilePath = pathToRegexp.compile
export {
  pathnames
}
