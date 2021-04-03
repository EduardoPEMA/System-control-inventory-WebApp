import React from 'react'
import { makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Rubik',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'column',
  },
  containerProduct: {
    backgroundColor: 'black',
    padding: '24px',
    border: '2px solid #eee',
    margin: '12px 0',
  },
  separator: {
    borderTop: '3px dashed #bbb',
  },
}))
const Products = (props) => {
  const classes = useStyles()
  const { products, stockEvents } = props
  return (
    <div className={classes.root}>
      {products.map((product) => {
        const { id } = product
        const relevantStockEvents = stockEvents.filter(
          (se) => se.product.id === id,
        )
        return (
          <div className={classes.containerProduct}>
            <h2 className={classes.text}>Producto: {product.name}</h2>
            {relevantStockEvents.map((e) => (
              <div className={classes.containerProduct}>
                <p className={classes.text}>Id: {e.id}</p>
                <p className={classes.text}>Tipo: {e.type}</p>
                <p className={classes.text}>Producto: {e.product.name}</p>
                <p className={classes.text}>Cantidad: {e.qty}</p>
                <Divider />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Products
