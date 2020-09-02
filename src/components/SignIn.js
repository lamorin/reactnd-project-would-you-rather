import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import handleReceiveUsers from "../actions/users";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    width: "100%",
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const { users } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          {typeof users !== "undefined" && (
            <Select
              className={classes.select}
              labelId="label"
              id="select"
              value=""
            >
              {Object.keys(users).map((key) => {
                return (
                  <MenuItem key={key} value={key} onClick={(e) => alert(key)}>
                    {key}
                  </MenuItem>
                );
              })}
              <MenuItem value=""></MenuItem>
            </Select>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

function mapStateToProps({ users }) {
  console.log("From mapStateToProps", users);
  return {
    users,
  };
}

export default connect(mapStateToProps)(SignIn);
