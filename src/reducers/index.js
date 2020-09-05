import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import activePanel from "./panels";

export default combineReducers({ users, authedUser, activePanel });
