import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { translate } from 'react-polyglot';
import { Redirect, Link } from 'react-router-dom'
import queryString from 'query-string';

import * as authActions from 'stores/auth';
import AuthLayout from 'ui/layouts/auth-layout'
import Input from 'ui/components/input'
import Button from 'ui/components/button'
import Card from 'ui/components/card'
import Text from 'ui/components/text'

import { pathnames } from 'routes'
import './styles.scss'

class SigninPage extends React.Component {

  constructor(props) {
    super(props);

    const emailAddress = queryString.parse(props.location.search).email;

    this.state = {
      emailAddress: emailAddress || "",
      password: "",
      passwordFocus: emailAddress ? true : false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.loginError) {
      this.emailAddressField.focus();
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

  renderError() {
    const { auth } = this.props;
    const loginError = auth.loginError;

    if(!loginError) {
      return null;
    }

    const data = loginError.data || {};

    const { message, status } = data;
    let error = "page.signin.invalid";

    if(message === `"email" is not allowed to be empty`) {
      error = "error.emptyEmailField";
    }

    if(message === `"email" must be a valid email`) {
      error = "error.invalidEmail";
    }

    if(message === `"password" is not allowed to be empty`) {
      error = "error.emptyPasswordField";
    }

    if(status === `notauthorized`) {
      return null;
    }

    return <Text className="mb--2" error center>{this.props.t(error)}</Text>
  }

  render() {
    const { props, state } = this;
    const { auth } = props;

    if(auth.isAuthenticated) {
      return <Redirect to={pathnames.portfolio.index} />
    }

    return (
      <AuthLayout title={props.t('page.signin.title')}>
        <Card className="auth-layout__card" theme="borderless" noPadding>
          {this.renderError()}
          <form onSubmit={this.login}>
            <Input className="mb"
              ref={ (c) => this.emailAddressField = c }
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
              onChange={this.handleInputChange}
              autoFocus={state.passwordFocus} />
            <Button className="mt--2"
              type="submit"
              label={props.t("page.signin.signin")}
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
