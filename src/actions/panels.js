export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'

export function setActiveTab(panel) {
  return {
    type: SET_ACTIVE_TAB,
    panel,
  }
}
