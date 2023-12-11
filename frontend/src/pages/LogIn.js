import React, { useState } from 'react';
import '../App.css'; // This steps out of the components folder into src

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a request body object with email and password
    const requestBody = { email, password };

    // Send a POST request to the backend's login endpoint
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 200) {
        // Login successful, handle the response accordingly
        // Redirect to the user's profile page or perform other actions
        window.location.href = '/profile'; // Replace with your profile page URL
      } else {
        // Login failed, handle errors and display an error message
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
