import React from 'react';

const Meta = ({ currentImage }) => {
  return (
    <div className="content">
      <h1>{currentImage.title}</h1>
      <p>{currentImage.content}</p>
    </div>
  );
};

export default Meta;
