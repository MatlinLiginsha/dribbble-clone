import React, { useState } from 'react';
import './HomePageComponent.css';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import ImageGalleryComponent from '../ImageGalleryComponent/ImageGalleryComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

const HomePageComponent = () => {
  const [category, setCategory] = useState('Discover');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className="home-page-container">
      <NavBarComponent onSearch={handleSearch} />
      <DropdownComponent onCategoryChange={handleCategoryChange} />
      <ImageGalleryComponent category={category} searchQuery={searchQuery} />
      <FooterComponent/>
    </div>
  );
};

export default HomePageComponent;
