export const SET_SELECTED_QUESTION = 'SET_SELECTED_QUESTION'

export function setSelectedQuestion(questionId) {
  return {
    type: SET_SELECTED_QUESTION,
    questionId,
  }
}
