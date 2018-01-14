import React from 'react'
import classNames from 'classnames';

import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';

import Text from 'components/text'
import './styles.scss'

class Select extends React.Component {
  
  renderLabel() {
    // any changes to this label should be reflected in the input component as well
    const { props } = this;
    
    if(!props.label) {
      return null;
    }
    
    return <Text className="input__label" theme="h5" block semiBold>{props.label}</Text>
  }

  render() {
    const { props } = this;
    
    const classes = classNames("select", props.className, {});
    return [
      this.renderLabel(),
      <ReactSelect {...props} className={classes} />
    ]
  }
}

export default Select
