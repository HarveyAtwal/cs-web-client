import React from 'react'
import classNames from 'classnames'

import Header from 'components/header'
import Text from 'components/text'
import './styles.scss'

class AuthLayout extends React.Component {
  render() {
    const { props } = this;

    const contentClasses = classNames({
      "auth-layout__content": true,
      "auth-layout__content--large": props.largeContent
    })

    return (
      <div className='auth-layout'>
        <Header primaryBg />
        <div className="auth-layout__container">
          <div className={contentClasses}>
            <Text className="auth-layout__title" theme="h1" color="white" block center>{props.title}</Text>
            {props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default AuthLayout
