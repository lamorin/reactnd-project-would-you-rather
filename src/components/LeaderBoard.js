import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import LeaderBoardMember from './LeaderBoardMember'

function LeaderBoard(props) {
  const { users, questions } = props

  _.keys(users).map((userId) => {
    users[userId].createdQuestions = _.keys(questions).filter(
      (key) => questions[key].author === userId
    ).length
    users[userId].answeredQuestions = _.keys(questions).filter(
      (key) =>
        questions[key].optionOne.votes.includes(userId) ||
        questions[key].optionTwo.votes.includes(userId)
    ).length
    return users[userId]
  })

  return (
    <Container maxWidth="md" align="center">
      <Paper style={{ padding: '2rem' }}>
        {_.uniq(
          _.reverse(
            _.sortBy(
              _.values(users),
              (user) => user.createdQuestions + user.answeredQuestions
            )
          )
        ).map((user) => (
          <LeaderBoardMember
            key={user.id}
            user={user}
            createdQuestions={user.createdQuestions}
            answeredQuestions={user.answeredQuestions}
          ></LeaderBoardMember>
        ))}
      </Paper>
    </Container>
  )
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
