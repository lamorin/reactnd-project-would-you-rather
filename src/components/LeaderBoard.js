import React from "react";
import { connect } from "react-redux";
import TabPanel from "./TabPanel";

function LeaderBoard(props) {
  const { activePanel } = props;

  return (
    <TabPanel value={activePanel} index={2}>
      LeaderBoard
    </TabPanel>
  );
}

function mapStateToProps({ activePanel }) {
  return {
    activePanel,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
