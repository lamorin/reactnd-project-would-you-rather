import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import QuestionResults from './QuestionResults'
import FullPoll from './FullPoll'
import UnansweredQuestion from './UnansweredQuestion'
import {
  QUESTION_TABS,
  UNANSWERED_QUESTION,
  QUESTION_RESULTS,
  FULL_POLL,
} from '../reducers/home'

import { withRouter } from 'react-router-dom'

class Home extends Component {
  render() {
    const { homeUI } = this.props

    switch (homeUI.view) {
      case UNANSWERED_QUESTION:
        return (
          <Container maxWidth="md" align="center">
            <UnansweredQuestion />
          </Container>
        )

      case QUESTION_RESULTS:
        return (
          <Container maxWidth="md" align="center">
            <QuestionResults />
          </Container>
        )

      case QUESTION_TABS:
        return (
          <Container maxWidth="md" align="center">
            <QuestionsTabs />
          </Container>
        )

      case FULL_POLL:
        return (
          <Container maxWidth="md" align="center">
            <FULL_POLL />
          </Container>
        )

      default:
        return (
          <Container maxWidth="md" align="center">
            <QuestionsTabs />
          </Container>
        )
    }
  }
}

function mapStateToProps({ homeUI }) {
  return { homeUI }
}

export default withRouter(connect(mapStateToProps)(Home))
