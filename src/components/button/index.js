import React from 'react'
import classNames from 'classnames';
import Text from 'components/text';
import './styles.scss'

class Button extends React.Component {
  
  static defaultProps = {
    theme: "primary"
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("button", props.className, {
      "button--primary": props.theme === "primary",
      "button--max": props.maxWidth,
      "button--small": props.small,
    });
    
    return (
      <button 
        className={classes} 
        onClick={props.onClick}>
          <Text theme="h5" uppercase={props.uppercase}>{props.label}</Text>  
      </button>
    )
  }
}

export default Button