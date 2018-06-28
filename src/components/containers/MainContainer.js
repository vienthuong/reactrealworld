import { Switch, Route } from 'react-router-dom'
import ToDoList from "./ToDoList"
import React from 'react'
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import requireAuth from "../auth/requireAuth"

const MainContainer = () => (
    <Switch>
      <Route exact path='/app' component={requireAuth(ToDoList)}/>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
)

export default MainContainer
