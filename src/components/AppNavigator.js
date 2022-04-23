import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    cursor: "pointer",
    color: "white",
  },
}));

export default function AppNavigator() {
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography className={classes.title} variant="h6">
            Pokedex
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
