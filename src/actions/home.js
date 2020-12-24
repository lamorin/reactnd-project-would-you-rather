export const SHOW_QUESTION_TABS = 'SHOW_QUESTION_TABS'
export const SHOW_QUESTION_RESULTS = 'SHOW_QUESTION_RESULTS'
export const SHOW_UNANSWERED_QUESTION = 'SHOW_UNANSWERED_QUESTION'
export const VIEW_FULL_POLL = 'VIEW_FULL_POLL'

export function showUnansweredQuestionsTabs() {
  return {
    type: SHOW_QUESTION_TABS,
  }
}

export function showUnansweredQuestion() {
  return {
    type: SHOW_UNANSWERED_QUESTION,
  }
}

export function showUnansweredQuestionResults() {
  return {
    type: SHOW_QUESTION_RESULTS,
  }
}

export function viewFullPoll() {
  return {
    type: VIEW_FULL_POLL,
  }
}
