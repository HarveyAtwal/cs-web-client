import React from 'react'

import Text from 'components/text'
import Icon from 'components/icon'
import './styles.scss'

class Avatar extends React.Component {

  render() {
    const { props } = this;

    return (
      <Text theme={props.size}><Icon type="avatar" /></Text>
    )
  }
}

export default Avatar
