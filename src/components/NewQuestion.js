import React from 'react'
import { connect } from 'react-redux'
import { getQuestions, saveQuestion } from '../utils/api'
import handleReceiveQuestions from '../actions/questions'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import TabPanel from './TabPanel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { showQuestionsTabs } from '../actions/home'
import { setActivePanel } from '../actions/panels'

const useStyles = makeStyles((theme) => ({
    container: {
    textAlign: 'center',
    background: '#fcfcfa',
    color: '#818078',
    fontFamily: 'Futura, sans-serif'
  },
  hrText : {
    lineHeight: '1em',
    position: 'relative',
    outline: 0,
    border: 0,
    color: 'black',
    textAlign: 'center',
    height: '1.5em',
    opacity: '0.5',
    '&:before' : {
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
    '&:after' : {
      content: 'attr(data-content)',
      position: 'relative',
      display: 'inline-block',
      color: 'black',
      padding: '0 .5em',
      lineHeight: '1.5em',
      // this is really the only tricky part, you need to specify the background color of the container element...
      color: '#818078',
      backgroundColor: '#fcfcfa'
    }
  },
  button: {
    margin: '1em auto'
  }
}))

function NewQuestion(props) {
  const { activePanel, authedUser, dispatch } = props
  const classes = useStyles()
  let optionOneText = ''
  let optionTwoText = ''

  const handleSubmit = (e) => {
    e.preventDefault()
    saveQuestion({optionOneText, optionTwoText, author: authedUser.id})
    .then(()=>dispatch(handleReceiveQuestions()))
    dispatch(setActivePanel(0))
    dispatch(showQuestionsTabs())
  }

  const optionOneHandler = (e) => {
    optionOneText = e.target.value
  }

  const optionTwoHandler = (e) => {
    optionTwoText = e.target.value
  }
  return (
    <TabPanel value={activePanel} index={1}>
      <Container maxWidth="sm" align="center" className={classes.container}>
        <p style={{textAlign:'left'}}>Complete the question:</p>
        <FormControl>
          <form onSubmit={handleSubmit}>
            <p style={{textAlign:'left', fontWeight: 'bold'}}>Would your rather...</p>
            <div>
              <TextField id="outlined-basic" size={'small'} fullWidth variant="outlined" onChange={optionOneHandler}/>
            </div>
            <hr data-content='OR' className={classes.hrText}/>
            <div>
              <TextField id="outlined-basic" size={'small'} fullWidth variant="outlined" onChange={optionTwoHandler} />
            </div>
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
              Submit
            </Button>
          </form>
        </FormControl>
      </Container>
    </TabPanel>
  )
}

function mapStateToProps({ activePanel, authedUser }) {
  return {
    activePanel,
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
