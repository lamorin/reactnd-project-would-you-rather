import { combineReducers } from 'redux'
import users from './users'
import authedUserId from './authedUserId'
import activeTab from './panels'
import questions from './questions'
import { selectedQuestionId } from './selectedQuestion'
import { homeUI } from './homeUI'

export default combineReducers({
  users,
  authedUserId,
  activeTab,
  questions,
  selectedQuestionId,
  homeUI,
})
