import React from 'react'
import classNames from 'classnames';

import Tabs from 'ui/components/tabs'
import './styles.scss'

class Card extends React.Component {
  
  renderHeader() {
    const { header } = this.props;
    
    if(!header) {
      return null;
    }
    
    return (
      <div className="card__header">
        {header.title && <div className="p pl--2 pr--2">{header.title}</div>}
        {header.tabs &&  <Tabs className="px--2" items={header.tabs}/>}
      </div>
    );
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("card", props.className, {
      "card--borderless": props.theme === "borderless",
      "card--no-padding": props.noPadding,
    });
    
    return (
      <div className={classes}>
        {this.renderHeader()}
        <div className="card__content">
          {props.children}
        </div>
      </div>
    )
  }
}

export default Card
