import React from "react";
import { makeStyles } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
const useStyles = makeStyles((theme) => ({
  root: {},
  iconAdd: {
    width: 40,
    display: "flex",
    position: "absolute",
    marginLeft: "30%",
    alignItem: "right",
    marginTop: 80,
  },
  iconRemove: {
    width: 40,
    display: "flex",
    position: "absolute",
    marginLeft: "36%",
    alignItem: "right",
    marginTop: 80,
  },
}));

const IconType = ({ stockEvents }) => {
  const classes = useStyles();

  return stockEvents === "add" ? (
    <p className={classes.iconAdd}>
      <AddCircleOutlineIcon />
    </p>
  ) : (
    <p className={classes.iconRemove}>
      <RemoveCircleOutlineIcon />
    </p>
  );
};

export default IconType;
