import React from 'react'
import classNames from 'classnames'

import Header from 'components/header'
import Text from 'components/text'
import './styles.scss'

class AuthLayout extends React.Component {
  render() {
    const { props } = this;
    
    const contentClasses = classNames({
      "authlayout__content": true,
      "authlayout__content--large": props.largeContent
    })
    
    return (
      <div className='authlayout'>
        <Header primaryBg />
        <div className="authlayout__container">
          <div className={contentClasses}>
            <Text className="authlayout__title" theme="h1" color="white" block center>{props.title}</Text>
            {props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default AuthLayout