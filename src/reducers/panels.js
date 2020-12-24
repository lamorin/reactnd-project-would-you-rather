import { SET_ACTIVE_TAB } from '../actions/panels'

export default function users(state = 0, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return action.panel
    default:
      return state
  }
}
