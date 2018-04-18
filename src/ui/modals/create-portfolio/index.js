import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-polyglot';
import * as portfolioActions from 'stores/portfolio';
import Modal from 'ui/components/modal'
import Input from 'ui/components/input'
import Select from 'ui/components/select'

class CreatePortfolioModal extends React.Component {

  static defaultProps = {
    onClose: () => {},
    currencies: [],
    coins: []
  }

  state = {
    portfolioName: "",
    currency: {},
    accumulatingCurrency: {},
    invalid: false
  }

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      accumulatingCurrency: this.getDefaultCoin(props.coins),
      currency: this.getDefaultCurrency(props.currencies)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currencies, coins } = nextProps;
    if(currencies.length && coins.length) {
      this.setState({
        accumulatingCurrency: this.getDefaultCoin(coins),
        currency: this.getDefaultCurrency(currencies)
      });
    }
  }

  postPortfolio() {
    const { postPortfolio, portfolio } = this.props;
    const {
      portfolioName,
      currency,
      accumulatingCurrency
    } = this.state;

    postPortfolio({
      displayName: portfolioName,
      localCurrency: currency.value,
      accumulatingCurrency: accumulatingCurrency.value,
      isDefault: portfolio.id === -1
    });
  }

  render() {
    const { onClose, portfolio } = this.props;
    const { props } = this;
    const {
      portfolioName,
      currency,
      accumulatingCurrency,
      invalid
    } = this.state;

    return (
      <Modal title={props.t("modals.createPortfolio.title")}
        onActionClick={this.handleCreatePortfolio}
        onClose={onClose}
        actionSaving={portfolio.isPosting}
        hasFooter >
        <Input className="mb--2"
          placeholder={props.t("modals.createPortfolio.portfolioNamePlaceholder")}
          label={props.t("modals.createPortfolio.portfolioName")}
          name="portfolioName"
          value={portfolioName}
          onChange={this.handleInputChange}
          error={invalid}
          required
          maxLength={50}
          autoFocus />

        <Select className="mb--2"
          label={props.t("modals.createPortfolio.currency")}
          value={currency.value}
          onChange={this.handleCurrencyChange}
          clearable={false}
          options={this.buildCurrencyOptions()} />

        <Select className="mb--2"
          label={props.t("modals.createPortfolio.accumulatingCurrency")}
          value={accumulatingCurrency.value}
          onChange={this.handleAccumulatingCurrencyChange}
          clearable={false}
          options={this.buildAccumulatingCurrencyOptions()} />
      </Modal>
    )
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCurrencyChange = (currency) => {
    this.setState({ currency });
  }
  handleAccumulatingCurrencyChange = (accumulatingCurrency) => {
    this.setState({ accumulatingCurrency });
  }

  handleCreatePortfolio = () => {
    const { portfolioName } = this.state;
    if(!portfolioName) {
      this.setState({ invalid: true });
      return;
    }

    this.postPortfolio();
  }

  //
  // Misc Methods
  //
  buildCurrencyOptions() {
    const { currencies } = this.props;
    return currencies.map((currency) => ({
      label: `${currency.name} (${currency.code})`,
      value: currency.id,
    }))
  }

  buildAccumulatingCurrencyOptions() {
    const { coins } = this.props;
    return coins.map((coin) => ({
      label: `${coin.name} (${coin.code})`,
      value: coin.id,
    }))
  }

  getDefaultCoin(coins = []) {
    const btc = coins.find((coin) => coin.code === "BTC");
    return { value: btc && btc.id }
  }
  getDefaultCurrency(currencies = []) {
    const usd = currencies.find((currency) => currency.code === "USD")
    return { value: usd && usd.id }
  }
}

const mapStateToProps = (state) => ({
  currencies: Object.values(state.entities.currencies),
  coins: Object.values(state.entities.coins),
  portfolio: state.portfolio
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(portfolioActions, dispatch)
}

export default translate()(connect(mapStateToProps, mapDispatchToProps)(CreatePortfolioModal));
