import React from "react";
import { connect } from "react-redux";
import TabPanel from "./TabPanel";

function Home(props) {
  const { activePanel } = props;

  return (
    <TabPanel value={activePanel} index={0}>
      Home
    </TabPanel>
  );
}

function mapStateToProps({ activePanel }) {
  return {
    activePanel,
  };
}

export default connect(mapStateToProps)(Home);
