import React from 'react'
import { translate } from 'react-polyglot';
import Text from 'components/text'
import Divider from 'components/divider'


class ApiPage extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <div className="my">
        <Text className="mb" theme="h3" block>{props.t("page.settings.api.title")}</Text>
        <Divider className="mb--2" />
      </div>
    )
  }
}

export default translate()(ApiPage);