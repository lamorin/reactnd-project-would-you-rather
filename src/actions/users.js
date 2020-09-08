import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USER'

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function handleReceiveUsers() {
  console.log('action/users.js - retrieving users...')
  return (dispatch) => {
    getUsers().then((users) => {
      dispatch(receiveUsers(users))
    })
  }
}
