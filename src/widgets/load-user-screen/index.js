import React from 'react'
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
import { pathnames } from 'routes'
import * as userActions from 'stores/user';
import PortfolioLayout from 'layouts/portfolio-layout';
import Loading from 'components/loading'

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
      <PortfolioLayout>
        <Loading />
      </PortfolioLayout>
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
