import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'

class ReportsPage extends React.Component {

  render() {
    const { props } = this;

    return (
      <div className="grid">
        <div className="grid__cell mb--2">
          <Card header={{ title: props.t("widgets.reports.title") }}>
          </Card>
        </div>
      </div>
    )
  }
}

export default translate()(ReportsPage);
