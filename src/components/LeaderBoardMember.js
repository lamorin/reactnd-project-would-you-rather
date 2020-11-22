import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
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
  const { question } = props
  const { name, avatarURL } = question

  const classes = useStyles()

  return (
    <Container maxWidth="sm" style={{ margin: '1.5rem' }}>
      <Paper>
        <Typography align={'left'} className={classes.topDivision}>
          {name} asks:
        </Typography>
        <Divider></Divider>
        <Grid container>
          <div className={classes.root}>
            <Avatar alt={name} src={avatarURL} className={classes.medium} />
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <Container
            className={classes.topDivision}
            style={{ margin: '0 auto', width: 'auto' }}
          >
            <p>Results:</p>
            <p>...{question.optionOne.text.substring(0, 1000)}...</p>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              View full poll
            </Button>
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
                <Avatar className={classes.scoreCircle}>{10}</Avatar>
              </Container>
            </Paper>
          </Container>
        </Grid>
      </Paper>
    </Container>
  )
}

function mapStateToProps({ activePanel }) {
  return {
    activePanel,
  }
}

export default connect(mapStateToProps)(LeaderBoardMember)
