import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Products from './Products'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Rubik',
  },
}))
const StockEventsTable = () => {
  const classes = useStyles()
  const [product, setProduct] = useState([])
  const [stock, setStock] = useState([])

  useEffect(() => {
    const eri = async () => {
      const productsRes = await axios({
        method: 'GET',
        url: 'http://localhost:1337/products',
      })
      const stockEventsRes = await axios({
        method: 'GET',
        url: 'http://localhost:1337/stockEvents',
      })

      const fetchProducts = productsRes.data
      const fetchStockEvents = stockEventsRes.data

      setStock(fetchStockEvents)
      setProduct(fetchProducts)
    }
    eri()
  }, [])
  return (
    <div className={classes.root}>
      <Products products={product} stockEvents={stock} />
    </div>
  )
}

export default StockEventsTable
