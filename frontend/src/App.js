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
        <Header /> {/* Header at the top */}
        
        <main className="App-main"> {/* Main content */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignupPage} />
            {/* Add more routes for other pages as needed */}
          </Switch>
        </main>

        <footer className="App-footer"> {/* Footer at the bottom */}
          {/* Add footer content here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;