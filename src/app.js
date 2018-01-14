import React from 'react'
import ReactDOM from 'react-dom'

import { I18n } from 'react-polyglot';

import { Provider, connect } from 'react-redux'
import { combineReducers, createStore, bindActionCreators } from 'redux'

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import ToastContainer from 'components/toast/container'
import { RouteWithSubRoutes } from 'components/router'

import stores from 'stores';
import middleware from 'middleware';
import routes from 'routes'
import strings from 'il8n';

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
          <ToastContainer>
            <Router>
                <Switch>
                  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...routes[i]} /> )}
                </Switch>
            </Router>
          </ToastContainer>
        </I18n>
      </Provider>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));