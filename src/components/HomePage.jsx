import React, { useState } from 'react';
import './styles/HomePage.css'; // Import HomePage CSS file
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './logout';


const HomePage = () => {
    const { isAuthenticated } = useAuth0();
    const imgSrc = "https://media.discordapp.net/attachments/1205929620088688653/1206178330324508693/Screenshot_2024-02-11_at_4.05.23_AM.png?ex=65db101b&is=65c89b1b&hm=d46abc57503e8eabb52032682786ec1e75f199f14c0e8f028c392b6c8a8727d0&=&format=webp&quality=lossless&width=1964&height=1072"
    const [displayedImage, setDisplayedImage] = useState(null);

    // Event handler function to display a specific image
    const displayImage = (event) => {
        event.preventDefault();
      setDisplayedImage(imgSrc);
    };

  const [activeNavItem, setActiveNavItem] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [children, setChildren] = useState([
    { name: 'Bob', age: 8 },
  ]);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleChildNameChange = (event) => {
    setChildName(event.target.value);
  };

  const handleChildAgeChange = (event) => {
    setChildAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newChild = { name: childName, age: childAge };
    setChildren([...children, newChild]);
    setChildName('');
    setChildAge('');
  };

  
  return (
    isAuthenticated && (
        <body>
        <main>
          <nav className="main-menu">
            <h1>Safe Steps</h1>
            <ul>
              <li className={`nav-item ${activeNavItem === 0 ? 'active' : ''}`} onClick={() => handleNavItemClick(0)}>
                <b></b>
                <b></b>
                <a href="/#">
                  <i className="fa fa-house nav-icon"></i>
                  <span className="nav-text">Home</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="right-content">
            <div className="user-info">
              <div className="icon-container">
                <i className="fa fa-bell nav-icon"></i>
                <i className="fa fa-message nav-icon"></i>
              </div>
              <h4>Logged in as: Rohan Kansal</h4>
              <LogoutButton />
            </div>
            <div className="container">
              <form onSubmit={displayImage}>
                <div className="input-container">
                  <label htmlFor="textbox">Enter a Georgia zip code:</label>
                  <input type="number" id="textbox" placeholder="30303" name="textbox" min="0" value={inputValue} onChange={handleInputChange} />
                  <button type="submit">Enter</button>
                </div>
              </form>
              <div className="children-list">
                <h2>Children List</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {children.map((child, index) => (
                      <tr key={index}>
                        <td>{child.name}</td>
                        <td>{child.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="add-child-form">
                <h2>Add Child</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="childName">Child's Name:</label>
                    <input type="text" id="childName" value={childName} onChange={handleChildNameChange} />
                  </div>
                  <div>
                    <label htmlFor="childAge">Child's Age:</label>
                    <input type="number" id="childAge" value={childAge} onChange={handleChildAgeChange} />
                  </div>
                  <button type="submit">Add Child</button>
                </form>
                {displayedImage && (
          <div className="image-container">
            <img src={displayedImage} alt="Displayed Image" className="scaled-image" />
          </div>
        )}
              </div>
            </div>
          </div>
        </main>
      </body>
        )
  );
}

export default HomePage;
