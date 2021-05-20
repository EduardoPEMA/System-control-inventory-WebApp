import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import IconSearch from "./IconSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    width: "50%",
    borderRadius: "5px",
  },
  box: {
    flexDirection: "row",
    display: "flex",
    width: "80%",
    marginLeft: "40px",
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    backgroundColor: "#e1e3dd",
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: "5px",
  },
}));

const SearchBar = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconSearch />
      <Autocomplete
        className={classes.box}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={products.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            className={classes.text}
            {...params}
            label="Nombre del producto"
            margin="normal"
            variant="filled"
            InputProps={{ ...params.InputProps, type: "search" }}
            onChange={(e) => e.target.value}
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
