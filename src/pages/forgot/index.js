import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import { pathnames } from 'routes';
import dispatcher from 'core/dispatcher'
import AuthLayout from 'layouts/AuthLayout'
import Button from 'components/button'
import Input from 'components/input'
import Card from 'components/card'
import Text from 'components/text'

import './styles.scss'

class Forgot extends React.Component {
  
  constructor(props) {
    super(props);
    _.extend(this, dispatcher);
  }

  render() {
    const { props } = this;
    
    return (
      <AuthLayout title={props.t('page.forgot.title')}>
        <Card className="authlayout__card">
          <Input className="mb" placeholder={props.t("form.emailAddress")} type="email" autoFocus />
          <Button className="mt" label={props.t("page.forgot.resetPassword")}/>
        </Card>
        <Text theme="h5" color="white" underline center>
          <Link to={pathnames.signin}>{props.t('page.forgot.hasAccount')}</Link>
        </Text>
      </AuthLayout>
    )
  }
}

export default translate()(Forgot);