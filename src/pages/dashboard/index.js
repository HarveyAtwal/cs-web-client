import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import dispatcher from 'core/dispatcher'
import DashLayout from 'layouts/DashLayout'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'

class DashboardPage extends React.Component {
  
  constructor(props) {
    super(props);
    _.extend(this, dispatcher);
  }

  render() {
    const { props } = this;
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="1/2--lap-and-up grid__cell mb--2">
            <Card header={{ title: props.t("widgets.portfolio.title") }}>
            </Card>
          </div>
          <div className="1/2--lap-and-up grid__cell mb--2">
            <Card header={{ title: props.t("widgets.openTrades.title") }}>
            </Card>
          </div>
          <div className="grid__cell mb--2">
            <Card header={{ title: props.t("widgets.recentActivity.title") }}>
            </Card>
          </div>
        </div>
      </DashLayout>
    )
  }
}

export default translate()(DashboardPage);