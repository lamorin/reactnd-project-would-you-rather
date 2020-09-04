import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Avatar from "@material-ui/core/Avatar";
import Tab from "./Tab";

import { deepOrange } from "@material-ui/core/colors";

import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: { alignItems: "center" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "0 auto",
    alignItems: "flex-end",
    position: "relative",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  link: {
    textDecoration: "none !important",
  },
  links: {
    display: "flex",
    marginRight: "100px",
  },
  avatar: {
    display: "block",
    margin: "0 10px",
    position: "relative",
    top: "-10px",
  },
  username: {
    display: "flex",
    alignItems: "flex-center",
    position: "relative",
  },
  logout: {
    marginLeft: "50px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <Container className={classes.links}>
            <Link className={classes.link} href="https://cnn.com">
              <Tab>HOME</Tab>
            </Link>
            <Tab>NEW QUESTION</Tab>
            <Tab>LEADER BOARD</Tab>
          </Container>
          <Container className={classes.username}>
            <Typography>USERNAME</Typography>
            <Avatar
              className={classes.avatar}
              alt="Remy Sharp"
              src="https://placekitten.com/640/360"
            />
            <Link
              href="#"
              className={classes.logout}
              onClick={preventDefault}
              color="inherit"
            >
              LOGOUT
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
