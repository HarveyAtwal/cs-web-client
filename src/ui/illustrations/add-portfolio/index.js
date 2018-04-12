import React from 'react'

import { translate } from 'react-polyglot';
import Card from 'ui/components/card'
import Illustration from 'ui/components/illustration'
import CreatePortfolioModal from 'ui/modals/create-portfolio'
import addPortfolioSVG from './add-portfolio.svg'

class AddPortfolioIllustration extends React.Component {

  state = {
    showCreatePortfolioModal: false
  }

  renderCreatePortfolioModal() {
    return (
      <CreatePortfolioModal
        onClose={this.handleCreatePortfolioModalClose}/>
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
