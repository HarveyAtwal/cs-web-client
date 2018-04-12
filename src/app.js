import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { I18n } from 'react-polyglot';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import ToastContainer from 'ui/components/toast/container'
import { RouteWithSubRoutes } from 'ui/components/router'

import middleware from 'core/middleware';
import stores from 'stores';
import routes from 'routes'
import strings from 'il8n';

import 'sass/base.scss'

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
