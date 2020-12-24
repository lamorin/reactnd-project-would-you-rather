import { SET_SELECTED_QUESTION_ID } from '../actions/selectedQuestion'

export function selectedQuestionId(state = null, action) {
  console.log('selectedQuestion is being called...: ', state)
  switch (action.type) {
    case SET_SELECTED_QUESTION_ID:
      console.log('question id en el reducer', action.questionId)
      return action.questionId
    default:
      return state
  }
}
