import React from 'react'
import { translate } from 'react-polyglot';
import { NavLink, Redirect } from 'react-router-dom'

import Card from 'components/card'
import Text from 'components/text'
import Icon from 'components/icon'

import PortfolioLayout from 'layouts/portfolio-layout'
import { RouteWithSubRoutes } from 'components/router'
import { pathnames } from 'routes'

import './styles.scss'

class ProfilePage extends React.Component {

  buildSettingMenuItems() {
    const { props } = this;

    return [{
      name: props.t("page.settings.profile.title"),
      linkTo: pathnames.profile.general,
      icon: 'avatar'
    }, {
      name: props.t("page.settings.password.title"),
      linkTo: pathnames.profile.password,
      icon: 'password'
    }]
  }

  renderMenu() {
    const items = this.buildSettingMenuItems();

    return (
      <Card noPadding>
        <ul>
          {items.map((item, i) => (
            <li key={i} className="setting-menu__item">
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

    if(location && location.pathname === pathnames.profile.index) {
      return <Redirect to={pathnames.profile.general} />
    }

    return (
      <PortfolioLayout>
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
      </PortfolioLayout>
    )
  }
}

export default translate()(ProfilePage);
