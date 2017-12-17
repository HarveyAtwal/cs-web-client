import React from 'react'
import classNames from 'classnames';
import './styles.scss'

class Card extends React.Component {
  
  render() {
    const { props } = this;
    
    const classes = classNames("card", props.className, {
      "card--padded": props.theme === "padded"
    });
    
    return (
      <div className={classes}>
        {props.children}
      </div>
    )
  }
}

export default Card
