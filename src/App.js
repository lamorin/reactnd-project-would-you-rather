import React from "react";
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";

import { connect } from "react-redux";

function App(props) {
  const { authedUser } = props;

  if (authedUser === null) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
  return <NavBar></NavBar>;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
