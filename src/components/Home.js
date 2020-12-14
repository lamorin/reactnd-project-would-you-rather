import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import QuestionResults from './QuestionResults'
import UnansweredQuestion from './UnansweredQuestion'
import { SHOW_QUESTION_TABS, SHOW_QUESTION} from '../actions/home'

class Home extends Component {
  render() {


    const { homeView, selectedQuestion, authedUser } = this.props

    console.log('homeView: ', homeView)

    switch(homeView) {
      case SHOW_QUESTION:
        if (selectedQuestion !== null && (selectedQuestion.optionOne.votes.includes(authedUser.id)  || selectedQuestion.optionTwo.votes.includes(authedUser.id))) {
          return (
            <Container maxWidth="md" align="center">
              <QuestionResults question={selectedQuestion} />
            </Container>)
        }

        if (selectedQuestion !== null && !selectedQuestion.optionOne.votes.includes(authedUser.id)  && !selectedQuestion.optionTwo.votes.includes(authedUser.id)) {
          return (
            <Container maxWidth="md" align="center">
              <UnansweredQuestion question={selectedQuestion} />
            </Container>
            )
        }

          return (
            <Container maxWidth="md" align="center">
              <QuestionsTabs />
            </Container>
          )
      break
      default:
        if (homeView === null || SHOW_QUESTION_TABS) {
          return (
            <Container maxWidth="md" align="center">
              <QuestionsTabs />
            </Container>
          )
        }
    }
  }
}

function mapStateToProps({ selectedQuestion, authedUser, homeView }) {
  return { selectedQuestion, authedUser , homeView }
}

export default connect(mapStateToProps)(Home)
