import { combineReducers } from "redux"

import data from "./dataReducer"
import auth from "./authReducer"
import post from "./postReducer"
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  data,
  auth,
  post,
  loadingBar: loadingBarReducer
})
