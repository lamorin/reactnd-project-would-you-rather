export const SET_SELECTED_QUESTION_ID = 'SET_SELECTED_QUESTION_ID'

export function setSelectedQuestion(questionId) {
  return {
    type: SET_SELECTED_QUESTION_ID,
    questionId,
  }
}
