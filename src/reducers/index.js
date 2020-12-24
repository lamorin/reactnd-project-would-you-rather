import { combineReducers } from 'redux'
import users from './users'
import authedUserId from './authedUserId'
import activeTab from './panels'
import questions from './questions'
import { selectedQuestion } from './selectedQuestion'
import { homeUI } from './home'

export default combineReducers({
  users,
  authedUserId,
  activeTab,
  questions,
  selectedQuestion,
  homeUI,
})
