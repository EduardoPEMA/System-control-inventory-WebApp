import React from 'react'
import Products from './Products'
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
const StockEventsTable = () => {
  return <Products products={fetchProducts} stockEvents={fetchStockEvents} />
}

export default StockEventsTable
