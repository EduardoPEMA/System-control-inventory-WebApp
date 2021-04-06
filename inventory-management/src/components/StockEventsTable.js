import React from 'react'
import Products from './Products'
import axios from 'axios'

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

class StockEventsTable extends React.Component {
  state = {
    fetchProducts,
    fetchStockEvents,
  }
  /*  const [fetchProducts, setFetchProduct] = useState('1')
  const [fetchStockEvents, setStockEvent] = useState([])

  const handleStateProduct = (event, value) => {
    setFetchProduct(fetchProducts)
  }
  const handleStateStock = (event, value) => {
    setStockEvent(fetchStockEvents)
  } */

  async componentDidMount() {
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
    this.setState({ fetchProducts, fetchStockEvents })
  }
  render() {
    const { fetchProducts, fetchStockEvents } = this.state
    return <Products products={fetchProducts} stockEvents={fetchStockEvents} />
  }
}

export default StockEventsTable
