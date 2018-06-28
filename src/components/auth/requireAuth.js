import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Preloader from "../presentations/common/Preloader"

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      console.log(!this.props.authenticated.isFetching && !this.props.authenticated.user)
      if (!this.props.authenticated.isFetching && !this.props.authenticated.user) {
        this.context.router.history.push("/")
      }
    }

    componentWillUpdate(nextProps) {
      console.log(nextProps.authenticated)
      if (!nextProps.authenticated.isFetching && !nextProps.authenticated.user) {
        this.context.router.history.push("/")
      }
    }

    render() {
      if (!this.props.authenticated.isFetching && this.props.authenticated.user) {
        return <ComposedComponent {...this.props} />
      }
      return (
        <div className="row center-align">
          <div className="col s4 offset-s4">
            <Preloader />
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth }
  }

  return connect(mapStateToProps)(Authentication)
}
