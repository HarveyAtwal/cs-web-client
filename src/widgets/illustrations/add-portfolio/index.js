import React from 'react'
import classNames from 'classnames';

import { translate } from 'react-polyglot';
import Card from 'components/card'
import Text from 'components/text'
import Illustration from 'components/illustration'

import addPortfolioSVG from './add-portfolio.svg'

class AddPortfolioIllustration extends React.Component {

  render() {
    const { props } = this;

    return (
      <Card noPadding>
        <Illustration
          src={addPortfolioSVG}
          title={props.t("illustrations.addPortfolio.title")}
          desc={props.t("illustrations.addPortfolio.desc")}
          action={props.t("illustrations.addPortfolio.action")}
          padded />
      </Card>
    )
  }
}

export default translate()(AddPortfolioIllustration)
