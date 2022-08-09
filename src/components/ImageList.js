import React from 'react';
import '../../src/App.css';
import images from '../constants/images';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

const ImageList = ({ currentImage, setCurrentImage, handleClick }) => {
  const renderList = images.map(image => {
    return (
      <img
        key={image.id}
        src={image.src}
        style={{
          filter:
            currentImage.id === image.id ? 'grayscale(0%)' : 'grayscale(100%)',
        }}
        alt={image.alt}
        onClick={() => setCurrentImage(image)}
      />
    );
  });

  return (
    <div className="image-list-wrapper">
      <IconButton onClick={() => handleClick('previous')}>
        <ArrowBackIosIcon />
      </IconButton>
      <div className="image-list">{renderList}</div>
      <IconButton onClick={() => handleClick('next')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default ImageList;
