import React from 'react';
import './App.css';
import AppRouter from './AppRouter'; // Import the AppRouter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your header content can go here */}
        <h1>Welcome to Your App</h1>
        <p>Join us and create an account!</p>
      </header>

      <main>
        {/* Render the AppRouter component */}
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
