import React from 'react'
import classNames from 'classnames';
import ReactTable from 'react-table'

import { translate } from 'react-polyglot';
import Card from 'components/card'
import Text from 'components/text'
import Illustration from 'components/illustration'
import './styles.scss'

class PositionsWidget extends React.Component {
  
  state = {
    positions: []
  }
  
  buildColumns() {
    const { props } = this;
    
    return [{
      Header: props.t("holding.symbol"),
      accessor: 'symbol'
    }, {
      Header:  props.t("holding.date"),
      accessor: 'date',
      defaultSortDesc: true
    }, {
      Header:  props.t("holding.quantity"),
      accessor: 'quantity',
      className: "col--secondaryText",
    }, {
      Header:  props.t("holding.price"),
      accessor: 'price',
      className: "col--secondaryText",
    }, {
      Header:  props.t("holding.total"),
      accessor: 'total'
    }, {
      Header:  props.t("holding.marketPrice"),
      accessor: 'marketPrice',
      className: "col--secondaryText",
    }, {
      Header:  props.t("holding.marketTotal"),
      accessor: 'marketTotal'
    }, {
      Header:  props.t("holding.gain"),
      accessor: 'gain'
    }]
  }
  
  renderEmptyIllustration() {
    const { props } = this;
    
    return (
      <Illustration 
        title={props.t("widgets.positions.empty")}
        action={props.t("widgets.positions.openPosition")}
        padded />
    )
  }
  
  renderTable() {
    const { positions } = this.props;
    
    return (
      <ReactTable
        columns={this.buildColumns()}
        data={positions}
        defaultPageSize={10}
        showPagination={false}
      />
    )
  }
  
  renderContent() {
    const { props } = this;
    
    if(props.positions.length === 0) {
      return this.renderEmptyIllustration();
    }
    
    return this.renderTable();
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("positions", props.className, {});
    
    return (
      <Card className={classes} header={{ title: props.t('widgets.positions.title') }} noPadding>
        {this.renderContent()}
      </Card>
    )
  }
}

export default translate()(PositionsWidget)
