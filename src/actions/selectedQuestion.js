export const SET_SELECTED_QUESTION = 'SET_SELECTED_QUESTION'

export function setSelectedQuestion(question) {
  return {
    type: SET_SELECTED_QUESTION,
    question,
  }
}
