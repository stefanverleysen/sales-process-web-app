import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'; // Import Axios

function SignupPage() {
  const history = useHistory();
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
    try {
      // Implement logic for manual sign-up
      const response = await axios.post('/api/signup', formData); // Adjust the endpoint URL
      if (response.status === 201) {
        history.push('/profile-setup');
      } else {
        console.error('Signup failed:', response.data.message);
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleGoogleSuccess = async (response) => {
    const { profileObj } = response;
    try {
      // Implement logic for Google Sign-In
      const response = await axios.post('/api/google-signin', profileObj); // Adjust the endpoint URL
      if (response.status === 200) {
        history.push('/profile-setup');
      } else {
        console.error('Google Sign-In failed:', response.data.message);
      }
    } catch (error) {
      console.error('Google Sign-In failed:', error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Sign-In failed:', error);
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      
      {/* Google Sign In */}
      <div className="google-signin">
        <GoogleLogin
          clientId="your-google-client-id"
          buttonText="Sign up with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>

      <div className="manual-signup">
        <h3>Or Sign Up Manually</h3>
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
      </div>
    </div>
  );
}

export default SignupPage;
