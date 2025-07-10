import React from 'react';
import ProfileCard from './Profilecard';
import './App.css';

const App = () => {
  const profiles = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Passionate about React and UI/UX design.",
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      description: "Loves working with Node.js and databases.",
    },
    {
      name: "Clara Lee",
      role: "Full Stack Engineer",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      description: "Expert in both frontend and backend technologies.",
    },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="card-container">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default App;
