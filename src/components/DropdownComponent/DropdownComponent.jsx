import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DropdownComponent = ({ onCategoryChange }) => {
  const [activeButton, setActiveButton] = useState('Discover');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onCategoryChange(buttonName);
    toast.info(`Category changed to ${buttonName}`)
  };

  return (
    <div className="categories">
      <select>
        <option value="following">Following</option>
        <option value="popular">Popular</option>
        <option value="newAndNoteworthy">New & Noteworthy</option>
      </select>
      <div className="buttons">
        <ul>
          {['Discover', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Product Design', 'Typography', 'Web Design'].map((buttonName) => (
            <li key={buttonName}>
              <button
                onClick={() => handleButtonClick(buttonName)}
                className={activeButton === buttonName ? 'active' : ''}
              >
                {buttonName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter">
        <button>
          <BsFilter className="filter-icon" />Filters
        </button>
      </div>
    </div>
  );
};

export default DropdownComponent;
