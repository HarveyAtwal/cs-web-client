import React from 'react'
import classNames from 'classnames';

import { translate } from 'react-polyglot';
import Card from 'components/card'
import Text from 'components/text'
import Table from 'components/table'
import Illustration from 'components/illustration'

import './styles.scss'

class PositionsWidget extends React.Component {
  
  state = {
    positions: [{
      symbol: "REQ/BTC",
      date: "01-01-2018 15:02:49",
      quantity: 6464,
      price: 	0.00006048,
      total: 0.39094272,
      marketPrice: 0.00006228,
      marketTotal: 0.42094272,
      gain: ''
    }, {
      symbol: "BTC/USDT",
      date: "01-01-2018 12:43:15",
      quantity: 0.392179,
      price: 13451.99,
      total: 5275.59,
      marketPrice: 13760.00,
      marketTotal: 5395.29,
      gain: ''
    }]
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
    const { positions } = this.state;
    
    return (
      <Table
        columns={this.buildColumns()}
        data={positions}
        defaultPageSize={10}
        showPagination={false}
      />
    )
  }
  
  renderContent() {
    const { state } = this;
    
    if(state.positions.length === 0) {
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
