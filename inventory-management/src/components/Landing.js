import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Title from './Title'
import StockEventsTable from './StockEventsTable'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    minHeight: '100vh',
    flexGrow: '1',
    marginTop: 0,
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 20,
  },
}))

const Landing = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Title children="Sistema de Inventario" />
      <Container className={classes.container}>
        <StockEventsTable />
      </Container>
    </div>
  )
}

export default Landing
