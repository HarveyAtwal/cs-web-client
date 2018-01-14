import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { translate } from 'react-polyglot';

import Avatar from 'components/avatar';
import Text from 'components/text';
import Tabs from 'components/tabs'
import Icon from 'components/icon';
import { pathnames } from 'routes';
import './styles.scss'

class Header extends React.Component {
  
  static defaultProps = {
    authenticated: false
  }
  
  state = {
    showAvatarDropdown: false,
    showNavItems: false
  }
  
  handleRemoveOverlay = () => {
    this.setState({ 
      showAvatarDropdown: false,
      showNavItems: false
   });
  }
  
  handleTriggerNav = () => {
    this.setState({ showNavItems: !this.state.showNavItems })
  }
  
  handleTriggerAvatarDropdown = () => {
    this.setState({ showAvatarDropdown: !this.state.showAvatarDropdown })
  }
    
  getNavItems = () => {
    const { props } = this;
    return [{
      name: props.t("navigation.portfolio"),
      icon: "portfolio",
      linkTo: pathnames.portfolio
    },{
      name: props.t("navigation.tracker"),
      icon: "tracker",
      linkTo: pathnames.tracker.index,
    },{
      name: props.t("navigation.activity"),
      icon: "activity",
      linkTo: pathnames.activity,
    },{
      name: props.t("navigation.settings"),
      icon: "settings",
      linkTo: pathnames.settings.index,
    }]
  }
  
  renderLogo() {
    const { props } = this
    return (
      <Link to={pathnames.index}><span className="header__logo">{props.t('general.appName')}</span></Link>
    )
  }
  
  renderNav() {
    const { props, state } = this;
    
    return (
      <div>
        <div className="header__nav pocket--hide">
          <Tabs theme="header" className="header__nav__tabs" items={this.getNavItems()}/>
        </div>
        {state.showNavItems &&
          <div className="header__nav--pocket lap-and-up--hide pocket--show">
            <ul>
              {this.getNavItems().map((navItem) => {
                return (
                  <li>
                    <Link to={navItem.linkTo}>
                      <Text className="flex">
                        <Icon className="mr" type={navItem.icon} />{navItem.name}
                      </Text>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        }
      </div>
    )
  }
  
  renderAvatarDropdownLinks() {
    const { props } = this;
    
    return (
      <ul>
        <li><Link to={pathnames.settings.index}><Text>{props.t("avatarDropdown.settings")}</Text></Link></li>
        <li><Link to={pathnames.invite}><Text>{props.t("avatarDropdown.invite")}</Text></Link></li>
        <li><Link to={pathnames.signout}><Text>{props.t("avatarDropdown.signout")}</Text></Link></li>
      </ul>
    )
  }
  
  renderAvatarDropdown() {
    const { props } = this;
    return (
      <div className="content rel">
        <div className="header__avatar__dropdown pocket--hide">
          {this.renderAvatarDropdownLinks()}
        </div>
        <div className="header__avatar__dropdown 1/1 lap-and-up--hide pocket--show">
          {this.renderAvatarDropdownLinks()}
        </div>
      </div>
    );
  }
  
  renderAuthenticatedHeader() {
    const { props, state } = this;
    
    return (
      <div className="header__content header__content--authenticated">
        <div className="header__menu lap-and-up--hide pocket--show">
          <div className="pointer" onClick={this.handleTriggerNav}>
            <Text theme="header-icon"><Icon type="menu" /></Text>
          </div>
        </div>
        {this.renderLogo()}
        <div className="header__avatar">
          <div className="pointer" onClick={this.handleTriggerAvatarDropdown}>
            <Avatar size="header-icon" />
          </div>
        </div>
      </div>
    )
  }
  
  renderUnauthenticatedHeader() {
    const { props } = this;
    
    return (
      <div className="header__content">
        {this.renderLogo()}
        <ul className="header__links">
          <li><Link to={pathnames.signin}><Text theme="h5" underline>{props.t('general.signIn')}</Text></Link></li>
          <li><Link to={pathnames.signup}><Text className="header__signup" theme="h5">{props.t('general.signUp')}</Text></Link></li>
        </ul>
      </div>
    )
  }
  
  render() {
    const { props, state } = this;
    
    const classes = classNames("header", {
      "header--primary": props.primaryBg,
      "header--authenticated": props.authenticated
    });
    
    return (
      <div>
        <div className={classes}>
          {props.authenticated && this.renderAuthenticatedHeader()}
          {!props.authenticated && this.renderUnauthenticatedHeader()}
        </div>
        {props.authenticated && (
          <div>
            {state.showAvatarDropdown && this.renderAvatarDropdown()}
            {this.renderNav()}
            {(state.showAvatarDropdown || state.showNavItems) && <div onClick={this.handleRemoveOverlay} className="overlay"/>}
          </div>
        )}
      </div>
    )
  }
}

export default translate()(Header)
