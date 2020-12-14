import React from 'react'
import SignIn from './components/SignIn'
import MainUI from './components/MainUI'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'

import { connect } from 'react-redux'

function App(props) {
  const { authedUser } = props

  if (authedUser === null) {
    return (
      <div>
        <SignIn />
      </div>
    )
  }
  return (
    <div>
      <MainUI>

      </MainUI>
    </div>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
