import { getQuestions } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export default function handleReceiveQuestions() {
  return (dispatch) => {
    getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}
