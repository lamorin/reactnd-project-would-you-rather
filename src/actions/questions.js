import { getQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
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

function saveQuestionLocal(optionOneText, optionTwoText, authedUserId) {
  return {
    type: SAVE_QUESTION,
    optionOneText,
    optionTwoText,
    authedUserId,
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, authedUserId) {
  return (dispatch) => {
    dispatch(saveQuestionLocal(optionOneText, optionTwoText, authedUserId))
    saveQuestion({ optionOneText, optionTwoText, authedUserId })
  }
}

function saveQuestionAnswerLocal(authedUserId, questionId, option) {
  return {
    type: SAVE_QUESTION_ANSWER_LOCAL,
    authedUserId,
    questionId,
    option,
  }
}

export function handleSaveQuestionAnswer(authedUserId, questionId, option) {
  return (dispatch) => {
    dispatch(saveQuestionAnswerLocal(authedUserId, questionId, option))
    saveQuestionAnswer({
      authedUserId: authedUserId,
      qid: questionId,
      answer: option,
    })
  }
}
