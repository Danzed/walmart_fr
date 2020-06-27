import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import InitFind from './component/InitFind';
import Bar from './component/layout/Bar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Bar></Bar>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <InitFind></InitFind>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
