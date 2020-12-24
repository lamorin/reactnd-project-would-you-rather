import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { formatQuestion } from '../utils/helpers'

import { Avatar, Divider, Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  topDivision: {
    padding: theme.spacing(2),
  },
  rightDivision: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  scoreArea: {
    padding: theme.spacing(3),
    backgroundColor: '#e6e5e5',
  },
  scoreCircle: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(3),
  },
}))

function QuestionResults(props) {
  const { users, questions, authedUserId, selectedQuestion } = props
  const { name, optionOne, optionTwo } = selectedQuestion

  const formattedSelectedQuestion = formatQuestion(
    questions[selectedQuestion.id],
    users[questions[selectedQuestion.id].author]
  )

  const classes = useStyles()

  const percentage1 =
    (optionOne.votes.length * 100) /
    (optionOne.votes.length + optionTwo.votes.length)

  return (
    <Container maxWidth="sm" style={{ margin: '1.5rem' }}>
      <Paper>
        <Typography align={'left'} className={classes.topDivision}>
          {name}
        </Typography>
        <Divider></Divider>
        <Grid container>
          <div className={classes.root}>
            <Avatar
              alt={formattedSelectedQuestion.name}
              src={formattedSelectedQuestion.avatarURL}
              className={classes.avatar}
            />
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <Container
            className={classes.topDivision}
            style={{ width: '66.66%' }}
          >
            <Container
              disableGutters={true}
              style={{
                position: 'relative',
                padding: '0 0.5rem',
                marginBottom: '1rem',
                border: '1px solid #e6e5e5',
                borderRadius: '2px',
              }}
            >
              <div
                style={{
                  display: formattedSelectedQuestion.optionOne.votes.includes(
                    authedUserId.id
                  )
                    ? 'flex'
                    : 'none',
                  height: '3rem',
                  width: '3rem',
                  backgroundColor: 'red',
                  position: 'absolute',
                  right: '-1.5rem',
                  top: '-1.5rem',
                  alignItems: 'center',
                  borderRadius: '50px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.6rem',
                    lineHeight: '0.7rem',
                    width: '100%',
                  }}
                >
                  Your
                  <br />
                  Vote
                </span>
              </div>
              <p style={{ textAlign: 'left', marginTop: 0 }}>
                {optionOne.text}
              </p>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: '#3f51b5',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f50057',
                    textAlign: 'right',
                    fontSize: '1rem',
                    lineHeight: '1.9rem',
                    width: `${percentage1}%`,
                    color: 'white',
                  }}
                >
                  <span style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                    {percentage1.toFixed(0)}%
                  </span>
                </div>
              </div>
              <p>
                {formattedSelectedQuestion.optionOne.votes.length} of{' '}
                {formattedSelectedQuestion.optionOne.votes.length +
                  formattedSelectedQuestion.optionTwo.votes.length}
              </p>
            </Container>
            <Container
              disableGutters={true}
              style={{
                position: 'relative',
                padding: '0 0.5rem',
                marginTop: '2rem',
                border: '1px solid #e6e5e5',
                borderRadius: '2px',
              }}
            >
              <div
                style={{
                  display: formattedSelectedQuestion.optionTwo.votes.includes(
                    authedUserId.id
                  )
                    ? 'flex'
                    : 'none',
                  height: '3rem',
                  width: '3rem',
                  backgroundColor: 'red',
                  position: 'absolute',
                  right: '-1.5rem',
                  top: '-1.5rem',
                  alignItems: 'center',
                  borderRadius: '50px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.6rem',
                    lineHeight: '0.7rem',
                    width: '100%',
                  }}
                >
                  Your
                  <br />
                  Vote
                </span>
              </div>
              <p style={{ textAlign: 'left', marginTop: 0 }}>
                {optionTwo.text}
              </p>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: '#3f51b5',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f50057',
                    textAlign: 'right',
                    fontSize: '1rem',
                    lineHeight: '1.9rem',
                    width: `${100 - percentage1}%`,
                    color: 'white',
                  }}
                >
                  <span style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                    {(100 - percentage1).toFixed(0)}%
                  </span>
                </div>
              </div>
              <p>
                {formattedSelectedQuestion.optionTwo.votes.length} of{' '}
                {formattedSelectedQuestion.optionOne.votes.length +
                  formattedSelectedQuestion.optionTwo.votes.length}
              </p>
            </Container>
          </Container>
        </Grid>
      </Paper>
    </Container>
  )
}

function mapStateToProps({
  users,
  activeTab,
  selectedQuestion,
  authedUserId,
  questions,
}) {
  return {
    users,
    activeTab,
    authedUserId,
    selectedQuestion,
    questions,
  }
}

export default connect(mapStateToProps)(QuestionResults)
