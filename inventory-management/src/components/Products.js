import React from "react";
import { makeStyles } from "@material-ui/core";
import StockDetails from "./StockDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Rubik",
  },
  container: {
    paddingBottom: "20px",
    marginBottom: "15px",
    marginTop: 40,
    display: "table",
  },
}));
const Products = (props) => {
  const classes = useStyles();
  const { products, stockEvents } = props;

  return (
    <div className={classes.root}>
      {products.map((product) => {
        const { id } = product;
        const relevantStockEvents = stockEvents.filter(
          (se) => se.product.id === id
        );

        const stockTotal = relevantStockEvents.reduce(
          (accumulator, currentElement) => {
            return accumulator + currentElement.qty;
          },
          0 //Initial value to 0
        );

        return (
          <div className={classes.container}>
            <StockDetails
              name={product.name}
              stockEvents={relevantStockEvents}
              total={stockTotal}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
