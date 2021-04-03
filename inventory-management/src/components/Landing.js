import React from 'react'
import { makeStyles } from '@material-ui/core'
//import background from '../assets/design/bg-inventory.png'
import Title from './Title'
import StockEventsTable from './StockEventsTable'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    width: '100%',
    height: '100%',
    marginTop: 0,
    backgroundColor: theme.palette.primary.light,
  },
  container: {
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
    <div className={classes.root} id="landing">
      <Title children="Sistema de Inventario:" />
      <div className={classes.container}>
        <StockEventsTable />
      </div>
    </div>
  )
}

export default Landing
