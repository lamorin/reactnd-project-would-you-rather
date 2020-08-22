import api from "../helpers/api";

export const RECEIVE_USERS = "RECEIVE_USERS";

function receiveUsers(users) {
  console.log("users received by receiveUsers", users);
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export default function handleReceiveUsers() {
  return (dispatch) => {
    api.getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}
