import _ from 'lodash'
import React from 'react'
import { translate } from 'react-polyglot';
import { NavLink, Link, Redirect } from 'react-router-dom'

import DashLayout from 'layouts/DashLayout'
import Card from 'components/card'
import Text from 'components/text'
import Icon from 'components/icon'

import { RouteWithSubRoutes } from 'components/router'
import { pathnames } from 'routes'

import './styles.scss'

class SettingsPage extends React.Component {
  
  buildSettingMenuItems() {
    const { props } = this;
    return [{
      name: props.t("page.settings.profile.title"),
      linkTo: pathnames.settings.profile,
      icon: 'avatar'
    },{
      name: props.t("page.settings.password.title"),
      linkTo: pathnames.settings.password,
      icon: 'password'
    },{
      name: props.t("page.settings.api.title"),
      linkTo: pathnames.settings.api,
      icon: 'api'
    }]
  }
  
  renderMenu() {
    const items = this.buildSettingMenuItems();
    
    return (
      <Card noPadding>
        <ul>
          {items.map((item) => (
            <li className="setting-menu__item">
              <NavLink to={item.linkTo} activeClassName="setting-menu__item--active">
                <Text className="setting-menu__item__content">
                  {item.icon && <Icon type={item.icon} className="mr"  />}
                  {item.name}
                </Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </Card>
    );
  }

  render() {
    const { props } = this;
    const { routes, location } = props;
    if(location && location.pathname === pathnames.settings.index) {
      return <Redirect to={pathnames.settings.profile} />
    }
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="grid__cell 1/4 1/1--pocket mb--2">
            {this.renderMenu()}
          </div>
          <div className="grid__cell 2/4 1/1--pocket mb--2">
            <Card>
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