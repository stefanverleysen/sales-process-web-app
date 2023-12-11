// Profile.js

import React, { useState } from 'react';

function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Add your update profile logic here, e.g., send a PUT request to your backend
    console.log('Updated Profile Data:', profileData);
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          name="firstName"
          value={profileData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={profileData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleInputChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
