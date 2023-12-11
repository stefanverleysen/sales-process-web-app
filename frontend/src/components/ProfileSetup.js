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
  });

  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending the data to a backend service
    console.log(profileData);
    // If you need to send the data to a backend, you would typically use fetch or axios here
  };

  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    // Here you can send the profile photo to a backend service
    console.log('Profile Photo:', profilePhoto);
    // If you need to send the photo to a backend, you can use fetch or axios here
  };

  return (
    <div className="profile-setup">
      <h2>Profile Setup</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        {/* Rest of the form inputs */}
        <button type="submit" className="save-btn">Save Profile Data</button>
      </form>

      <form onSubmit={handlePhotoSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="profilePhoto">Profile Photo:</label>
          <input
            id="profilePhoto"
            type="file"
            name="profilePhoto"
            onChange={handlePhotoChange}
          />
          {profilePhoto && (
            <img
              src={URL.createObjectURL(profilePhoto)}
              alt="Profile Preview"
              className="profile-preview"
              onLoad={() => URL.revokeObjectURL(profilePhoto)}
            />
          )}
        </div>
        <button type="submit" className="save-btn">Save Profile Photo</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
