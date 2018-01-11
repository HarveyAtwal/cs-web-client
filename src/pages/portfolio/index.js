import React from 'react'
import { translate } from 'react-polyglot';

import DashLayout from 'layouts/DashLayout'
import Metric from 'widgets/metric'
import Positions from 'widgets/positions'

class PortfolioPage extends React.Component {
  
  getPositions() {
    return [{
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
    }];
  }

  render() {
    const { props } = this;
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Total Deposits:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Profits Banked:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Balance:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Gain:"/></div>
          <div className="grid__cell mb--2"><Positions positions={this.getPositions()}/></div>
        </div>
      </DashLayout>
    )
  }
}

export default translate()(PortfolioPage);