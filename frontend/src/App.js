import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage'; // Import the SignupPage component
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>Welcome to Your App</h1>
          <p>Join us and create an account!</p>
          {/* Make sure to import Link if you are using it */}
        </header>

        <main>
          <Routes>
            <Route path="/signup" element={<SignupPage />} /> {/* Update this to the correct Route syntax */}
            {/* Add more routes for other pages as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
