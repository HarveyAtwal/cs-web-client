import React from 'react'
import classNames from 'classnames';

import Text from 'components/text'
import Button from 'components/button'
import './styles.scss'

class Illustration extends React.Component {

  render() {
    const { props } = this;

    const classes = classNames("illustration", props.className, {
      "illustration--padded": props.padded
    });

    return (
      <div className={classes}>
        {props.src && <img className="mb--2" src={props.src} alt={props.alt} />}
        {props.title && <Text className="mb" theme="h1" center>{props.title}</Text>}
        {props.desc && <Text className="mb" theme="h3" color="secondaryText" center>{props.desc}</Text>}
        {props.action && (
          <Button className="mt--2"
            label={props.action}
            onClick={props.onActionClick}
            small />
        )}
      </div>
    )
  }
}

export default Illustration
