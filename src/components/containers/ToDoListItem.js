import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { todoActions } from "../../actions/index"
import moment from 'moment'

class ToDoListItem extends PureComponent {
  handleCompleteClick = completeToDoId => {
    const { completeToDo, auth } = this.props
    completeToDo(completeToDoId, auth.uid)
  }

  render() {
    const { todoId, todo } = this.props
    return (
      <div key="toDoName" className="col s12 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <small>({moment(todo.created_at).fromNow()})</small>
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth:auth.user
  }
}

export default connect(mapStateToProps, { completeToDo:todoActions.completeToDo })(ToDoListItem)
