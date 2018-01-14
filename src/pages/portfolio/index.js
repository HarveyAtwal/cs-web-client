import React from 'react'
import { translate } from 'react-polyglot';

import DashLayout from 'layouts/DashLayout'
import Metric from 'widgets/metric'
import Positions from 'widgets/positions'
import TradeHeatMap from 'widgets/trade-heat-map'

class PortfolioPage extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <DashLayout>
        <div className="grid">
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Total Deposits:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Profits Banked:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Balance:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Gain:"/></div>
          <div className="grid__cell mb--2"><TradeHeatMap /></div>
          <div className="grid__cell mb--2"><Positions /></div>
        </div>
      </DashLayout>
    )
  }
}

export default translate()(PortfolioPage);