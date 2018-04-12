import React from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-polyglot';
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

  render() {
    const { onClose } = this.props;
    const { props } = this;
    const {
      portfolioName,
      currency,
      accumulatingCurrency
    } = this.state;

    return (
      <Modal title={props.t("modals.createPortfolio.title")}
        onClose={onClose}
        hasFooter >
        <Input className="mb--2"
          placeholder={props.t("modals.createPortfolio.portfolioNamePlaceholder")}
          label={props.t("modals.createPortfolio.portfolioName")}
          name="portfolioName"
          value={portfolioName}
          onChange={this.handleInputChange}
          required
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
  currencies: state.currencies.currencies,
  coins: state.coins.coins
});

export default translate()(connect(mapStateToProps)(CreatePortfolioModal));
