import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as portfolioActions from 'stores/portfolio';
import * as currencyActions from 'stores/currencies';
import * as coinActions from 'stores/coins';

import PortfolioLayout from 'ui/layouts/portfolio-layout'
import { RouteWithSubRoutes } from 'ui/components/router'
import Loading from 'ui/components/loading'
import AddPortfolioIllustrion from 'ui/illustrations/add-portfolio'
import { pathnames, compilePath } from 'routes'

class PortfolioPage extends React.Component {

  componentDidMount() {
    const {
      fetchPortfolio,
      fetchCurrencies,
      fetchCoins
    } = this.props;

    fetchPortfolio();
    fetchCoins();
    fetchCurrencies();
  }

  renderEmptyState() {
    return <AddPortfolioIllustrion />
  }

  renderLoaded() {
    const { props } = this;
    const { routes, portfolio } = props;

    if(portfolio.id === -1) {
      return this.renderEmptyState();
    }

    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} componentProps={{ portfolioId: portfolio.id }} {...route}  />
        ))}
      </div>
    )
  }

  renderContent() {
    const { props } = this;
    const { portfolio } = props;

    return (
      <div>
        {portfolio.isFetching && <Loading />}
        {!portfolio.isFetching && this.renderLoaded()}
      </div>
    )
  }

  render() {
    const { props } = this;
    const { match, location, portfolio } = props;

    const { id } = match.params;
    if(id === ":id")  {
      return (
        <Redirect to={{
          pathname: compilePath(pathnames.portfolio.home)({ id: -1 })
        }} />
      )
    }

    if(portfolio.id !== -1 && id !== `${portfolio.id}`) {
      return (
        <Redirect to={{
          pathname: compilePath(pathnames.portfolio.home)({ id: portfolio.id })
        }} />
      )
    }

    return (
      <PortfolioLayout location={location}>
        {this.renderContent()}
      </PortfolioLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...portfolioActions,
    ...currencyActions,
    ...coinActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
