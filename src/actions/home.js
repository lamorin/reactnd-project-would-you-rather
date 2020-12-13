export const SHOW_QUESTION_TABS = 'SHOW_QUESTION_TABS'
export const SHOW_QUESTION_RESULTS = 'SHOW_QUESTION_RESULTS'
export const SHOW_QUESTION = 'SHOW_QUESTION'

export function showQuestionsTabs() {
  return {
    type: SHOW_QUESTION_TABS,
  };
}

export function showQuestion() {
  return {
    type: SHOW_QUESTION,
  };
}


