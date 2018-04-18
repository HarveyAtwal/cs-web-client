import React from 'react'
import { pathnames } from 'routes'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import LoadUserScreen from 'ui/widgets/load-user-screen';


const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user
});

const PrivateRoute = connect(mapStateToProps)((routeProps) => (
  <Route {...routeProps} render={(props) => {
    // loading user information
    if(routeProps.user.isFetching) {
      return <LoadUserScreen />;
    }

    // user authenticated
    if(routeProps.auth.isAuthenticated) {
      return routeProps.render ? routeProps.render(props) : <routeProps.component {...props} />;
    }

    // redirect to signin page
    return (
      <Redirect to={{
        pathname: pathnames.signin,
        state: { from: props.location }
      }} />
    )
  }} />
))

// pass the sub-routes down to keep nesting
const RouteWithSubRoutes = (route) => {
  const PublicOrPrivateRoute = route.protected ? PrivateRoute : Route;

  return (
    <PublicOrPrivateRoute path={route.path} exact={route.exact} render={(props) => {
      return (
        <route.component {...props} {...route.componentProps} routes={route.routes}  />
      )
    }} />
  );
}


export {
  PrivateRoute,
  RouteWithSubRoutes
}
