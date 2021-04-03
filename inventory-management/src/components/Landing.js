import React from 'react'
import { makeStyles } from '@material-ui/core'
import background from '../assets/design/bg-inventory.png'
import Title from './Title'
import StockEventsTable from './StockEventsTable'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    width: '100%',
    height: '200vh',
    marginTop: 0,
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
  },
  container: {
    backgroundColor: 'grey',
    borderRadius: 30,
    padding: 10,
    marginLeft: 180,
    marginRight: 250,
  },
}))

const fetchProducts = [
  {
    id: 1,
    name: 'Hola',
  },
  { id: 2, name: 'Pug' },
]

const fetchStockEvents = [
  {
    id: 1,
    type: 'add',
    qty: 100,
    product: fetchProducts[0],
  },
  {
    id: 2,
    type: 'remove',
    qty: 20,
    product: fetchProducts[0],
  },
  {
    id: 3,
    type: 'add',
    qty: 20,
    product: fetchProducts[1],
  },
  {
    id: 4,
    type: 'remove',
    qty: 20,
    product: fetchProducts[1],
  },
]

const Landing = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} id="landing">
      <Title children="Sistema de Inventario:" />
      <div className={classes.container}>
        <StockEventsTable
          products={fetchProducts}
          stockEvents={fetchStockEvents}
        />
      </div>
    </div>
  )
}

export default Landing
