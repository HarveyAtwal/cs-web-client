import React from 'react'
import classNames from 'classnames';
import { translate } from 'react-polyglot';

import Chart from 'chart.js'
import Card from 'components/card'

import 'chart.piecelabel.js'
import './styles.scss'

class PortfolioWeight extends React.Component {

  COLORS = [
    "#B8D760",
    "#5EBBE7",
    "#D898CA",
    "#F1D255",
    "#8FD4FB",
    "#FAC26B",
    "#93B9C6",
    "#CCC5A9",
    "#56BACA",
    "#DBD853",
    "#99ADF6",
  ];

  componentDidMount() {
    this.populateChart()
  }

  populateChart() {
    new Chart(this.refs.chart, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [15, 20, 15, 50],
          backgroundColor: this.COLORS
        }],
        labels: [
          'REQ',
          'VEN',
          'ETH',
          'BTC'
        ]
      },
      options:  {
        cutoutPercentage: 70,
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            position: 'bottom',
        },
        animation: {
          animateScale: true,
          animateRotate: false
        },
        pieceLabel: {
          render: 'percentage',
          precision: 2,
          fontColor: '#fff',
        }
      }
    })
  }

  renderChart() {
    return (
      <canvas ref="chart" id="chart" />
    )
  }

  render() {
    const { props } = this;

    const classes = classNames("portfolio-weight", props.className, {});

    return (
      <Card className={classes} header={{ title: props.t("widgets.portfolioWeight.title") }}>
        {this.renderChart()}
      </Card>
    )
  }
}

export default translate()(PortfolioWeight)
