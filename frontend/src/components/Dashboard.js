import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import this if you want to link to other pages
import axios from 'axios'; // Import axios for making API requests

function Dashboard() {
  const [salesMaps, setSalesMaps] = useState([]);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    businessName: '',
    industry: '',
    role: '',
    communicationPref: '',
  });

  // Fetch user's sales maps when the component mounts
  useEffect(() => {
    // Make an API request to fetch sales maps data
    axios.get('/api/sales') // Replace '/api/sales-maps' with your actual API endpoint
      .then((response) => {
        setSalesMaps(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sales maps:', error);
      });
  }, []);

  // Fetch user's profile data when the component mounts
  useEffect(() => {
    // Make an API request to fetch user profile data
    axios.get('/api/profile') // Replace '/api/profile' with your actual API endpoint
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Make an API request to update user profile data
    axios.put('/api/profile', profileData) // Replace '/api/profile' with your actual API endpoint
      .then(() => {
        console.log('Profile updated successfully');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="sales-maps">
        <h3>Sales Maps</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesMaps.map((map) => (
              <tr key={map.id}>
                <td>{map.name}</td>
                <td>{map.date}</td>
                <td>
                  <Link to={`/edit-map/${map.id}`}>Edit</Link>
                  {/* Replace '/edit-map' with your actual edit page */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="profile">
        <h3>Profile</h3>
        <form onSubmit={handleProfileUpdate}>
          {/* Profile input fields */}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </div>
          {/* Add more input fields for other profile data */}
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
