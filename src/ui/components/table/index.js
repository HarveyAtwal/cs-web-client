import React from 'react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './styles.scss'

class Table extends React.Component {
  
  render() {
    const { props } = this;
    return <ReactTable {...props} />
  }
}

export default Table
