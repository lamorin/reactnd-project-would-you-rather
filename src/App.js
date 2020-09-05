import React from "react";
import SignIn from "./components/SignIn";
import MainUI from "./components/MainUI";
import TabPanel from "./components/TabPanel";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";

import { connect } from "react-redux";

function App(props) {
  const { authedUser, activePanel } = props;

  if (authedUser === null) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
  return (
    <div>
      <MainUI>
        <Home></Home>
        <NewQuestion></NewQuestion>
        <LeaderBoard></LeaderBoard>
      </MainUI>
    </div>
  );
}

function mapStateToProps({ authedUser, activePanel }) {
  return {
    authedUser,
    activePanel,
  };
}

export default connect(mapStateToProps)(App);
