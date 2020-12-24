import React from 'react'
import { connect } from "react-redux";
import _ from 'lodash'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { formatQuestion } from '../utils/helpers'
import QuestionPreview from './QuestionPreview'

function Questions(props) {
  const { users, questions } = props;

  _.keys(users).map((userId)=>{
    users[userId].createdQuestions = _.keys(questions).filter((key) => (questions[key].author === userId)).length
    users[userId].answeredQuestions = _.keys(questions).filter((key) => questions[key].optionOne.votes.includes(userId) || questions[key].optionTwo.votes.includes(userId)).length
    return users[userId]
  })

  const formattedQuestions = _.values(questions).map((q) => formatQuestion(q, users[q.author]))

  return (
      <Container maxWidth="md" align="center">
        <Paper style={{padding: '2rem'}}>
          { formattedQuestions.map((q) => <QuestionPreview key={q.id} question={q}></QuestionPreview>) }
        </Paper>
      </Container>
  );
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  };
}

export default connect(mapStateToProps)(Questions);
