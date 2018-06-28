import React, { PureComponent } from "react"
import { connect } from "react-redux"
import _ from "lodash"
import { todoActions, authActions } from "../../actions/index"
import ToDoListItem from "../presentations/partial/ToDoListItem"
import ToDoListScreen from "../presentations/ToDoListScreen"
import moment from 'moment'

class ToDoList extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      addFormVisible: false,
      addFormValue: ""
    }
    console.log("Todos",props.todos)
  }

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value })
  }

  toggleAddFormVisible = event => {
    this.setState({ addFormVisible: !this.state.addFormVisible })
  }

  handleFormSubmit = event => {
    const { addFormValue } = this.state
    const { addToDo, auth } = this.props
    event.preventDefault()
    addToDo({ title: addFormValue, created_at: moment().format().toString() }, auth.uid)
    this.setState({ addFormValue: "" })
  }

  handleCompleteTodo = completeTodoId => {
    const { completeToDo, auth } = this.props
    completeToDo(completeTodoId, auth.uid)
  }

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state
    if (addFormVisible) {
      return (
        <div id="todo-add-form" className="col s12">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">note_add</i>
              <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What To Do Next</label>
            </div>
          </form>
        </div>
      )
    }
  }

  renderToDos() {
    const {todos} = this.props.data
    const toDos = _.map(todos, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} handleCompleteTodo={this.handleCompleteTodo} />
    })
    if (!_.isEmpty(toDos)) {
      return toDos
    }
    return (
      <div className="col s12 center-align">
        <img
          alt="Nothing was found"
          id="nothing-was-found"
          src="/img/nothing.png"
        />
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    )
  }

  componentWillMount() {
    const { auth } = this.props
    this.props.fetchToDos(auth.uid)
    // this.props.fetchPosts()
  }

  render() {
    const { addFormVisible } = this.state
    console.log(this.props.data)
    return (
      <ToDoListScreen toggleAddFormVisible={this.toggleAddFormVisible.bind(this)}
      addFormVisible={this.state.addFormVisible}
      renderAddForm={this.renderAddForm.bind(this)}
      renderToDos={this.renderToDos.bind(this)}
      signOut={this.props.signOut}
      data={this.props.data}
      />
    )
  }
}

const mapStateToProps = ({ data, auth, post }) => {
  return {
    data,
    auth:auth.user,
    post
  }
}

export default connect(mapStateToProps, {
  addToDo:todoActions.addToDo,
  fetchToDos:todoActions.fetchToDos,
  signOut:authActions.signOut, 
  fetchPosts:todoActions.fetchPosts,
  completeToDo:todoActions.completeToDo
})(ToDoList)
