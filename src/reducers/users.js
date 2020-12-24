import { RECEIVE_USERS, ADD_ANSWER_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users }
    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer,
          },
        },
      }
    default:
      return state
  }
}
