import React from 'react'
import { makeStyles } from '@material-ui/core'
//import background from '../assets/design/bg-inventory.png'
import Title from './Title'
import StockEventsTable from './StockEventsTable'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    flexGrow: '1',
    marginTop: 0,
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    marginTop: '30',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 30,
    padding: 10,
    marginLeft: 180,
    marginRight: 250,
  },
}))

const Landing = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} pos>
      <Title children="Sistema de Inventario" />
      <div className={classes.container}>
        <StockEventsTable />
      </div>
    </div>
  )
}

export default Landing
