import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import SignupPage from './components/SignupPage'; // Import the SignupPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>Welcome to Your App</h1>
          <p>Join us and create an account!</p>
          <Link to="/signup">Sign Up</Link> {/* Link to the Signup page */}
        </header>

        <main>
          <Routes>
            <Route path="/signup" component={SignupPage} /> {/* Use the SignupPage component here */}
            {/* Add more routes for other pages as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
