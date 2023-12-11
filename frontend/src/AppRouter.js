import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './components/SignupPage'; // Import the SignupPage component
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
        {/* Add more routes for other pages as needed */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
