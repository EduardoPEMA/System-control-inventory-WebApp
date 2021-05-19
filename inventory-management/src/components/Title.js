import React from "react";
import Logo from "../assets/design/CIPug-Logo.png";
import { makeStyles } from "@material-ui/core";
import DateTime from "./DateTime";
const useStyles = makeStyles((theme) => ({
  root: { fontFamily: "Rubik" },
  title: {
    verticalAlign: "middle",
    textAlign: "center",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: 20,
  },
  date: {
    fontSize: "8px",
    fontWeight: "20",
    color: theme.palette.primary.light,
    textAlign: "right",
    marginRight: "8%",
    marginBottom: 0,
  },
}));
const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.date}>
          <DateTime />
        </div>
        <img src={Logo} alt="CI Pug"></img>
      </div>
    </div>
  );
};

export default Title;
