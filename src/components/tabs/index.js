import React from 'react'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom'

import Text from 'components/text'
import Icon from 'components/icon'
import './styles.scss'

class Tabs extends React.Component {
  
  static defaultProps = {
    items: []
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("tabs", props.className);
    
    return (
      <ul className={classes}>
        {props.items.map((item) => {
          const itemClasses = classNames({
            "tab__item py--2 inline": true
          });
          
          return (
            <li className="inline mr--3">
              <NavLink className={itemClasses} to={item.linkTo} activeClassName="tab__item--active">
                <Text className="tab__item__content" theme="h4">
                  {item.icon && <Icon type={item.icon} className="mr"  />}
                  {item.name}
                </Text>
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Tabs
