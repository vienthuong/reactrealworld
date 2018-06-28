import { FETCH_USER, FETCH_USER_PENDING, FETCH_USER_FULFILLED, FETCH_USER_REJECTED } from "../actions/types"

const initialState = {
  user: null,
  userFetched: false,
  isFetching: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        user: null,
        isFetching: true
      }
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      }
    case FETCH_USER_REJECTED:
      return {
        ...state,
        user:null,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
