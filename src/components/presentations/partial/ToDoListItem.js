import React from "react"
import moment from 'moment'

const ToDoListItem = (props) => {
    const { todoId, todo } = props
    return (
      <div key="toDoName" className="col s12 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <small>({moment(todo.created_at).fromNow()})</small>
          <span
            onClick={() => props.completeToDo(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    )
}

export default ToDoListItem
