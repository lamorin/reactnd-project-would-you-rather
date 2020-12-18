import React from 'react'
import SignIn from './components/SignIn'
import MainUI from './components/MainUI'

import { connect } from 'react-redux'

import Routes from "./components/Routes"

import {
  Switch,
  Route
} from "react-router-dom";

function App(props) {
  const { authedUser } = props

  if (authedUser === null) {
    return (<SignIn />)
  }

  return (
   <div>
    <MainUI>

    </MainUI>
    <Switch>
      {Routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
