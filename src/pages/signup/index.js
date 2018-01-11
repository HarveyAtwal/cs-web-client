import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import { pathnames } from 'routes';
import AuthLayout from 'layouts/AuthLayout'
import Button from 'components/button'
import Input from 'components/input'
import Card from 'components/card'
import Text from 'components/text'

import './styles.scss'

class Signup extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <AuthLayout title={props.t('page.signup.title')}>
        <Card className="authlayout__card" theme="borderless" noPadding>
          <Input className="mb" placeholder={props.t("form.emailAddress")} type="email" autoFocus />
          <Input placeholder={props.t("form.password")} type="password"/>
          <Button className="mt--2" label={props.t("page.signup.createAccount")} maxWidth/>
          <Text className="mt" theme="h6" center>
            By registering, you agree to the <Text to={pathnames.privacy}>privacy policy</Text> and <Text to={pathnames.terms}>terms of service</Text>.
          </Text>
        </Card>
        <Text theme="h5" color="white" underline center>
          <Link to={pathnames.signin}>{props.t('page.signup.hasAccount')}</Link>
        </Text>
      </AuthLayout>
    )
  }
}

export default translate()(Signup);