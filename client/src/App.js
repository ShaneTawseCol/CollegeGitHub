import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

// App component to set up the Router and MainRouter
const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
