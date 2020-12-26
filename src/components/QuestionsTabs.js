import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import TabPanel from './TabPanel'
import _ from 'lodash'
import { formatQuestion } from '../utils/helpers'
import QuestionPreview from './QuestionPreview'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

function QuestionsTabs(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { authedUserId, users, questions, activeTab } = props

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const unansweredQuestions = _.reverse(
    _.sortBy(
      _.values(questions)
        .filter(
          (q) =>
            !q.optionOne.votes.includes(authedUserId) &&
            !q.optionTwo.votes.includes(authedUserId)
        )
        .map((q) => formatQuestion(q, users[q.author])),
      (q) => q.timestamp
    )
  )

  const answeredQuestions = _.reverse(
    _.sortBy(
      _.values(questions)
        .filter(
          (q) =>
            q.optionOne.votes.includes(authedUserId) ||
            q.optionTwo.votes.includes(authedUserId)
        )
        .map((q) => formatQuestion(q, users[q.author])),
      (q) => q.timestamp
    )
  )

  return (
    <TabPanel value={activeTab} index={0}>
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

function mapStateToProps({ users, questions, authedUserId, activeTab }) {
  return {
    users,
    questions,
    authedUserId,
    activeTab,
  }
}

export default connect(mapStateToProps)(QuestionsTabs)
