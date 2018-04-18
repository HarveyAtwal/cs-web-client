import React from 'react'
import classNames from 'classnames';
import './styles.scss'

import Text from 'ui/components/text'

class Input extends React.Component {

  // ref method
  focus() {
    this.input.focus();
  }

  renderLabel() {
    // any changes to this label should be reflected in the select component as well
    const { props } = this;
    const {
      required
    } = this.props;

    if(!props.label) {
      return null;
    }

    return (
      <Text key={0} className="input__label" theme="h5" block semiBold>
        {props.label}
        {required && <Text color="errorText">{' *'}</Text>}
      </Text>
    )
  }

  render() {
    const { props } = this;

    const classes = classNames("input", props.className, {
      "input--disabled": props.disabled,
      "input--error": props.error,
    });

    return [
      this.renderLabel(),
      <input key={1} ref={ (c) => this.input = c }
        {...props} className={classes} />
    ]
  }
}

export default Input
