import { has } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import QuestionResults from './QuestionResults'
import UnansweredQuestion from './UnansweredQuestion'

function FullPoll(props) {
  const { selectedQuestionId, questions, authedUserId } = props

  const question = questions[selectedQuestionId]

  const hasBeenAnsweredByAuthedUser =
    question.optionOne.votes.includes(authedUserId) ||
    question.optionTwo.votes.includes(authedUserId)

  const componentToReturn = hasBeenAnsweredByAuthedUser ? (
    <QuestionResults></QuestionResults>
  ) : (
    <UnansweredQuestion></UnansweredQuestion>
  )

  return componentToReturn
}

function mapStateToProps(selectedQuestionId, questions, authedUserId) {
  return { selectedQuestionId, questions, authedUserId }
}

export default connect(mapStateToProps)(FullPoll)
