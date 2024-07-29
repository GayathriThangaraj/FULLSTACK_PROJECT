import React from 'react';
import { Box } from '@mui/material';
import Real from '../assets/images/Real.jpg';  // Adjust the path as necessary

const BackgroundImageComponent = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${RealImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
      }}
    />
  );
};

export default BackgroundImageComponent;
