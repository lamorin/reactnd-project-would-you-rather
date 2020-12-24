import {
  SHOW_QUESTION_TABS,
  SHOW_UNANSWERED_QUESTION,
  SHOW_QUESTION_RESULTS,
  VIEW_FULL_POLL,
} from '../actions/home'

export const QUESTION_TABS = 'QUESTION_TABS',
  UNANSWERED_QUESTION = 'UNANSWERED_QUESTION',
  QUESTION_RESULTS = 'QUESTION_RESULTS',
  FULL_POLL = 'FULL_POLL'

export function homeUI(state = { view: QUESTION_TABS }, action) {
  switch (action.type) {
    case SHOW_QUESTION_TABS:
      return QUESTION_TABS
    case SHOW_UNANSWERED_QUESTION:
      return QUESTION_TABS
    case SHOW_QUESTION_RESULTS:
      return QUESTION_TABS
    case VIEW_FULL_POLL:
      return FULL_POLL
    default:
      return state
  }
}
