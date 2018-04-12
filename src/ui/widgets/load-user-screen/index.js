import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
import { pathnames } from 'routes'
import * as userActions from 'stores/user';
import Loading from 'ui/components/loading'

class LoadUserScreen extends React.Component {

  componentDidMount() {
    this.fetchCurrentUser()
  }

  fetchCurrentUser() {
    const { fetchCurrentUser } = this.props;
    fetchCurrentUser();
  }

  render() {
    const { user } = this.props;
    if(user.failed) {
      return <Redirect to={pathnames.signout} />
    }

    return (
      <Loading />
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadUserScreen);
