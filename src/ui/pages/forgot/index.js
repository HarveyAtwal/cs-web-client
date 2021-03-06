import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import { pathnames } from 'routes';
import AuthLayout from 'ui/layouts/auth-layout'
import Button from 'ui/components/button'
import Input from 'ui/components/input'
import Card from 'ui/components/card'
import Text from 'ui/components/text'

import './styles.scss'

class ForgotPage extends React.Component {

  render() {
    const { props } = this;

    return (
      <AuthLayout title={props.t('page.forgot.title')}>
        <Card className="auth-layout__card" theme="borderless" noPadding>
          <Input className="mb" placeholder={props.t("form.emailAddress")} type="email" autoFocus />
          <Button className="mt" label={props.t("page.forgot.resetPassword")} maxWidth/>
        </Card>
        <Text theme="h5" color="white" underline center>
          <Link to={pathnames.signin}>{props.t('page.forgot.hasAccount')}</Link>
        </Text>
      </AuthLayout>
    )
  }
}

export default translate()(ForgotPage);
