import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Tray from './Tray';
import BreezyApp from './BreezyApp';
import Location from './Location';
import Forecast from './Forecast';
import Home from './Home';

// MainRouter component to handle routing within the app
const MainRouter = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Tray component for the navigation menu */}
        <Tray />
        <Switch>
          {/* Route for the account creation page */}
          <Route path="/create-account" component={CreateAccount} />
          {/* Route for the login page */}
          <Route path="/login" component={Login} />
          {/* Route for the location page */}
          <Route path="/location" component={Location} />
          {/* Route for the forecast page */}
          <Route path="/forecast" component={Forecast} />
          {/* Default route for the home page */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter;
