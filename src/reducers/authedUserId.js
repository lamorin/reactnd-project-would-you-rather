import { SET_AUTHED_USER_ID } from '../actions/authedUserId'

export default function users(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER_ID:
      return action.userId
    default:
      return state
  }
}
