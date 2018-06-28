import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import promiseMiddleware from 'redux-promise-middleware'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import logger from 'redux-logger'
import reducers from "./reducers"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

let middleware = [reduxThunk, promiseMiddleware(), loadingBarMiddleware(), logger]
const store = createStore(reducers, {}, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker()
