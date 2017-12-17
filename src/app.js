import React from 'react'
import ReactDOM from 'react-dom'
import { I18n } from 'react-polyglot';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { RouteWithSubRoutes } from 'components/router'
import routes from 'routes'
import strings from 'il8n';
import 'core/main'
import 'sass/util.scss'

class Application extends React.Component {
  
  state = {
    locale: window.locale || 'en'
  }
  
  render() {
    const { state } = this;
    
    return (
      <I18n locale={state.locale} messages={strings[state.locale]}>
        <Router>
          <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...routes[i]} /> )}
          </Switch>
        </Router>
      </I18n>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));