import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin from react-google-login

function SignupPage() {
  const history = useHistory(); // Provides access to the navigation history

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
    // Implement form submission logic here
    try {
      // Send registration data to the server
      // Redirect the user to the next step upon successful registration
      history.push('/profile-setup'); // Use history.push to navigate
    } catch (error) {
      // Handle registration error
    }
  };

  // Define a function to handle Google Sign-In success
  const handleGoogleSuccess = async (response) => {
    const { profileObj } = response;
    try {
      // Handle the response from your backend
      history.push('/profile-setup'); // Use history.push to navigate
    } catch (error) {
      // Handle registration error
    }
  };

  // Define a function to handle Google Sign-In failure
  const handleGoogleFailure = (error) => {
    console.error('Google Sign-In failed:', error);
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields and submit button */}
      </form>

      <GoogleLogin
        clientId="your-google-client-id"
        buttonText="Sign up with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SignupPage;
