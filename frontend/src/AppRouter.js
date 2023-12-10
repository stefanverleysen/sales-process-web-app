import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage'; // Import the SignupPage component

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" component={SignupPage} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
