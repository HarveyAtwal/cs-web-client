import React from 'react'

import Text from 'ui/components/text'
import Icon from 'ui/components/icon'
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
