import React from 'react'
import classNames from 'classnames';
import './styles.scss'

class Input extends React.Component {
  
  render() {
    const { props } = this;
    
    const classes = classNames("input", props.className, {});
    
    return (
      <input {...props} className={classes} />
    )
  }
}

export default Input
