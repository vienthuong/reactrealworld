
import { FETCH_POSTS_PENDING, FETCH_POSTS_FULFILLED } from "../actions/types"

const initialPostsState = {
    isFetching: false,
    error: false
  }
  
  export default (state = initialPostsState, action) => {
    switch (action.type) {
      case FETCH_POSTS_PENDING:
        return {
          ...state,
          isFetching: true
        }
      case FETCH_POSTS_FULFILLED:
        return {
          ...state,
          isFetching: false
        }
      default:
        return state
    }
  }