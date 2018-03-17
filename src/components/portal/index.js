import React from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {

  static defaultProps = {
    toDOMNode: document.getElementById('root')
  }

  render() {
    const { children, toDOMNode } = this.props;
    return ReactDOM.createPortal(children, toDOMNode);
  }
}

export default Portal
