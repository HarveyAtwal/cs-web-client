import React from 'react'
import classNames from 'classnames'
import { translate } from 'react-polyglot';

import Header from 'components/header'
import Text from 'components/text'

import { pathnames } from 'routes'
import './styles.scss'

class DashLayout extends React.Component {
  
  render() {
    const { props } = this;
    
    return (
      <div className='dashlayout'>
        <Header authenticated />
        <div className="dashlayout__container">
          <div className="dashlayout__content p--2">
            {props.children}
          </div>
        </div>
        <div className="dashlayout__footer">
          <div className="footer">
            <div className="footer__content">
              <ul className="footer__links">
                <li><Text color="secondaryText" theme="h5" to={pathnames.index}>{props.t('footer.home')}</Text></li>
                <li><Text color="secondaryText" theme="h5" to={pathnames.terms}>{props.t('footer.terms')}</Text></li>
                <li><Text color="secondaryText" theme="h5" to={pathnames.privacy}>{props.t('footer.privacy')}</Text></li>
              </ul>
              <Text theme="h5" color="secondaryText">{props.t('footer.copy')}</Text>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(DashLayout);