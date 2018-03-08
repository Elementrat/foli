import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import portfolioApp from './reducers/index'
import './index.css';
import App from './containers/AppContainer';

//create store
const store = createStore(portfolioApp)

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>, document.getElementById('root'))
  
registerServiceWorker()

export default store