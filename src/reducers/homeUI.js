import { SHOW_QUESTIONS, VIEW_FULL_POLL } from '../actions/homeUI'

export const QUESTION_TABS = 'QUESTION_TABS',
  UNANSWERED_QUESTION = 'UNANSWERED_QUESTION',
  QUESTION_RESULTS = 'QUESTION_RESULTS',
  FULL_POLL = 'FULL_POLL'

export function homeUI(state = QUESTION_TABS, action) {
  switch (action.type) {
    case SHOW_QUESTIONS:
      return QUESTION_TABS
    case VIEW_FULL_POLL:
      return FULL_POLL
    default:
      return state
  }
}
