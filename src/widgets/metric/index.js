import React from 'react'
import classNames from 'classnames';

import Card from 'components/card'
import Text from 'components/text'
import './styles.scss'

class MetricWidget extends React.Component {
  render() {
    const { props } = this;
    
    const classes = classNames("metric", props.className, {});
    
    return (
      <Card className={classes}>
        <Text className="mb" block>{props.title}</Text>
        <Text theme="h1" block center>0.00</Text>
      </Card>
    )
  }
}

export default MetricWidget
