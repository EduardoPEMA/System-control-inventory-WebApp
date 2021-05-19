import React from "react";
import { makeStyles } from "@material-ui/core";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    width: 40,
    display: "flex",
    position: "absolute",
    marginLeft: "42%",
    alignItem: "right",
    marginTop: 80,
  },
}));

const IconType = ({ stockEvents }) => {
  const classes = useStyles();
  return stockEvents.map((e) =>
    e.type === "add" ? (
      <p className={classes.icon}>
        <AddCircleOutlineIcon />
      </p>
    ) : (
      <p>
        <RemoveCircleOutlineIcon />
      </p>
    )
  );
};

export default IconType;
