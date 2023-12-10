import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin from react-google-login
// Additional imports for form handling, e.g., formik, yup, etc.

function SignupPage() {
  const history = useNavigate(); // Provides access to the navigation history

  // Define form state and handle form submission
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic here, including making an HTTP POST request to your backend API for user registration.
    try {
      // Send registration data to the server and handle the response
      // Redirect the user to the next step upon successful registration
      history.push('/profile-setup'); // Change this route to match your project's routing
    } catch (error) {
      // Handle registration error
    }
  };

  // Define a function to handle Google Sign-In success
  const handleGoogleSuccess = async (response) => {
    // You can access the user's Google profile information in the 'response' object
    const { profileObj } = response;
    // You can use this information to handle the user registration on your backend
    // Example: Send 'profileObj' to your backend API for registration

    try {
      // Handle the response from your backend and redirect accordingly
      history.push('/profile-setup'); // Change this route as needed
    } catch (error) {
      // Handle registration error
    }
  };

  // Define a function to handle Google Sign-In failure
  const handleGoogleFailure = (error) => {
    // Handle Google Sign-In failure here
    console.error('Google Sign-In failed:', error);
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      {/* Add the Google Sign-In button */}
      <GoogleLogin
        clientId="914883698458-0kq7aoca7dtr8fi63i2mbejsc47i5lr9.apps.googleusercontent.com" // Replace with your actual Google Client ID
        buttonText="Sign up with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SignupPage;
