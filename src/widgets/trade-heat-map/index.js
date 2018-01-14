import React from 'react'
import moment from 'moment'
import classNames from 'classnames';

import { translate } from 'react-polyglot';
import Card from 'components/card'
import Text from 'components/text'

import './styles.scss'

class TradeHeatMap extends React.Component {
  
  COLORS = ["#EEEEEE", '#c6e48b', '#7bc96f', '#239a3b', '#196127']
  
  MAX_WEEKS = 53
  
  SQUARE_MARGIN = 2
  SQUARE_SIZE = 19.5
  
  DAY_LABEL_WIDTH = 40
  MONTH_LABEL_HEIGHT = 15
  
  DAYS = moment.weekdaysShort()
  MONTHS = moment.monthsShort()
  
  // trade format:
  // {
  //   '2016-06-23': 1,
  //   '2016-06-24': 5,
  //   ...
  // }
  
  state = {
    trades: {
    },
    weeks: this.MAX_WEEKS
  }
  
  constructor() {
    super()
    
    var values = {};
    var pad = (v) => (v < 10 ? '0' + v : v)
    for (var i = 1; i <= 12; i++) {
      for (var j = 1; j <= 31; j++) {
        values['2017-' + pad(i) + '-' + pad(j)] = Math.floor(Math.random() * 5);
      }
    }
    
    this.state.trades = values;
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }
  
  handleResize() {
    // container width
    const width = this.refs.hmContainer.offsetWidth;
    
    // leave room for week labels
    const visibleWeeks = Math.floor((width - this.DAY_LABEL_WIDTH) / (this.SQUARE_SIZE + this.SQUARE_MARGIN));
    
    this.setState({
      weeks: Math.min(visibleWeeks, this.MAX_WEEKS)
    });
  }
  
  buildTradingDays() {
    const { weeks, trades } = this.state;
    
    const DAYS_IN_WEEK = 7;
    const DAY_COUNT = 6; // 0 - 6
    
    const today = new moment().endOf("day");
    const startDate = moment(today).subtract(365, 'days');
    
    // find the date of the last saturday (the end of week)
    const lastSaturday = moment(today);
    lastSaturday.date(today.date() + ((DAY_COUNT) - today.day()));

    const weekArrays = [];
    for (let i = 0; i < weeks; i++) {
      weekArrays[i] = [];
      
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        const date = moment(lastSaturday)
        date.date(date.date() - ((weeks - i - 1) * DAYS_IN_WEEK + (DAY_COUNT - j)));

        // don't show squares after todays date
        if(date > today) {
          weekArrays[i][j] = null;
        }
        
        if(date <= today) {
          const tradeDate = date.format('YYYY-MM-DD');
          weekArrays[i][j] = {
            value: trades[tradeDate] || 0, // set value to zero if no trades for day
            date: date
          };
        }
      }
    }

    return weekArrays;
  }
  
  getSquarePosition(row, col) {
    const bounds = this.SQUARE_SIZE + this.SQUARE_MARGIN;
    return {
      x: this.DAY_LABEL_WIDTH + bounds * row,
      y: this.MONTH_LABEL_HEIGHT + bounds * col
    };
  }
  
  renderSquares(tradingDays) {
    const { weeks } = this.state;
    const DAYS_IN_WEEK = 7;
    
    const squares = [];
    for (let i = 0; i < weeks; i++) {
      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        // don't render day if it doesn't exist
        const tradeDay = tradingDays[i][j];
        if(!tradeDay) continue;
        
        const pos = this.getSquarePosition(i, j);
        squares.push((
          <rect 
            data-date={tradeDay.date.format('YYYY-MM-DD')}
            x={pos.x} 
            y={pos.y}
            width={this.SQUARE_SIZE} 
            height={this.SQUARE_SIZE} 
            fill={this.COLORS[tradeDay.value]}
          />
        ))
      }
    }
    
    return squares;
  }
  
  renderMonths(tradingDays) {
    const { weeks } = this.state;
    const months = [];
    
    let prevMonth = -1;
    for(let i = 0; i < weeks; i++) {
      // only show month label at the start of a week if it exists
      const tradeDay = tradingDays[i][0];
      if (!tradeDay) continue;
      const month = tradeDay.date.month();
      
      // loop through all the weeks until we get the next month
      if (month != prevMonth) {
        const pos = this.getSquarePosition(i, 0);
        months.push((
          <text className="trade-hm__text"
            x={pos.x + this.SQUARE_SIZE / 2}
            y={pos.y - this.SQUARE_SIZE / 2 - 2}
            textAnchor={'middle'}>
            {this.MONTHS[month]}
          </text>
        ))
        prevMonth = month;
      }
    }
    
    return months;
  } 
  
  renderDays(tradingDays) {
    const days = [];
    
    for (let i = 0; i < this.DAYS.length; i++) {
      const pos = this.getSquarePosition(0, i);
      days.push((
        <text className="trade-hm__text"
          x={pos.x - this.SQUARE_SIZE / 2 - 2}
          y={pos.y + this.SQUARE_SIZE / 2}
          textAnchor={'end'}>
          {this.DAYS[i]}
        </text>
      ))
    }
    
    return days;
  }
  
  renderMap() {
    const { weeks } = this.state;
    const tradingDays = this.buildTradingDays();
    
    return (
      <div ref="hmContainer">
        <svg className="trade-hm__calendar" height={165}>
          {this.renderMonths(tradingDays)}
          {this.renderDays(tradingDays)}
          {this.renderSquares(tradingDays)}
        </svg>
      </div>
    )
  }
  
  render() {
    const { props } = this;
    
    const classes = classNames("trade-hm", props.className, {});
    
    return (
      <Card className={classes} header={{ title: props.t('widgets.tradeHeatMap.title') }}>
        {this.renderMap()}
      </Card>
    )
  }
}

export default translate()(TradeHeatMap)
