import { FETCH_USER_FULFILLED,FETCH_USER_PENDING, FETCH_USER_REJECTED } from "./types"
import { todosRef, authRef, provider } from "../config/firebase"

export const fetchUser = () => dispatch => {
  dispatch({
    type: FETCH_USER_PENDING,
    payload: null
  })
    authRef.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: FETCH_USER_FULFILLED,
          payload: user
        })
      } else {
        dispatch({
          type: FETCH_USER_REJECTED,
          payload: null
        })
      }
    })
  }
  
  export const signIn = (username, password) => dispatch => {
    authRef
      .signInWithEmailAndPassword(username, password)
      .then(result => {})
      .catch(error => {
        console.log(error)
      })
  }
  
  export const signInWithGoogle = () => dispatch => {
    authRef
      .signInWithPopup(provider)
      .then(result => {})
      .catch(error => {
        console.log(error)
      })
  }
  
  export const signOut = () => dispatch => {
    authRef
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  export const signUp = (username, password) => {
    authRef.createUserWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }