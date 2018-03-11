import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import PortfolioLayout from 'layouts/portfolio-layout'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'

class ActivityPage extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <PortfolioLayout>
        <div className="grid">
          <div className="grid__cell mb--2">
            <Card header={{ title: props.t("widgets.activity.title") }}>
            </Card>
          </div>
        </div>
      </PortfolioLayout>
    )
  }
}

export default translate()(ActivityPage);