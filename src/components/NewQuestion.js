import React from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import TabPanel from './TabPanel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    fontFamily: 'Futura, sans-serif',
    padding: '1rem',
  },
  paper: {
    padding: '1rem',
  },
  hrText: {
    lineHeight: '1em',
    position: 'relative',
    outline: 0,
    border: 0,
    color: 'black',
    textAlign: 'center',
    height: '1.5em',
    opacity: '0.5',
    '&:before': {
      content: '',
      // use the linear-gradient for the fading effect
      // use a solid background color for a solid bar
      background: 'black',
      position: 'absolute',
      left: 0,
      top: '50%',
      width: '100%',
      height: '1px',
    },
    '&:after': {
      content: 'attr(data-content)',
      position: 'relative',
      display: 'inline-block',
      color: 'black',
      padding: '0 .5em',
      lineHeight: '1.5em',
      // this is really the only tricky part, you need to specify the background color of the container element...
      backgroundColor: '#fcfcfa',
    },
  },
  complete: {
    padding: '1rem 1rem 0',
    margin: 0,
  },
  wouldYou: {
    margin: '1rem 1rem',
  },
  button: {
    margin: '1em auto',
  },
  textField: {},
}))

function NewQuestion(props) {
  const { activeTab, authedUserId } = props
  const history = useHistory()
  const classes = useStyles()
  let optionOneText = ''
  let optionTwoText = ''

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUserId.id,
    })
    history.push('/')
  }

  const optionOneHandler = (e) => {
    optionOneText = e.target.value
  }

  const optionTwoHandler = (e) => {
    optionTwoText = e.target.value
  }
  return (
    <TabPanel value={activeTab} index={1}>
      <Container maxWidth="sm" align="center" className={classes.container}>
        <Paper className={classes.paper}>
          <p style={{ textAlign: 'left' }} className={classes.complete}>
            Complete the question:
          </p>
          <FormControl fullWidth>
            <form onSubmit={handleSubmit}>
              <p
                style={{ textAlign: 'left', fontWeight: 'bold' }}
                className={classes.wouldYou}
              >
                Would your rather...
              </p>
              <div>
                <TextField
                  id="outlined-basic"
                  size={'small'}
                  fullWidth
                  variant="outlined"
                  onChange={optionOneHandler}
                  className={classes.textField}
                />
              </div>
              <hr data-content="OR" className={classes.hrText} />
              <div>
                <TextField
                  id="outlined-basic"
                  size={'small'}
                  fullWidth
                  variant="outlined"
                  onChange={optionTwoHandler}
                />
              </div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </FormControl>
        </Paper>
      </Container>
    </TabPanel>
  )
}

function mapStateToProps({ activeTab, authedUserId }) {
  return {
    activeTab,
    authedUserId,
  }
}

export default connect(mapStateToProps)(NewQuestion)
