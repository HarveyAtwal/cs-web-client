import React from 'react'
import { pathnames } from 'routes'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = (route) => (
  <Route {...route} render={(props) => {
    if(window.isAuthenticated) {
      return route.render ? route.render() : <route.component {...props} />;
    }
    
    return (
      <Redirect to={{
        pathname: pathnames.login,
        state: { from: props.location }
      }} />
    )
  }} />
)


// pass the sub-routes down to keep nesting
const RouteWithSubRoutes = (route) => {
  const PublicOrPrivateRoute = route.protected ? PrivateRoute : Route;
  
  return (
    <PublicOrPrivateRoute path={route.path} exact={route.exact} render={(props) => {
      return (
        <route.component {...props} routes={route.routes} />
      )
    }} />
  );
}

export {
  PrivateRoute,
  RouteWithSubRoutes
}