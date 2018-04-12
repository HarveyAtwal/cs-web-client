import React from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { pathnames } from 'routes';

class Index extends React.Component {

  render() {
    const { auth } = this.props;
    if(auth.isAuthenticated) {
      return <Redirect to={pathnames.portfolio.index} />
    }

    return <Redirect to={pathnames.signin} />
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Index);
