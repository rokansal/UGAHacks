// HomePage.jsx

import React from 'react';
import './styles/HomePage.css';

const childrenData = [
  { id: 1, name: 'Child 1', age: 5, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Child 2', age: 7, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Child 3', age: 8, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Child 4', age: 6, imageUrl: 'https://via.placeholder.com/150' },
  // Add more children data as needed
];

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Safe Steps</h1>
      </div>
      <div className="home-children-list">
        {childrenData.map(child => (
          <div className="home-child-row" key={child.id}>
            <img src={child.imageUrl} alt={child.name} className="home-child-image" />
            <div className="home-child-details">
              <h2>{child.name}</h2>
              <p>Age: {child.age}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="home-add-child">
        <button className="home-add-child-button">Add Child</button>
      </div>
    </div>
  );
};

export default HomePage;
