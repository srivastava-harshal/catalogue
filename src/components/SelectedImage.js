import React from 'react';

const SelectedImage = ({ currentImage }) => {
  return (
    <div className="selected-image">
      <img
        alt={currentImage.alt}
        src={currentImage.src}
      />
    </div>
  );
};

export default SelectedImage;
