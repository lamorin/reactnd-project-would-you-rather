import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import activePanel from './panels'
import questions from './questions'

export default combineReducers({ users, authedUser, activePanel, questions })
