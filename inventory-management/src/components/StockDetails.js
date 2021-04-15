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
    textAlign: 'left',
    width: '100%',
    height: '100%',
  },
  containerProduct: {
    display: 'grid',
    backgroundColor: 'white',
    padding: '24px',
    border: '2px solid #eee',
    margin: '12px 0',
    textAlign: 'left',
    position: 'relative',
  },

  photo: {
    height: '100px',
    gridRow: '3',
    gridColumnStart: '4',
    gridColumnEnd: '4',
    backgroundColor: theme.palette.secondary.light,
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
            <div className={classes.photo}>
              <p>photo</p>
            </div>
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
