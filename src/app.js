import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { I18n } from 'react-polyglot';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import stores from 'stores';
import middleware from 'middleware';
import { RouteWithSubRoutes } from 'components/router'
import routes from 'routes'
import strings from 'il8n';
import 'react-table/react-table.css'
import 'sass/util.scss'


const store = createStore(stores, middleware);

class Application extends React.Component {
  
  state = {
    locale: window.locale || 'en'
  }
  
  render() {
    const { state } = this;
    
    return (
      <Provider store={store}>
        <I18n locale={state.locale} messages={strings[state.locale]}>
          <Router>
            <Switch>
              {routes.map((route, i) => <RouteWithSubRoutes key={i} {...routes[i]} /> )}
            </Switch>
          </Router>
        </I18n>
      </Provider>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));