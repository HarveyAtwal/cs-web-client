import React from 'react'
import { translate } from 'react-polyglot';
import { Redirect } from 'react-router-dom'

import Card from 'components/card'

import { RouteWithSubRoutes } from 'components/router'
import { pathnames, compilePath } from 'routes'

class TrackerPage extends React.Component {

  buildTrackerTabs() {
    const { props } = this;
    const { portfolioId } = props;

    return [{
      name: props.t("widgets.tradeTracker.title"),
      linkTo: compilePath(pathnames.portfolio.tracker.trades)({ id: portfolioId })
    },{
      name: props.t("widgets.profitTracker.title"),
      linkTo: compilePath(pathnames.portfolio.tracker.profits)({ id: portfolioId })
    }]
  }

  render() {
    const { props } = this;
    const { routes, location, portfolioId } = props;

    if(location.pathname === compilePath(pathnames.portfolio.tracker.index)({ id: portfolioId })) {
      return <Redirect to={compilePath(pathnames.portfolio.tracker.trades)({ id: portfolioId })} />
    }

    return (
      <div className="grid">
        <div className="grid__cell mb--2">
          <Card header={{ tabs: this.buildTrackerTabs() }}>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Card>
        </div>
      </div>
    )
  }
}

export default translate()(TrackerPage);
