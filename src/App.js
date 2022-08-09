import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import SelectedImage from './components/SelectedImage';
import images from './constants/images';
import AutoPlay from './components/AutoPlay';
import Meta from './components/Meta';

const App = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(true);

  const handleClick = action => {
    if (action === 'next') {
      setCurrentImage(prev => {
        const index = images.findIndex(el => el.id === prev.id);
        if (index === images.length - 1) {
          return images[0];
        } else {
          return images[index + 1];
        }
      });
    }

    if (action === 'previous') {
      setCurrentImage(prev => {
        const index = images.findIndex(el => el.id === prev.id);
        if (!index) {
          return images[images.length - 1];
        } else {
          return images[index - 1];
        }
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        handleClick('next');
      }
    }, 3000);
    return () => clearInterval(timer); // cleanup
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="app-container">
      <div className="left">
        <SelectedImage currentImage={currentImage} />
        <ImageList
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          handleClick={handleClick}
        />
      </div>
      <div className="right">
        <Meta currentImage={currentImage} />
        <AutoPlay togglePause={togglePause} isPaused={isPaused} />
      </div>
    </div>
  );
};

export default App;
