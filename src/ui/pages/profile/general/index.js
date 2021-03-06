import React from 'react'
import { translate } from 'react-polyglot';
import { connect } from 'react-redux'

import Avatar from 'ui/components/avatar'
import Text from 'ui/components/text'
import Input from 'ui/components/input'
import Button from 'ui/components/button'
import Divider from 'ui/components/divider'
import Select from 'ui/components/select'


class GeneralProfilePage extends React.Component {

  state = {
    username: "",
    email: "",
    timeZone: ""
  }

  handleTimeZoneChange = (timeZone) => {
    this.setState({ timeZone });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  buildTimeZoneOptions() {
    return [
      { value: 'one', label: '(GMT-11:00) Midway Island' }
    ];
  }

  render() {
    const { props } = this;
    const { user } = props;
    const {
      username,
      email,
      timeZone
    } = this.state;

    return (
      <div className="my">
        <Text className="mb" theme="h3" block>{props.t("page.settings.profile.accountProfile")}</Text>
        <Divider className="mb--2" />

        <div className="center mb">
          <Text className="input__label" theme="h5" block semiBold>{props.t("user.profilePhoto")}</Text>
          <Avatar size="avatar-upload" />
        </div>

        <Input className="mb--2"
          label={props.t("user.username")}
          placeholder={props.t("user.username")}
          name="username"
          value={username || user.username}
          onChange={this.handleInputChange}
          disabled />

        <Input className="mb--2"
          label={props.t("user.email")}
          placeholder={props.t("user.email")}
          name="email"
          value={email || user.email}
          onChange={this.handleInputChange}
          disabled />

        <Select className="mb--2"
          label={props.t("user.timeZone")}
          value={timeZone && timeZone.value}
          onChange={this.handleTimeZoneChange}
          clearable={false}
          options={this.buildTimeZoneOptions()}  />

        <Button
          className="mt"
          type="submit"
          label={props.t("page.settings.profile.saveChanges")}
          maxWidth />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.entities.users[state.user.id],
})

export default translate()(connect(mapStateToProps)(GeneralProfilePage));
