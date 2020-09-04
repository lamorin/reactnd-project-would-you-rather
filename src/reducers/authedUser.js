import { SET_AUTHED_USER } from "../actions/authedUser";

const authedUser = {
  id: "sarahedo",
  name: "Sarah Edo",
  avatarURL: "",
  answers: {
    "8xf0y6ziyjabvozdd253nd": "optionOne",
    "6ni6ok3ym7mf1p33lnez": "optionTwo",
    am8ehyc8byjqgar0jgpub9: "optionTwo",
    loxhs1bqm25b708cmbf3g: "optionTwo",
  },
  questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
};

export default function users(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return authedUser;
    default:
      return authedUser;
  }
}
