import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import dispatcher from 'core/dispatcher'
import AuthLayout from 'layouts/AuthLayout'
import Input from 'components/input'
import Button from 'components/button'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'
import './styles.scss'

class Signin extends React.Component {
  
  constructor(props) {
    super(props);
    _.extend(this, dispatcher);
  }

  login = () => {
    this.publish("auth:signin", {
      username: "hello",
      password: "hello"
    });
  }

  render() {
    const { props } = this;
    
    return (
      <AuthLayout title={props.t('page.signin.title')}>
        <Card className="authlayout__card">
          <Input className="mb" placeholder={props.t("form.emailAddress")} type="email" autoFocus />
          <Input placeholder={props.t("form.password")} type="password"/>
          <Button className="mt--2" label={props.t("page.signin.signin")} onClick={this.login} />
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

export default translate()(Signin);