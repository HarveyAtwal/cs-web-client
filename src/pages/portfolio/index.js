import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as portfolioActions from 'stores/portfolio';

import PortfolioLayout from 'layouts/portfolio-layout'
import { RouteWithSubRoutes } from 'components/router'
import Loading from 'components/loading'
import AddPortfolioIllustrion from 'widgets/illustrations/add-portfolio'
import { pathnames, compilePath } from 'routes'

class PortfolioPage extends React.Component {

  componentDidMount() {
    this.fetchPortfolio()
  }

  fetchPortfolio() {
    const { fetchPortfolio } = this.props;
    fetchPortfolio();
  }

  renderEmptyState() {
    return <AddPortfolioIllustrion />
  }

  renderLoaded() {
    const { props } = this;
    const { match, routes } = props;

    const { id } = match.params;
    if(id === "-1") {
      return this.renderEmptyState();
    }

    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} componentProps={{ portfolioId: id }} {...route}  />
        ))}
      </div>
    )
  }

  renderContent() {
    const { props } = this;
    const { portfolio } = props;

    return (
      <div>
        {portfolio.isLoading && <Loading />}
        {!portfolio.isLoading && this.renderLoaded()}
      </div>
    )
  }

  render() {
    const { props } = this;
    const { match, location } = props;

    const { id } = match.params;
    if(id === ":id")  {
      return (
        <Redirect to={{
          pathname: compilePath(pathnames.portfolio.home)({ id: -1 })
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
  return bindActionCreators(portfolioActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
