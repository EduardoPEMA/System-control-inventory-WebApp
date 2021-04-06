import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  subtitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'column',
  },
  text: {
    fontSize: 20,
    color: theme.palette.secondary.main,
    textAlign: 'column',
  },
  containerProduct: {
    backgroundColor: 'white',
    padding: '24px',
    border: '2px solid #eee',
    margin: '12px 0',
    textAlign: 'column',
  },
}))
const StockDetails = (props) => {
  const { name, total, stockEvents } = props
  const classes = useStyles()
  const [show, setStateShow] = useState(false)

  const handleStateChange = (event, value) => {
    setStateShow(!show)
  }
  return (
    <div className={classes.root}>
      <option
        className={classes.subtitle}
        value={show}
        onClick={handleStateChange}
      >
        Producto: {name} | Total: {total}
      </option>
      {show &&
        stockEvents.map((e) => (
          <div className={classes.containerProduct}>
            <p className={classes.text}>Id: {e.id}</p>
            <p className={classes.text}>Tipo: {e.type}</p>
            <p className={classes.text}>Producto: {e.product.name}</p>
            <p className={classes.text}>Cantidad: {e.qty}</p>
          </div>
        ))}
    </div>
  )
}

export default StockDetails
