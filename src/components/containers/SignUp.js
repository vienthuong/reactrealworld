import "./../../styles/SignIn.css"
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { authActions } from "../../actions/index"
import PropTypes from "prop-types"
import _ from 'lodash'
import Preloader from "../presentations/common/Preloader"

class SignUp extends PureComponent {
  static contextTypes = {
    router: PropTypes.object
  }
  
  state = {
    formValue:{
        username: "",
        password: "",
        confirm_password: "",    
    },
    formErrors:{
    },
    formValid:{
        username: false,
        password: false,
        confirm_password: false,
    },
    formDirty:{
        username: false,
        password: false,
        confirm_password: false,
    }
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/app")
    }
  }

  switchSignUp(){
    this.context.router.history.push("/sign-up")
  }

  handleFormChange(e){
    const newFormValue = _.cloneDeep(this.state.formValue) 
    const newFormDirty = _.cloneDeep(this.state.formDirty) 
    let newFormErrors = _.cloneDeep(this.state.formErrors)
    newFormValue[`${e.target.name}`] = e.target.value
    newFormDirty[`${e.target.name}`] = true
    newFormErrors = this.validateFields(e.target)
    this.setState({
        formValue:newFormValue,
        formDirty:newFormDirty,
        formErrors:newFormErrors
    })
  }

  validateFields(field){
    const fieldValidationErrors = this.state.formErrors || {}
    const value = field.value
    switch(field.name) {
        case 'username':
          const usernameValid = value.length >= 8 && value.length <= 14
          fieldValidationErrors.username = usernameValid ? false : 'Username length is invalid';
          break
        case 'password':
          const passwordValid = value.length >= 8 && value.length <= 14
          fieldValidationErrors.password = passwordValid ? false: 'Password length is invalid'
          break
        case 'confirm_password':
          const confirmPasswordValid = value === this.state.formValue.password
          fieldValidationErrors.confirm_password = confirmPasswordValid ? false: 'Password is mismatch'
          break
        default:
          break
      }
      return fieldValidationErrors  
  }
  
  signUp(e){
    e.preventDefault();
    const credentical = this.state.formValue;
    let formError = this.state.formErrors;
    const username = credentical.username
    const password = credentical.password
    if(formError.password || formError.confirm_password || formError.username){
      alert("Please enter valid value to signup")
      return
    }
    console.log(credentical)
  }

  render() {
    if (this.props.auth.isFetching) {
      return (
        <div className="row center-align">
          <div className="col s4 offset-s4">
            <Preloader />
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="row social-signin-container">
          <div className="col s10 offset-s1 center-align">
            {/* <img alt="Sign in" id="sign-in" src="/img/user.png" /> */}
            <h4 id="sign-in-header">Sign Up</h4>
          </div>
        </div>
        <div className="row">
          <form onChange={this.handleFormChange.bind(this)}>
            <div className="row">
                <div className="input-field col s12">
                    <i className="prefix material-icons">account_circle</i>
                    <input
                    className={`${this.state.formDirty.username ? this.state.formErrors.username ? "validate invalid" : "validate valid" : ""}`}
                    name="username"
                    id="username"
                    type="text"
                    value={this.state.username}
                    required
                    minLength={8}
                    maxLength={14}
                    />
                    <span className="helper-text" data-error={this.state.formErrors.username} data-success="Username is valid">Username must be 8-14 characters long</span>
                    <label htmlFor="username">Username</label>
                </div>
                </div>
                <div className="row">
                <div className="input-field col s6">
                    <i className="prefix material-icons">security</i>
                    <input
                    className={`${this.state.formDirty.password ? this.state.formErrors.password ? "validate invalid" : "validate valid" : ""}`}
                    name="password"
                    id="password"
                    type="password"
                    required
                    minLength={8}
                    maxLength={14}
                    value={this.state.password}
                    />
                    <label htmlFor="password">Password</label>
                    <span className="helper-text" data-error={this.state.formErrors.password} data-success="Password is valid">Password must be 8-14 characters long</span>
                    </div>
                <div className="input-field col s6">
                    <input
                    className={`${this.state.formDirty.confirm_password ? this.state.formErrors.confirm_password ? "validate invalid" : "validate valid" : ""}`}
                    name="confirm_password"
                    id="confirm_password"
                    type="password"
                    // required
                    equalto="#password"
                    value={this.state.confirm_password}
                    />
                    <span className="helper-text" data-error={this.state.formErrors.confirm_password} data-success="Password is matched">Confirmation Password is matched</span>
                    <label htmlFor="confirm_password">Confirmation Password</label>
                </div>
              </div>
          </form>
        </div>
        <div className="row signin-div center-align">
          <a href="#" className="btn waves-effect waves-light blue" onClick={(e) => this.signUp(e)}>
              <i className="fa fa-user-plus social-signin-icon" />
              Sign Up
          </a>
        </div>
    </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, { signUp:authActions.signUp, signInWithGoogle:authActions.signInWithGoogle })(SignUp)
