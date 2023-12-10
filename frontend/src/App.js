import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage'; // Import the SignupPage component
import Header from './components/Header';
import Login from './components/Login';
import TestPage from './components/TestPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>Welcome to Your App</h1>
          <p>Join us and create an account!</p>
          {/* If you have any Link components, make sure they are imported */}
        </header>

        <main>
          <Switch>
            <Route exact path="/signup" component={SignupPage} />
            {/* Add more routes for other pages as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
