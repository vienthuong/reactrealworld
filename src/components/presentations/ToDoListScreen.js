import React from "react"
import Layout from './layout/Layout'
import Preloader from './common/Preloader'
import "./../../styles/ToDoList.css"

const ToDoListScreen = (props) => {
  if (!props.data || props.data.isFetching) {
    return (
      <div className="row center-align">
        <div className="col s4 offset-s4">
          <Preloader />
        </div>
      </div>
    )
  }
  return(
    <Layout>
      <div className="to-do-list-container">
        <div className="row">
          {props.renderAddForm()}
          {props.renderToDos()}
        </div>
        <div className="fixed-action-btn">
          <button
            onClick={() => props.signOut()}
            id="sign-out-button"
            className="btn-floating btn-large teal darken-4"
          >
            <i className="large material-icons">exit_to_app</i>
          </button>
          <button
            onClick={() => props.toggleAddFormVisible()}
            className="btn-floating btn-large teal darken-4"
          >
            {props.addFormVisible ? (
              <i className="large material-icons">close</i>
            ) : (
              <i className="large material-icons">add</i>
            )}
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default ToDoListScreen