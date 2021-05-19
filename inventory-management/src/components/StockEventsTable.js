import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Products from "./Products";
import axios from "axios";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Rubik",
  },
  bar: {
    width: "70%",
    position: "relative",
  },
}));
const StockEventsTable = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const eri = async () => {
      const productsRes = await axios({
        method: "GET",
        url: "http://localhost:1337/products",
      });
      const stockEventsRes = await axios({
        method: "GET",
        url: "http://localhost:1337/stockEvents",
      });

      const fetchProducts = productsRes.data;
      const fetchStockEvents = stockEventsRes.data;

      setStock(fetchStockEvents);
      setProduct(fetchProducts);
    };
    eri();
  }, []);

  //const table = Array.isArray(product) && product.map((name) => Products(name))
  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <SearchBar products={product} />
      </div>

      <Products products={product} stockEvents={stock} />
    </div>
  );
};

export default StockEventsTable;
