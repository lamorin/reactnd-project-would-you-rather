import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import middleware from "./middleware";
import users from "./reducers/users";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import handleReceiveUsers from "./actions/users";

const store = createStore(users, middleware);

store.dispatch(handleReceiveUsers());

ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  //</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
