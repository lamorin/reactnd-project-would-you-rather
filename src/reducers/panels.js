import { SET_ACTIVE_PANEL } from "../actions/panels";

export default function users(state = 0, action) {
  switch (action.type) {
    case SET_ACTIVE_PANEL:
      return action.panel;
    default:
      return state;
  }
}
