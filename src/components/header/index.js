import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { translate } from 'react-polyglot';

import Text from 'components/text';
import Icon from 'components/icon';
import { pathnames } from 'routes';
import './styles.scss'

class Header extends React.Component {
  
  static defaultProps = {
    authenticated: false
  }
  
  renderLogo() {
    const { props } = this
    return (
      <Link to={pathnames.index}><span className="header__logo">{props.t('general.appName')}</span></Link>
    )
  }
  
  renderAuthenticatedHeader() {
    const { props } = this;
    
    return (
      <div className="header__content header__content--authenticated">
        {this.renderLogo()}
        <div className="header__avatar">
          <Text theme="header"><Icon type="avatar" /></Text>
        </div>
      </div>
    )
  }
  
  renderUnauthenticatedHeader() {
    const { props } = this;
    
    return (
      <div className="header__content">
        {this.renderLogo()}
        <ul>
          <li><Link to={pathnames.signin}><Text theme="h5" underline>{props.t('general.signIn')}</Text></Link></li>
          <li><Link to={pathnames.signup}><Text className="header__signup" theme="h5">{props.t('general.signUp')}</Text></Link></li>
        </ul>
      </div>
    )
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("header", {
      "header--primary": props.primaryBg,
      "header--authenticated": props.authenticated
    });
    
    return (
      <div className={classes}>
        {props.authenticated && this.renderAuthenticatedHeader()}
        {!props.authenticated && this.renderUnauthenticatedHeader()}
      </div>
    )
  }
}

export default translate()(Header)
