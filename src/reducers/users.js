import { RECEIVE_USERS, ADD_ANSWER_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users }
    case ADD_ANSWER_USER:
      const { userId, questionId, answer } = action
      state[userId].answers = { ...state[userId].answers, [questionId]: answer }
      return state
    default:
      return state
  }
}
