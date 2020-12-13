import {handleSaveQuestionAnswer} from '../actions/questions'
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

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
}))

function UnansweredQuestion(props) {
  const { selectedQuestion, authedUser, dispatch } = props
  const classes = useStyles()
  const [answer, setValue] = React.useState("optionOne");

  const question = selectedQuestion
  const { name, avatarURL } = question

  const handleSubmit = (e) =>  {
    e.preventDefault()
    dispatch(handleSaveQuestionAnswer(authedUser.id, question, answer))

  }

  const handleRadioChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Container maxWidth="sm" style={{ margin: '1.5rem' }}>
      <Paper>
        <Typography align={'left'} className={classes.topDivision}>
          {name} asks:
        </Typography>
        <Divider></Divider>
        <Grid container>
          <div className={classes.root}>
            <Avatar alt={name} src={avatarURL} className={classes.large} />
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <Container
            className={classes.topDivision}
            style={{ margin: '0 auto', width: 'auto' }}
          >
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" error={false} className={classes.formControl}>
                <FormLabel component="legend">Would you rather...</FormLabel>
                <RadioGroup aria-label="quiz" name="quiz" value={answer} onChange={handleRadioChange}>
                  <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                  <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text}  />
                </RadioGroup>
                <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                  Check Answer
                </Button>
              </FormControl>
            </form>
          </Container>
        </Grid>
      </Paper>
    </Container>
  )
}

function mapStateToProps({ selectedQuestion, authedUser, questions }) {
  return {
    selectedQuestion,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)
