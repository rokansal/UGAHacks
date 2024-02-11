import React, { useState } from 'react';
import './styles/HomePage.css'; // Import HomePage CSS file

function HomePage() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [children, setChildren] = useState([
    { name: 'Alice', age: 8 },
    { name: 'Bob', age: 6 },
    { name: 'Charlie', age: 10 }
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
    <body>
      <main>
        <nav className="main-menu">
          <h1>Safe Steps</h1>
          <ul>
            <li className={`nav-item ${activeNavItem === 0 ? 'active' : ''}`} onClick={() => handleNavItemClick(0)}>
              <b></b>
              <b></b>
              <a href="#">
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
          </div>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="textbox">Enter a Georgia zip code:</label>
                <input type="number" id="textbox" name="textbox" min="0" value={inputValue} onChange={handleInputChange} />
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
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default HomePage;
