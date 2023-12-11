import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import ProfileSetup from './components/ProfileSetup'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profilesetup" component={ProfileSetup} />
            {/* Add more routes for other pages as needed */}
          </Switch>
        </main>
        <footer className="App-footer">
          {/* Add footer content here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
