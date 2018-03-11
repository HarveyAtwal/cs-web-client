import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link, Redirect } from 'react-router-dom'

import PortfolioLayout from 'layouts/portfolio-layout'
import Card from 'components/card'
import Text from 'components/text'

import { RouteWithSubRoutes } from 'components/router'
import { pathnames } from 'routes'

class TrackerPage extends React.Component {
  
  buildTrackerTabs() {
    const { props } = this;
    return [{
      name: props.t("widgets.tradeTracker.title"),
      linkTo: pathnames.tracker.trades
    },{
      name: props.t("widgets.profitTracker.title"),
      linkTo: pathnames.tracker.profits
    }]
  }

  render() {
    const { props } = this;
    const { routes, location } = props;
    if(location.pathname === pathnames.tracker.index) {
      return <Redirect to={pathnames.tracker.trades} />
    }
    
    return (
      <PortfolioLayout>
        <div className="grid">
          <div className="grid__cell mb--2">
            <Card header={{ tabs: this.buildTrackerTabs() }}>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Card>
          </div>
        </div>
      </PortfolioLayout>
    )
  }
}

export default translate()(TrackerPage);