import React from 'react'
import classNames from 'classnames';

import './styles.scss'

class Divider extends React.Component {
  
  render() {
    const { props } = this;
    
    const classes = classNames("divider", props.className, {
    });
    
    return (
      <div className={classes} />
    )
  }
}

export default Divider
