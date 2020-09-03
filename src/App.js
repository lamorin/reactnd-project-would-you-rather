import React from "react";
import SignIn from "./components/SignIn";
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

  return <div>{authedUser.id}</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
