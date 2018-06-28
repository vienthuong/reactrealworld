import "./../../styles/SignIn.css"
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { authActions } from "../../actions/index"
import PropTypes from "prop-types"
import SignInScreen from "../presentations/SignInScreen";

class Signin extends PureComponent {
  constructor(props){
    super(props)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillUpdate(nextProps) {
    if (nextProps.auth.user) {
      this.context.router.history.push("/app")
    }
  }

  switchSignUp(){
    this.context.router.history.push("/sign-up")
  }

  render() {
    return (
      <SignInScreen auth={this.props.auth} 
      switchSignUp={this.switchSignUp}
      signInWithGoogle={this.props.signInWithGoogle}
      signIn={this.props.signIn}
      />
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, { signIn:authActions.signIn, signInWithGoogle:authActions.signInWithGoogle })(Signin)
