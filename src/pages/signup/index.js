import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link, Redirect } from 'react-router-dom'

import * as authActions from 'stores/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { pathnames } from 'routes';
import AuthLayout from 'layouts/AuthLayout'
import Button from 'components/button'
import Input from 'components/input'
import Card from 'components/card'
import Text from 'components/text'
import Interpolate from 'components/interpolate'
import { toast } from 'components/toast'

import './styles.scss'

class SignupPage extends React.Component {

  state = {
    emailAddress: "",
    password: "",
    registering: false
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.registerError) {
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

  signup = (e) => {
    e.preventDefault();
    const { state } = this;
    this.props.authSignup(state.emailAddress, state.password);
    this.setState({ registering: true });
  }

  renderError() {
    const { auth } = this.props;
    const registerError = auth.registerError;

    if(!registerError) {
      return null;
    }

    const { message } = registerError;
    let error = "page.signup.invalid";

    if(message === `"email" is not allowed to be empty`) {
      error = "error.emptyEmailField";
    }

    if(message === `"email" must be a valid email`) {
      error = "error.invalidEmail";
    }

    if(message === `"password" is not allowed to be empty`) {
      error = "error.emptyPasswordField";
    }

    if(message === "Already registered") {
      error = "error.accountExists";
    }

    return <Text className="mb--2" error center>{this.props.t(error)}</Text>
  }

  render() {
    const { props, state } = this;
    const { auth } = props;

    if(auth.isRegistered) {
      props.authSignupRedirect();
      toast.success(props.t("page.signup.invitationSent", { email: state.emailAddress }));
      return <Redirect to={{
        pathname: pathnames.signin,
        search: `?email=${state.emailAddress}`
      }} />
    }

    return (
      <AuthLayout title={props.t('page.signup.title')}>
        <Card className="authlayout__card" theme="borderless" noPadding>
          {this.renderError()}
          <form onSubmit={this.signup}>
            <Input className="mb"
              ref={ (c) => this.emailAddressField = c }
              placeholder={props.t("form.emailAddress")}
              type="email"
              name="emailAddress"
              value={state.emailAddress}
              onChange={this.handleInputChange}
              disabled={auth.isRegistering}
              autoFocus />
            <Input placeholder={props.t("form.password")}
              type="password"
              name="password"
              value={state.password}
              disabled={auth.isRegistering}
              onChange={this.handleInputChange} />
            <Button className="mt--2"
              label={props.t("page.signup.createAccount")}
              loading={auth.isRegistering}
              disabled={auth.isRegistering}
              maxWidth />
          </form>
          <Text className="mt" theme="h6" center>
            <Interpolate text="page.signup.registerPolicy" keys={{
              privacyPolicy: <Text to={pathnames.privacy}>{props.t("legal.privacy")}</Text>,
              tos: <Text to={pathnames.terms}>{props.t("legal.terms")}</Text>
            }} />
          </Text>
        </Card>
        <Text theme="h5" color="white" underline center>
          <Link to={pathnames.signin}>{props.t('page.signup.hasAccount')}</Link>
        </Text>
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

export default translate()(connect(mapStateToProps, mapDispatchToProps)(SignupPage));
