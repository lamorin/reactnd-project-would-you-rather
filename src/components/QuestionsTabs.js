import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import TabPanel from './TabPanel'
import handleReceiveQuestions from '../actions/questions'
import { handleReceiveUsers } from '../actions/users'
import _ from 'lodash'
import { formatQuestion } from '../utils/helpers'
import QuestionPreview from './QuestionPreview'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const formatQuestions = (questions, users) => {
  if (_.isEmpty(users) || _.isEmpty(questions)) {
    return []
  }

  const formattedQuestions = _.values(questions).map((q) =>
    formatQuestion(q, users[q.author])
  )

  return formattedQuestions
}

function QuestionsTabs(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { activePanel, dispatch, questions, users, authedUser } = props

  useEffect(() => {
    dispatch(handleReceiveQuestions())
    dispatch(handleReceiveUsers())
  },[dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const formattedQuestions = formatQuestions(questions, users)

  const unansweredQuestions = formattedQuestions.filter(
    (q) =>
      !q.optionOne.votes.includes(authedUser.id) &&
      !q.optionTwo.votes.includes(authedUser.id) &&
      q.authorId !== authedUser.id
  )

  const answeredQuestions = formattedQuestions.filter((q) => {

    return (
      q.authorId !== authedUser.id &&
      (q.optionOne.votes.includes(authedUser.id) ||
        q.optionTwo.votes.includes(authedUser.id))
    )
  })

  return (
    <TabPanel value={activePanel} index={0}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {unansweredQuestions.map((unansweredQuestion) => (
            <QuestionPreview
              key={unansweredQuestion.id}
              question={unansweredQuestion}
            ></QuestionPreview>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {answeredQuestions.map((answeredQuestion) => (
            <QuestionPreview
              key={answeredQuestion.id}
              question={answeredQuestion}
            ></QuestionPreview>
          ))}
        </TabPanel>
      </Paper>
    </TabPanel>
  )
}

function mapStateToProps({ activePanel, questions, authedUser, users }) {
  return {
    activePanel,
    questions,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionsTabs)
