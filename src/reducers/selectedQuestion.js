import { SET_SELECTED_QUESTION } from '../actions/selectedQuestion'

export function selectedQuestion(state = null, action) {
  console.log('selectedQuestion is being called...: ', state)
  switch (action.type) {
    case SET_SELECTED_QUESTION:
      return action.questionId
    default:
      return state
  }
}
