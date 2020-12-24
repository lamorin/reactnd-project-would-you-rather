import React from 'react'
import SignIn from './components/SignIn'
import MainUI from './components/MainUI'

import { connect } from 'react-redux'

import Routes from './Routes'

import { setActiveTab } from './actions/panels'
import handleReceiveQuestions from './actions/questions'

import { Switch, Route } from 'react-router-dom'

function App(props) {
  const { authedUserId, dispatch } = props

  dispatch(handleReceiveQuestions())

  if (authedUserId === null) {
    return <SignIn />
  }

  if (window.location.pathname === '/add') {
    dispatch(setActiveTab(1))
  }

  return (
    <div>
      <MainUI></MainUI>
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

function mapStateToProps({ authedUserId }) {
  return {
    authedUserId,
  }
}

export default connect(mapStateToProps)(App)
