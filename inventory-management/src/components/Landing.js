import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Title from "./Title";
import StockEventsTable from "./StockEventsTable";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "1",
    marginTop: 0,
    backgroundColor: theme.palette.primary.main,
    border: "2px solid #eee",
  },
  container: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title />
      <Container className={classes.container}>
        <StockEventsTable />
      </Container>
    </div>
  );
};

export default Landing;
