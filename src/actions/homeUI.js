export const SHOW_QUESTIONS = 'SHOW_QUESTIONS'
export const VIEW_FULL_POLL = 'VIEW_FULL_POLL'
export const SHOW_404 = 'SHOW_404'

export function showQuestions() {
  return {
    type: SHOW_QUESTIONS,
  }
}

export function viewFullPoll() {
  return {
    type: VIEW_FULL_POLL,
  }
}

export function show404() {
  return {
    type: SHOW_404,
  }
}
