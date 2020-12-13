import { SHOW_QUESTION_TABS, SHOW_QUESTION } from "../actions/home";

export function homeView(state =  SHOW_QUESTION_TABS, action) {
  switch (action.type) {
    case SHOW_QUESTION_TABS:
      return  SHOW_QUESTION_TABS
    case SHOW_QUESTION:
      return SHOW_QUESTION
    default:
      return state;
  }
}