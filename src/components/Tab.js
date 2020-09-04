import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // width: "300px",
    verticalAlign: "bottom",
    "&:hover": {
      cursor: "pointer",
    },
    "& div.left": {
      width: 0,
      height: 0,
      display: "inline-block",
      borderBottom: "30px solid " + theme.palette.primary.light, //deepOrange[500],
      borderLeft: "30px solid transparent",
      verticalAlign: "bottom",
    },
    "&:hover div.left": {
      borderBottom: "30px solid " + theme.palette.secondary.light,
    },
    "& div.right": {
      display: "inline-block",
      width: 0,
      height: 0,
      borderBottom: "30px solid " + theme.palette.primary.light,
      borderRight: "30px solid transparent",
      verticalAlign: "bottom",
    },
    "&:hover div.right": {
      borderBottom: "30px solid " + theme.palette.secondary.light,
    },
    "& div.center": {
      display: "inline-block",
      textAlign: "center",
      height: "30px",
      width: "auto",
      padding: "0 10px",
      backgroundColor: theme.palette.primary.light, //theme.palette.secondary.main,
      verticalAlign: "bottom",
      whiteSpace: "nowrap",
    },
    "&:hover div.center": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  label: {
    display: "block",
    lineHeight: "30px",
  },
}));

export default function Tab(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={"left"}></div>
      <div className={"center"}>
        <span className={classes.label}>{props.children}</span>
      </div>
      <div className={"right"}></div>
    </div>
  );
}
