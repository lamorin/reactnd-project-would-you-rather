import React from "react";
import { connect } from "react-redux";
import TabPanel from "./TabPanel";

function NewQuestion(props) {
  const { activePanel } = props;

  return (
    <TabPanel value={activePanel} index={1}>
      NewQuestion
    </TabPanel>
  );
}

function mapStateToProps({ activePanel }) {
  return {
    activePanel,
  };
}

export default connect(mapStateToProps)(NewQuestion);
