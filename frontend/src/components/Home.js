import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // This steps out of the components folder into src


function Home() {
  return (
    
    <div className="home-container">
            {/* Links to other pages */}
            <nav className="home-nav">
        <ul>
          <li><Link to="/signup">Sign Up</Link></li> {/* Link to SignupPage */}
          <li><Link to="/profilesetup">Profile Setup</Link></li> {/* Link to Profile Setup */}
          <li><Link to="/login">Login</Link></li>    {/* Link to Login */}
          <li><Link to="/dashboard">Dashboard</Link></li>    {/* Link to Login */}

          {/* Add more links as needed */}
        </ul>
      </nav>
      <div className='homeinfoblock'>
      <h1>Welcome to Sales Mapper</h1>
      
      <p>Sales Mapper is an innovative multi-step React application designed to revolutionize your sales mapping experience. This application guides you through a series of interactive steps to input and manage crucial sales process data, culminating in a dynamic Kanban board visualization.</p>

      <h2>How It Works:</h2>
      <ul>
        <li>Business Info Input: Begin by entering essential business information.</li>
        <li>Define Sales Process Stages: Customize and manage various stages of your sales process.</li>
        <li>Key Activities and Milestones: Detail important activities and milestones for a comprehensive view.</li>
        <li>Dynamic Visualization: Watch as your input transforms into a visually appealing and interactive sales process.</li>
      </ul>

      <h2>Key Features:</h2>
      <ul>
        <li>Component-Based Design: Utilizing modular React components for specific functions.</li>
        <li>Efficient State Management: Centralized state management in App.js.</li>
        <li>Step-Based Navigation: Navigate through different stages of data input and review.</li>
        <li>Interactive UI: Add or remove stages and manage details dynamically.</li>
        <li>Elegant Styling: A user-friendly interface, meticulously styled for the best user experience.</li>
      </ul>

      <p>Visualize Your Sales Process Like Never Before! Experience an intuitive journey from simple data input to a comprehensive visual representation of your sales strategy. Sales Mapper is more than an application; it's your partner in strategizing and visualizing your sales success.</p>
      </div>

    </div>
  );
}

export default Home;
