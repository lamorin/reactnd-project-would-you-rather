import React from "react";
import SignIn from "./components/SignIn";
import MainUI from "./components/MainUI";
import TabPanel from "./components/TabPanel";

import { connect } from "react-redux";

function App(props) {
  const { authedUser, activePanel } = props;

  //const [value, setValue] = React.useState(0);

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
        <TabPanel value={activePanel} index={0}>
          Home
        </TabPanel>
        <TabPanel value={activePanel} index={1}>
          New Question
        </TabPanel>
        <TabPanel value={activePanel} index={2}>
          Leader Board
        </TabPanel>
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
