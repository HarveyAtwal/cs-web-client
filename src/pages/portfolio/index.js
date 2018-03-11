import React from 'react'
import { translate } from 'react-polyglot';

import PortfolioLayout from 'layouts/portfolio-layout'
import Metric from 'widgets/metric'
import PortfolioWeight from 'widgets/portfolio-weight'
import Positions from 'widgets/positions'
import TradeHeatMap from 'widgets/trade-heat-map'

class PortfolioPage extends React.Component {

  render() {
    const { props } = this;

    return (
      <PortfolioLayout>
        <div className="grid">
          <div className="grid__cell mb--2"><TradeHeatMap /></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Total Deposits:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Profits Banked:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Balance:"/></div>
          <div className="grid__cell 1/4--lap-and-up mb--2"><Metric title="Portfolio Gain:"/></div>
          <div className="grid__cell mb--2"><Positions /></div>
          <div className="grid__cell 1/2--lap-and-up mb--2"><PortfolioWeight /></div>
        </div>
      </PortfolioLayout>
    )
  }
}

export default translate()(PortfolioPage);
