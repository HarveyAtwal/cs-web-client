import React from 'react'
import classNames from 'classnames';

import { translate } from 'react-polyglot';
import Card from 'components/card'
import Text from 'components/text'
import Modal from 'components/modal'
import Illustration from 'components/illustration'

import addPortfolioSVG from './add-portfolio.svg'

class AddPortfolioIllustration extends React.Component {

  state = {
    showCreatePortfolioModal: false
  }

  renderCreatePortfolioModal() {
    const { props } = this;

    return (
      <Modal
        onClose={this.handleCreatePortfolioModalClose}
        title={props.t("illustrations.addPortfolio.action")}
        hasFooter >
      </Modal>
    )
  }

  render() {
    const { props, state } = this;
    const { showCreatePortfolioModal } = state;

    return (
      <Card noPadding>
        {showCreatePortfolioModal && this.renderCreatePortfolioModal()}
        <Illustration
          src={addPortfolioSVG}
          title={props.t("illustrations.addPortfolio.title")}
          desc={props.t("illustrations.addPortfolio.desc")}
          action={props.t("illustrations.addPortfolio.action")}
          onActionClick={this.handleCreatePortfolioAction}
          padded />
      </Card>
    )
  }

  handleCreatePortfolioAction = () => {
    this.setState({ showCreatePortfolioModal: true })
  }
  handleCreatePortfolioModalClose = () => {
    this.setState({ showCreatePortfolioModal: false })
  }
}

export default translate()(AddPortfolioIllustration)
