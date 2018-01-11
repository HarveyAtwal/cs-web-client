import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as authActions from 'stores/auth';
import { pathnames } from 'routes'

class SignoutPage extends React.Component {

  componentDidMount() {
    this.props.authSignout();
  }

  render() {
    return (
      <Redirect to={pathnames.index} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SignoutPage);