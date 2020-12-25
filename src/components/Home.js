import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import FullPoll from './FullPoll'
import Page404 from './Page404'

import { QUESTION_TABS, FULL_POLL, PAGE_404 } from '../reducers/homeUI'

import { withRouter } from 'react-router-dom'
import { setSelectedQuestion } from '../actions/selectedQuestion'

import { viewFullPoll, show404 } from '../actions/homeUI'
class Home extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props

    if (params.question_id !== undefined) {
      const question = this.props.questions[params.question_id]
      if (question !== undefined) {
        this.props.dispatch(setSelectedQuestion(params.question_id))
        this.props.dispatch(viewFullPoll())
      } else {
        this.props.dispatch(show404())
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
      case PAGE_404:
        return (
          <Container align="center">
            <Page404></Page404>
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
