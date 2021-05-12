import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { useEffect } from 'react'

const SearchBar = ({ products, ...props }) => {
  /*  const [value, setValue] = useState(products[0])
  const [inputValue, setInputValue] = useState() */
  useEffect(() => {
    console.log(products)
  }, [products])

  console.log(products)
  if (products.length === 0) {
    console.log('hola')
    return <></>
  }

  return (
    <Autocomplete
      id="Iss"
      options={products.map((product) => product.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  )
}

export default SearchBar
