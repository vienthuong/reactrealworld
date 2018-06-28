import { todosRef, authRef, provider } from "../config/firebase"
import { FETCH_TODOS_PENDING, FETCH_TODOS_FULFILLED, FETCH_POSTS } from "./types"

export const addToDo = (newToDo, uid) => async dispatch => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo)
}

export const completeToDo = (completeToDoId, uid) => async dispatch => {
  todosRef
    .child(uid)
    .child(completeToDoId)
    .remove()
}

export const fetchToDos = uid => dispatch => {
  dispatch({
    type: FETCH_TODOS_PENDING,
    payload: []
  })
  todosRef.child(uid).orderByChild("created_at").on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS_FULFILLED,
      payload: snapshot.val()
    })
  })
}

const getPost = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve("test"), 5000)
  })
}
export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    payload: getPost()
  }
}