import React, { useState, useEffect } from 'react';
import imageData from './imageData';
import { FaHeart } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";

const ImageGalleryComponent = ({ category, searchQuery }) => {
  const [images, setImages] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const filterImages = () => {
    let filteredImages = imageData;

    if (category !== 'Discover') {
      filteredImages = filteredImages.filter(image => image.categories.includes(category));
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filteredImages = filteredImages.filter(image =>
        image.designName.toLowerCase().includes(lowerCaseQuery) ||
        image.designerName.toLowerCase().includes(lowerCaseQuery) ||
        image.tags.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(lowerCaseQuery)) ||
        image.categories.some(cat => cat.toLowerCase().includes(lowerCaseQuery)) ||
        image.colors.some(color => color.toLowerCase().includes(lowerCaseQuery))
      );
    }

    setImages(filteredImages);
    setSearchResults(filteredImages);
    setShowNoResults(filteredImages.length === 0);
  };

  useEffect(() => {
    filterImages();
  }, [category, searchQuery]);

  return (
    <div className="images">
      {showNoResults ? (
        <p>No results found</p>
      ) : (
        searchResults.map((image) => (
          <div key={image.id} className="items">
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="image" />
              <div className="hovertext">
                <h3>{image.designName}</h3>
              </div>
            </div>
            <div className="info">
          <p className="designer-name">{image.designerName}</p>
          <div className="likes-views">
            <p ><FaHeart /> {image.likes}</p>
            <p ><TbEyeFilled /> {image.views}</p>
          </div>
        </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGalleryComponent;
