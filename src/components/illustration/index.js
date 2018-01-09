import React from 'react'
import classNames from 'classnames';

import Text from 'components/text'
import Button from 'components/button'
import './styles.scss'

class Illustration extends React.Component {
  
  renderContent() {
    const { state } = this;
    
    if(state.positions.length === 0) {
      return this.renderEmptyIllustration();
    }
    
    return null;
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("illustration", props.className, {
      "illustration--padded": props.padded
    });
  
    return (
      <div className={classes}>
        {props.title && <Text className="mb" theme="h1" center>{props.title}</Text>}
        {props.desc && <Text className="mb" theme="h1" center>{props.desc}</Text>}
        {props.action && <Button label={props.action} small/>}
      </div>
    )
  }
}

export default Illustration
