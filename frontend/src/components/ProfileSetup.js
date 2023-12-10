import React, { useState } from 'react';

function ProfileSetup() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    businessName: '',
    industry: '',
    role: '',
    communicationPref: '',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission like sending data to backend
    console.log(profileData);
  };

  return (
    <div className="profile-setup">
      <h2>Profile Setup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={profileData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profileData.email} onChange={handleChange} />
        </label>
        <label>
          Business Name:
          <input type="text" name="businessName" value={profileData.businessName} onChange={handleChange} />
        </label>
        <label>
          Industry:
          <input type="text" name="industry" value={profileData.industry} onChange={handleChange} />
        </label>
        <label>
          Role:
          <input type="text" name="role" value={profileData.role} onChange={handleChange} />
        </label>
        <label>
          Communication Preferences:
          <input type="text" name="communicationPref" value={profileData.communicationPref} onChange={handleChange} />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
