import _ from 'lodash'
import dispatcher from 'core/dispatcher'

class AuthController {
  constructor() {
    _.extend(this, dispatcher);
    this.initialize();
  }
  
  initialize() {
    this.bindActions({
      "auth:signin": this.signin,
      "auth:signout": this.signout
    });
    
    window.isAuthenticated = this.isAuthenticated()
  }
  
  signin(payload) {
    window.isAuthenticated = true
  }
  
  signout() {
    window.isAuthenticated = false
  }
  
  isAuthenticated() {
    return false;
  }
}

export default AuthController