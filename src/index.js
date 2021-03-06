import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import middleware from './middleware'
import reducers from './reducers/'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
} from "react-router-dom";

const store = createStore(reducers, middleware)

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
<Router>
    <App />
</Router>
  </Provider>,
  //</React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
