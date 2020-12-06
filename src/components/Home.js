import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import QuestionsTabs from './QuestionsTabs'
import QuestionResults from './QuestionResults'
import UnansweredQuestion from './UnansweredQuestion'

class Home extends Component {
  render() {
    const { selectedQuestion, authedUser } = this.props
    console.log(`selelectedQuestion - ${selectedQuestion}`)

    if (selectedQuestion === null) {
      return (
        <Container maxWidth="md" align="center">
          {selectedQuestion === null && <QuestionsTabs />}
        </Container>
      )
    }

    if (selectedQuestion.optionOne.votes.includes(authedUser.id)  || selectedQuestion.optionTwo.votes.includes(authedUser.id)) {
        return (
        <Container maxWidth="md" align="center">
          <QuestionResults question={selectedQuestion} />
        </Container>)
    }

    if (!selectedQuestion.optionOne.votes.includes(authedUser.id)  && !selectedQuestion.optionTwo.votes.includes(authedUser.id)) {
        return (
        <Container maxWidth="md" align="center">
          <UnansweredQuestion question={selectedQuestion} />
        </Container>
        )
    }

  }
}

function mapStateToProps({ selectedQuestion, authedUser }) {
  return { selectedQuestion, authedUser }
}

export default connect(mapStateToProps)(Home)
