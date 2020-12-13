import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import activePanel from './panels'
import questions from './questions'
import { selectedQuestion } from './selectedQuestion'
import { homeView } from './home'

export default combineReducers({
  users,
  authedUser,
  activePanel,
  questions,
  selectedQuestion,
  homeView,
})
