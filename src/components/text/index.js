import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom'

import './styles.scss'

class Text extends React.Component {
  
  static defaultProps = {
  }
  
  renderChildren() {
    const { props } = this;
    if(props.to) {
      return <Link to={props.to}>{props.children}</Link>;
    }
    
    return props.children;
  }
  
  render() {
    const { props } = this;
    
    let classes = classNames("text", props.className, {
      "text--display": props.theme === "display",
      "text--header": props.theme === "header-icon",
      "text--h1": props.theme === "h1",
      "text--h2": props.theme === "h2",
      "text--h3": props.theme === "h3",
      "text--h4": props.theme === "h4",
      "text--h5": props.theme === "h5",
      "text--h6": props.theme === "h6",
      "text--link": props.to,
      "text--underline": props.underline || props.to,
      "text--block": props.block,
      "text--center": props.center,
      "text--uppercase": props.uppercase,
      "text--bold": props.bold,
      "text--semi-bold": props.semiBold,
    });
    
    if(props.color) {
      classes += ` col--${props.color}`;
    }
    
    return (
      <span className={classes}>
        {this.renderChildren()}
      </span>
    )
  }
}

export default Text
