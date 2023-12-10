import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupPage from './components/SignupPage'; // Import the SignupPage component

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignupPage} />
        {/* Add more routes for other pages as needed */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
