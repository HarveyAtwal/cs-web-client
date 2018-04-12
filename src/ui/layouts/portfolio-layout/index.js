import React from 'react'
import { translate } from 'react-polyglot';

import Header from 'ui/components/header'
import Text from 'ui/components/text'

import { pathnames } from 'routes'
import './styles.scss'

class PortfolioLayout extends React.Component {

  render() {
    const { props } = this;
    const { location } = props;

    return (
      <div className='portfolio-layout'>
        <Header authenticated location={location} />
        <div className="portfolio-layout__container">
          <div className="portfolio-layout__content">
            {props.children}
          </div>
        </div>
        <div className="portfolio-layout__footer">
          <div className="footer">
            <div className="footer__content">
              <ul className="footer__links">
                <li><Text color="secondaryText" theme="h5" to={pathnames.index}>{props.t('footer.home')}</Text></li>
                <li><Text color="secondaryText" theme="h5" to={pathnames.terms}>{props.t('legal.terms')}</Text></li>
                <li><Text color="secondaryText" theme="h5" to={pathnames.privacy}>{props.t('legal.privacy')}</Text></li>
              </ul>
              <Text theme="h5" color="secondaryText">{props.t('footer.copy')}</Text>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(PortfolioLayout);
