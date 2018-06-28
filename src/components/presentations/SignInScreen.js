import React from "react"
import Layout from './layout/Layout'
import Preloader from './common/Preloader'
import "./../../styles/SignIn.css"

const SignInScreen = (props) => {
  if (!props.auth || props.auth.isFetching) {
    return (
      <div className="row center-align">
        <div className="col s4 offset-s4">
          <Preloader />
        </div>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row social-signin-container">
        <div className="col s10 offset-s1 center-align">
          {/* <img alt="Sign in" id="sign-in" src="/img/user.png" /> */}
          <h4 id="sign-in-header">Sign In</h4>
        </div>
      </div>
      <div className="row">
        <form>
            <div className="input-field">
              <i className="prefix material-icons">account_circle</i>
              <input
                name="username"
                id="username"
                type="text"
              />
              <label htmlFor="username">Username</label>
              </div>
              <div className="input-field">
              <i className="prefix material-icons">security</i>
              <input
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
        </form>
      </div>
      <div className="row signin-div center-align">
      <a href="#" className="btn waves-effect waves-light" onClick={() => props.signIn()}>
            <i className="fa fa-sign-in social-signin-icon" />
            Sign In
        </a>
        <a href="#" className="btn waves-effect waves-light red" onClick={() => props.signInWithGoogle()}>
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
        </a>
        <a href="#" className="btn waves-effect waves-light blue" onClick={() => props.switchSignUp()}>
            <i className="fa fa-user-plus social-signin-icon" />
            Sign Up
        </a>
      </div>
  </div>
  )
}

export default SignInScreen