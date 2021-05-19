import React from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    marginTop: 35,
    marginLeft: 10,
    color: "white",
  },
}));
const IconSearch = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchIcon />
    </div>
  );
};

export default IconSearch;
