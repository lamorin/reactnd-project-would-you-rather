import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {
  Avatar,
  Divider,
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
}))

function LeaderBoardMember(props) {
  const { user, createdQuestions, answeredQuestions } = props
  const { name, avatarURL } = user

  const classes = useStyles()

  console.log('rendering Board Member')

  return (
    <Container maxWidth="sm" style={{ margin: '1.5rem' }}>
      <Paper>
        <Grid container>
          <div className={classes.root}>
            <Avatar alt={name} src={avatarURL} className={classes.medium} />
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <Container
            className={classes.topDivision}
            style={{ margin: '0 auto', width: 'auto' }}
          >

            <Typography variant={'h6'} align={'left'}  className={classes.topDivision}>
              {name}
            </Typography>
            <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <Typography variant={'body1'} align={'left'} style={{display: 'block'}} className={classes.topDivision}>
              Answered Questions
            </Typography>
            <Typography variant={'body1'} align={'right'} style={{display: 'block'}} className={classes.topDivision}>
              {answeredQuestions}
            </Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <Typography  variant={'body1'} align={'left'}  style={{display: 'block'}} className={classes.topDivision}>
              Created Questions
            </Typography>
            <Typography  variant={'body1'} align={'right'} style={{display: 'block'}} className={classes.topDivision}>
              {createdQuestions}
            </Typography>
            </div>
          </Container>
          <Divider orientation="vertical" flexItem></Divider>
          <Container
            className={classes.topDivision}
            style={{ margin: '0 auto', width: 'auto' }}
          >
            <Paper>
              <Typography>Score</Typography>
              <Divider></Divider>
              <Container className={classes.scoreArea}>
                <Avatar className={classes.scoreCircle}>{answeredQuestions + createdQuestions}</Avatar>
              </Container>
            </Paper>
          </Container>
        </Grid>
      </Paper>
    </Container>
  )
}

function mapStateToProps({ questions }) {
  return {

  }
}

export default connect(mapStateToProps)(LeaderBoardMember)
