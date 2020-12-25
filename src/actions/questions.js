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

export function handleSaveQuestion(optionOneText, optionTwoText, authedUserId) {
  return (dispatch) => {
    //dispatch(saveQuestionLocal(optionOneText, optionTwoText, authedUserId))
    saveQuestion({ author: authedUserId, optionOneText, optionTwoText }).then(
      () => {
        dispatch(handleReceiveQuestions())
      }
    )
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
      authedUser: authedUserId,
      qid: questionId,
      answer: option,
    })
  }
}
