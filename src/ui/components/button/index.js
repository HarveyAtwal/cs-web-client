import React from 'react'
import classNames from 'classnames';
import Text from 'ui/components/text';
import './styles.scss'

class Button extends React.Component {

  static defaultProps = {
    theme: "primary"
  }

  render() {
    const { props } = this;

    const classes = classNames("button", props.className, {
      "button--primary": props.theme === "primary",
      "button--tertiary": props.theme === "tertiary",
      "button--disabled": props.disabled,
      "button--max": props.maxWidth,
      "button--small": props.small,
    });

    return (
      <button
        className={classes}
        disabled={props.disabled}
        onClick={props.onClick}>
        <Text theme="h5" uppercase={props.uppercase}>
          <Text className={props.loading && 'hidden'}>{props.label}</Text>
          {props.loading && <i className="button__loader fa fa-circle-o-notch fa-spin"></i>}
        </Text>
      </button>
    )
  }
}

export default Button
