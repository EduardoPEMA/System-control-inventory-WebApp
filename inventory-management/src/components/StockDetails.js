import React, { useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
/* import AddIcon from "../assets/icons/addIcon.png";
import RemoveIcon from "../assets/icons/removeIcon.png"; */

const useStyles = makeStyles((theme) => ({
  root: {},
  subtitle: {
    fontSize: 30,
    color: "white",
    textAlign: "column",
  },
  text: {
    fontSize: 20,
    color: theme.palette.secondary.main,
  },
  containerProduct: {
    backgroundColor: theme.palette.primary.light,
    border: "2px solid #eee",
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 30,
    display: "inline-table",
  },

  photo: {
    height: "100px",
    gridRow: "3",
    gridColumnStart: "4",
    gridColumnEnd: "4",
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    width: 40,
    display: "flex",
  },
}));

const StockDetails = ({ name, total, stockEvents }) => {
  const classes = useStyles();
  const [show, setStateShow] = useState(false);

  const handleStateChange = (event, value) => {
    setStateShow(!show);
  };

  return (
    <div className={classes.root}>
      <option
        className={classes.subtitle}
        value={show}
        onClick={handleStateChange}
      >
        ◦ Producto: {name} | Total: {total}
      </option>
      {show &&
        stockEvents.map((e) => (
          <Container className={classes.containerProduct}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <p className={classes.text}>Id: {e.id}</p>
              <p className={classes.text}>Tipo: {e.type}</p>
              <p className={classes.text}>Producto: {e.product.name}</p>
              <p className={classes.text}>Cantidad: {e.qty}</p>
            </Grid>
          </Container>
        ))}
    </div>
  );
};

export default StockDetails;
