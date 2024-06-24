import React, { useState } from 'react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import logo from '/src/assets/images/Dribbble-Logo.jpg';

const NavBarComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  return (
    <div className='NavBar'>
      <nav>
        <ul>

          <li className="dropdown">
            <a href='/'>Find Designers <FaAngleDown /></a>
            <div className="dropdown-content">
              <a href='/'>Designer Search</a>
              <a href='/'>Post a Job</a>
            </div>
          </li>

          <li><a href='/'>Inspiration</a></li>

          <li className="dropdown">
            <a href='/'>Courses <FaAngleDown /></a>
            <div className="dropdown-content">
              <a href='/'>UX Diploma</a>
              <a href='/'>UI Certificate</a>
            </div>
          </li>

          <li><a href='/'>Jobs</a></li>
          <li><a href='/'>Go Pro</a></li>

        </ul>
      </nav>

      <div>
        <img src={logo} className='logo' alt="brand logo" />
      </div>

      <div className='left'>
        <div className="searchcontainer">
          <input
            type="text"
            className="searchbar"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleSearchKeyPress}
          />
          <FaSearch className="searchicon" />
        </div>
        <div className='name'> </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
