import React from 'react'
import { translate } from 'react-polyglot';
import AuthLayout from 'layouts/auth-layout'
import Text from 'components/text'


class NoMatch extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <AuthLayout largeContent>
        <Text color="white" center block>
          <Text className="pt--2" theme="display" block bold uppercase>{props.t("page.404.title")}</Text>
          <Text className="py--2" theme="h2" block>{props.t("page.404.description")}</Text>
        </Text>
      </AuthLayout>
    )
  }
}

export default translate()(NoMatch);