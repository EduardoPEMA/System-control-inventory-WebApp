import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90a4ae',
      light: '#c1d5e0',
      dark: '#62757f',
      gradient: '#8360C3',
    },
    secondary: {
      main: '#00796b',
      light: '#48a999',
      dark: '#004c40',
    },

    landing: {
      main: '#8360C3',
    },
  },
})

export default theme
