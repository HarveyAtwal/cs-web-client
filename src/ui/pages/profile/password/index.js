import React from 'react'
import { translate } from 'react-polyglot';
import Text from 'ui/components/text'
import Input from 'ui/components/input'
import Button from 'ui/components/button'
import Divider from 'ui/components/divider'


class PasswordPage extends React.Component {
  
  state = {
    currentPassword: "",
    newPassword: "",
    verifyPassword: "",
  }
  
  changePassword = () => {
    
  }
  
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { props, state } = this;
    
    return (
      <div className="my">
        <Text className="mb" theme="h3" block>{props.t("page.settings.password.changePassword")}</Text>
        <Divider className="mb--2" />
          
        <form onSubmit={this.changePassword}>
          <Input className="mb" 
            placeholder={props.t("page.settings.password.currentPassword")} 
            type="password" 
            name="currentPassword" 
            value={state.currentPassword} 
            onChange={this.handleInputChange}
            autoFocus />
          <Input className="mb" 
            placeholder={props.t("page.settings.password.newPassword")} 
            type="password" 
            name="newPassword" 
            value={state.newPassword}
            onChange={this.handleInputChange} />
          <Input className="mb" 
            placeholder={props.t("page.settings.password.verifyPassword")} 
            type="password" 
            name="verifyPassword" 
            value={state.verifyPassword}
            onChange={this.handleInputChange} />
          <Button 
            className="mt"
            type="submit"
            label={props.t("page.settings.password.changePassword")} 
            onClick={this.changePassword} 
            maxWidth />
        </form>
      </div>
    )
  }
}

export default translate()(PasswordPage);