import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import FullPoll from './FullPoll'

import { QUESTION_TABS, FULL_POLL } from '../reducers/homeUI'

import { withRouter } from 'react-router-dom'
import { setSelectedQuestion } from '../actions/selectedQuestion'

import { viewFullPoll } from '../actions/homeUI'
class Home extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props

    if (params.questionid !== undefined) {
      const question = this.props.questions[params.questionid]
      if (question !== undefined) {
        this.props.dispatch(setSelectedQuestion(params.questionid))
        this.props.dispatch(viewFullPoll())
      }
    }
  }

  render() {
    const { homeUI } = this.props

    switch (homeUI) {
      case QUESTION_TABS:
        return (
          <Container maxWidth="md" align="center">
            <QuestionsTabs />
          </Container>
        )

      case FULL_POLL:
        return (
          <Container maxWidth="md" align="center">
            <FullPoll />
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

function mapStateToProps({ homeUI, questions }) {
  return { homeUI, questions }
}

export default withRouter(connect(mapStateToProps)(Home))
