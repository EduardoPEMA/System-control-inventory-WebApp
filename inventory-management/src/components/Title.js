import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: 70,
    fontFamily: 'Rubik',
    color: 'black',
    width: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
}))
const Title = ({ children, props }) => {
  const classes = useStyles()
  return <h1 className={classes.title}>{children}</h1>
}

export default Title
