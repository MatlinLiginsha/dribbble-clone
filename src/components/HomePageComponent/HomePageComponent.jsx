import React, { useState } from 'react';
import './HomePageComponent.css';
import NavBarComponent from '../NavBarComponent/NavBarComponent';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
import ImageGalleryComponent from '../ImageGalleryComponent/ImageGalleryComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePageComponent = () => {
  const [category, setCategory] = useState('Discover');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    if (newSearchQuery.trim() !== '') {
      toast.success(`Search results for ${newSearchQuery}`);
    }
  };

  return (
    <div className="home-page-container">
      <NavBarComponent onSearch={handleSearch} />
      <DropdownComponent onCategoryChange={handleCategoryChange} />
      <ImageGalleryComponent category={category} searchQuery={searchQuery} />
      <FooterComponent/>
      <ToastContainer 
      position="bottom-right"
      autoClose="1000"/>
    </div>
  );
};

export default HomePageComponent;
