import React from 'react'
import { translate } from 'react-polyglot';
import Text from 'components/text'
import Divider from 'components/divider'


class ProfilePage extends React.Component {

  render() {
    const { props } = this;
    
    return (
      <div className="my">
        <Text className="mb" theme="h3" block>{props.t("page.settings.profile.accountProfile")}</Text>
        <Divider className="mb--2" />
      </div>
    )
  }
}

export default translate()(ProfilePage);