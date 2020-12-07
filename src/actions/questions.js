import { getQuestions, saveQuestionAnswer } from '../utils/api'
import { selectedQuestion, setSelectedQuestion } from './selectedQuestion'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION_ANSWER_LOCAL = 'SAVE_QUESTION_ANSWER_LOCAL'

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function saveQuestionAnswerLocal(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER_LOCAL,
    authedUser,
    qid,
    answer
  }
}

export default function handleReceiveQuestions() {
  return (dispatch) => {
    getQuestions().then((questions) => {
      dispatch(receiveQuestions(questions))
    })
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveQuestionAnswerLocal(authedUser, qid, answer))
    saveQuestionAnswer({ authedUser, qid, answer }).then(dispatch(handleReceiveQuestions())).then(dispatch(setSelectedQuestion(null)))
  }
}