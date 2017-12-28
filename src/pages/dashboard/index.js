import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link } from 'react-router-dom'

import dispatcher from 'core/dispatcher'
import DashLayout from 'layouts/DashLayout'
import Card from 'components/card'
import Text from 'components/text'

import { pathnames } from 'routes'

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    _.extend(this, dispatcher);
  }

  render() {
    const { props } = this;
    
    return (
      <DashLayout>
        <Card>
          <div>hello</div>
        </Card>
      </DashLayout>
    )
  }
}

export default translate()(Dashboard);