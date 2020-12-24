import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USER'
export const ADD_ANSWER_USER = 'ADD_ANSWER_USER'

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function handleReceiveUsers() {
  return (dispatch) => {
    getUsers().then((users) => {
      dispatch(receiveUsers(users))
    })
  }
}

export function addAnswerUser(userId, questionId, answer) {
  return {
    type: ADD_ANSWER_USER,
    userId,
    questionId,
    answer
  }
}
