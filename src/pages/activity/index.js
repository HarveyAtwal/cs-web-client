import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import DashLayout from 'layouts/DashLayout'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'

class ActivityPage extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="grid__cell mb--2">
            <Card header={{ title: props.t("widgets.activity.title") }}>
            </Card>
          </div>
        </div>
      </DashLayout>
    )
  }
}

export default translate()(ActivityPage);