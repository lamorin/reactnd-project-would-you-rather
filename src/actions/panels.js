export const SET_ACTIVE_PANEL = "SET_ACTIVE_PANEL";

export function setActivePanel(panel) {
  return {
    type: SET_ACTIVE_PANEL,
    panel,
  };
}
