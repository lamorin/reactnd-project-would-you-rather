import { SET_SELECTED_QUESTION } from '../actions/selectedQuestion'

export function selectedQuestion(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_QUESTION:
      return action.question
    default:
      return state
  }
}
