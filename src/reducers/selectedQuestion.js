import { SET_SELECTED_QUESTION_ID } from '../actions/selectedQuestion'

export function selectedQuestionId(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_QUESTION_ID:
      return action.questionId
    default:
      return state
  }
}
