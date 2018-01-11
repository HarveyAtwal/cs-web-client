import React from 'react'
import { pathnames } from 'routes'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from 'react-router-dom'


const mapStateToProps = (state) => ({ auth: state.auth });
const PrivateRoute = connect(mapStateToProps)((routeProps) => (
  
  <Route {...routeProps} render={(props) => {
    if(routeProps.auth.isAuthenticated) {
      return routeProps.render ? routeProps.render() : <routeProps.component {...props} />;
    }
    
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
        <route.component {...props} routes={route.routes} />
      )
    }} />
  );
}


export {
  PrivateRoute,
  RouteWithSubRoutes
}