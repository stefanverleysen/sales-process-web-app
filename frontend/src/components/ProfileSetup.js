import React, { useState } from 'react';
import '../App.css'; // Make sure this path is correct based on your project structure

function ProfileSetup() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    businessName: '',
    industry: '',
    role: '',
    communicationPref: '',
    profilePhoto: null, // Add a new state to hold the profile photo
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setProfileData({ ...profileData, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending the data to a backend service
    console.log(profileData);
    // If you need to send the data to a backend, you would typically use fetch or axios here
  };

  return (
    <div className="profile-setup">
      <h2>Profile Setup</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="profilePhoto">Profile Photo:</label>
          <input
            id="profilePhoto"
            type="file"
            name="profilePhoto"
            onChange={handlePhotoChange}
          />
          {profileData.profilePhoto && (
            <img
              src={URL.createObjectURL(profileData.profilePhoto)}
              alt="Profile Preview"
              className="profile-preview"
              onLoad={() => URL.revokeObjectURL(profileData.profilePhoto)}
            />
          )}
        </div>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Business Name:
            <input
              type="text"
              name="businessName"
              value={profileData.businessName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Industry:
            <input
              type="text"
              name="industry"
              value={profileData.industry}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={profileData.role}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Communication Preferences:
            <input
              type="text"
              name="communicationPref"
              value={profileData.communicationPref}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="save-btn">Save Profile</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
