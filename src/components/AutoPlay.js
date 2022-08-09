import { IconButton } from '@mui/material';
import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseIcon from '@mui/icons-material/Pause';

const AutoPlay = ({ togglePause, isPaused }) => {
  return (
    <div className="autoplay-button">
      <IconButton onClick={togglePause}>
        {isPaused ? (
          <PlayCircleFilledWhiteIcon />
        ) : (
          <PauseIcon />
        )}
      </IconButton>
    </div>
  );
};

export default AutoPlay;
