import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER_LOCAL,
  ADD_QUESTION_TO_STATE,
} from '../actions/questions'

export default function state(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case SAVE_QUESTION_ANSWER_LOCAL:
      const newState = {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.option]: {
            ...state[action.questionId][action.option],
            votes: state[action.questionId][action.option].votes.concat([
              action.authedUserId,
            ]),
          },
        },
      }

      return newState
    case ADD_QUESTION_TO_STATE:
      return { ...state, [action.question.id]: action.question }

    default:
      return state
  }
}
