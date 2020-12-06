import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'

import {
  Avatar,
  Divider,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'

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
  const { question, authedUser } = props
  const { authorId, name, avatarURL, optionOne, optionTwo } = question

  console.log('Option One', optionOne)
  console.log('Option Two', optionTwo)

  const classes = useStyles()

  const percentage1 =
    (optionOne.votes.length * 100) /
    (optionOne.votes.length + optionTwo.votes.length)

  return (
    <Container maxWidth="sm" style={{ margin: '1.5rem' }}>
      <Paper>
        <Typography align={'left'} className={classes.topDivision}>
          {question.name}
        </Typography>
        <Divider></Divider>
        <Grid container>
          <div className={classes.root}>
            <Avatar alt={name} src={avatarURL} className={classes.avatar} />
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
                backgroundColor: optionOne.votes.includes(authedUser.id)
                  ? 'grey'
                  : 'transparent',
              }}
            >
              <div
                style={{
                  display: true ? 'none' : 'flex',
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
                    {percentage1}%
                  </span>
                </div>
              </div>
              <p>
                {optionOne.votes.length} of{' '}
                {optionOne.votes.length + optionTwo.votes.length}
              </p>
            </Container>
            <Container
              disableGutters={true}
              style={{
                position: 'relative',
                padding: '0 0.5rem',
                marginTop: '2rem',
                backgroundColor: optionTwo.votes.includes(authedUser.id)
                  ? 'grey'
                  : 'transparent',
              }}
            >
              <div
                style={{
                  display: false? 'none' : 'flex',
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
                    {100 - percentage1}%
                  </span>
                </div>
              </div>
              <p>
                {optionTwo.votes.length} of{' '}
                {optionOne.votes.length + optionTwo.votes.length}
              </p>
            </Container>
          </Container>
        </Grid>
      </Paper>
    </Container>
  )
}

function mapStateToProps({ activePanel, selectedQuestion, authedUser }) {
  console.log(selectedQuestion)
  console.log('AUTHED', authedUser)
  return {
    activePanel,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionResults)
