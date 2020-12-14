import React from 'react'
import SignIn from './components/SignIn'
import MainUI from './components/MainUI'

import { connect } from 'react-redux'

function App(props) {
  const { authedUser } = props

  if (authedUser === null) {
    return (<SignIn />)
  }

  return (<MainUI></MainUI>)
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
