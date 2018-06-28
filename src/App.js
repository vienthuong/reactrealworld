import React, { PureComponent } from "react"
import MainContainer from "./components/containers/MainContainer"
import { BrowserRouter } from "react-router-dom"
import { connect } from "react-redux"
import { authActions } from "./actions/index"

class App extends PureComponent {
  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <BrowserRouter>
        <MainContainer/>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser:authActions.fetchUser })(App)
