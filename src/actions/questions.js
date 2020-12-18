import { getQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { setSelectedQuestion } from './selectedQuestion'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION_ANSWER_LOCAL = 'SAVE_QUESTION_ANSWER_LOCAL'

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

export function handleSaveQuestionAnswer(authedUser, question, answer) {
  return (dispatch) => {
    saveQuestionAnswer({ authedUser, qid : question.id, answer })
    .then(()=> {
      getQuestions()
      .then((questions) => {
        dispatch(setSelectedQuestion(questions[question.id]))
        dispatch(receiveQuestions(questions))
      })
    })
  }
}


export function handleSaveQuestion(optionOneText, optionTwoText, authedUser) {
  return (dispatch) => {
    saveQuestion({ optionOneText, optionTwoText, authedUser })
    .then(()=> {
      getQuestions()
    })
  }
}