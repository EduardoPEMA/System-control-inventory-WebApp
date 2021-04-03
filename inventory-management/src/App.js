import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Landing from './components/Landing'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  )
}

export default App
