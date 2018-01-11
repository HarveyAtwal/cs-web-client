import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { Link, Redirect } from 'react-router-dom'

import DashLayout from 'layouts/DashLayout'
import Card from 'components/card'
import Text from 'components/text'

import { RouteWithSubRoutes } from 'components/router'
import { pathnames } from 'routes'

class SettingsPage extends React.Component {
  
  buildSettingTabs() {
    const { props } = this;
    return [{
      name: props.t("page.settings.profile"),
      linkTo: pathnames.settings.profile
    },{
      name: props.t("page.settings.password"),
      linkTo: pathnames.settings.password
    },{
      name: props.t("page.settings.apiImport"),
      linkTo: pathnames.settings.apiImport
    }]
  }

  render() {
    const { props } = this;
    const { routes, location } = props;
    if(location.pathname === pathnames.settings.index) {
      return <Redirect to={pathnames.settings.profile} />
    }
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="grid__cell mb--2">
            <Card header={{ tabs: this.buildSettingTabs() }}>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Card>
          </div>
        </div>
      </DashLayout>
    )
  }
}

export default translate()(SettingsPage);