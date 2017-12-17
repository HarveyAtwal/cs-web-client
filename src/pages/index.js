import React from 'react'
import { Redirect } from 'react-router-dom'

import { pathnames } from 'routes';

class Index extends React.Component {
  
  render() {
    if(window.isAuthenticated) {
      return <Redirect to={pathnames.dashboard} />
    }
    
    return <Redirect to={pathnames.signin} />
  }
}

export default Index