import React from 'react'
import classNames from 'classnames';

import './styles.scss'

class Loading extends React.Component {

  render() {
    const { props } = this;
    const classes = classNames("loading", props.className);

    return (
      <div className={classes}>
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
        <div className="rect6"></div>
      </div>
    )
  }
}

export default Loading
