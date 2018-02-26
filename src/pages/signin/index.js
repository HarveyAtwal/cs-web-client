import _ from 'lodash'
import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { translate } from 'react-polyglot';
import { Redirect, Link } from 'react-router-dom'
import queryString from 'query-string';

import * as authActions from 'stores/auth';
import AuthLayout from 'layouts/AuthLayout'
import Input from 'components/input'
import Button from 'components/button'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'
import './styles.scss'

class SigninPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emailAddress: queryString.parse(props.location.search).email || "",
      password: ""
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login = (e) => {
    e.preventDefault();
    const { state } = this;
    this.props.authSignin(state.emailAddress, state.password);
  }

  render() {
    const { props, state } = this;
    const { auth } = props;

    if(auth.isAuthenticated) {
      return <Redirect to={pathnames.portfolio} />
    }

    return (
      <AuthLayout title={props.t('page.signin.title')}>
        <Card className="authlayout__card" theme="borderless" noPadding>
          <form onSubmit={this.login}>
            <Input className="mb"
              placeholder={props.t("form.emailAddress")}
              type="email"
              name="emailAddress"
              value={state.emailAddress}
              onChange={this.handleInputChange}
              disabled={auth.isAuthenticating}
              autoFocus />
            <Input placeholder={props.t("form.password")}
              type="password"
              name="password"
              value={state.password}
              disabled={auth.isAuthenticating}
              onChange={this.handleInputChange} />
            <Button className="mt--2"
              type="submit"
              label={auth.isAuthenticating ? "" : props.t("page.signin.signin")}
              onClick={this.login}
              maxWidth
              loading={auth.isAuthenticating}
              disabled={auth.isAuthenticating} />
          </form>
        </Card>
        <div className="text--center">
          <Link to={pathnames.forgot}>
            <Text theme="h5" className="page-signin__forgot-password" color="white" underline>{props.t('page.signin.forgotPassword')}</Text>
          </Link>
          <Link to={pathnames.signup}>
            <Text theme="h5" color="white" underline>{props.t('page.signin.signup')}</Text>
          </Link>
        </div>
      </AuthLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(authActions, dispatch)
}

export default translate()(connect(mapStateToProps, mapDispatchToProps)(SigninPage));
