import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER_LOCAL } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case SAVE_QUESTION_ANSWER_LOCAL:
      const authedUser = action.authedUser
      const qid = action.qid
      const answer = action.answer
      
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      }
    default:
      return state
  }
}
