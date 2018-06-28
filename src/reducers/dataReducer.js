import { FETCH_TODOS_PENDING, FETCH_TODOS_FULFILLED } from "../actions/types"

const initialState = {
  todos: [],
  isFetching: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
      return {
        ...state,
        todos: null,
        isFetching: true
      }
    case FETCH_TODOS_FULFILLED:
      return {
        ...state,
        todos: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}
