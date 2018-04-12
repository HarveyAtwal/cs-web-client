import React from 'react'
import { translate } from 'react-polyglot';

import Metric from 'ui/widgets/metric'
import PortfolioWeight from 'ui/widgets/portfolio-weight'
import Positions from 'ui/widgets/positions'
import TradeHeatMap from 'ui/widgets/trade-heat-map'

class PortfolioHome extends React.Component {

  render() {
    return (
      <div className="grid">
        <div className="grid__cell mb--2"><TradeHeatMap /></div>
        <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Total Deposits:"/></div>
        <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Profits Banked:"/></div>
        <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Balance:"/></div>
        <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Gain:"/></div>
        <div className="grid__cell mb--2"><Positions /></div>
        <div className="grid__cell 1/2--lap-and-up mb--2"><PortfolioWeight /></div>
      </div>
    )
  }
}

export default translate()(PortfolioHome);
