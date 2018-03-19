import React from 'react'
import { translate } from 'react-polyglot';
import { NavLink, Redirect } from 'react-router-dom'

import Card from 'components/card'
import Text from 'components/text'
import Icon from 'components/icon'

import { RouteWithSubRoutes } from 'components/router'
import { pathnames, compilePath } from 'routes'

import './styles.scss'

class SettingsPage extends React.Component {

  buildSettingMenuItems() {
    const { props } = this;
    const { portfolioId } = props;

    return [{
      name: props.t("page.settings.profile.title"),
      linkTo: compilePath(pathnames.portfolio.settings.profile)({ id: portfolioId }),
      icon: 'avatar'
    },{
      name: props.t("page.settings.password.title"),
      linkTo: compilePath(pathnames.portfolio.settings.password)({ id: portfolioId }),
      icon: 'password'
    },{
      name: props.t("page.settings.api.title"),
      linkTo: compilePath(pathnames.portfolio.settings.api)({ id: portfolioId }),
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
    const { routes, location, portfolioId } = props;

    if(location && location.pathname === compilePath(pathnames.portfolio.settings.index)({ id: portfolioId })) {
      return <Redirect to={compilePath(pathnames.portfolio.settings.profile)({ id: portfolioId })} />
    }

    return (
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
    )
  }
}

export default translate()(SettingsPage);
