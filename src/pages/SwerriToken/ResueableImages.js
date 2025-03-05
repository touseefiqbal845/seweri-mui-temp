// components/ReusableImage.js
import React from 'react';
import Box from '@mui/material/Box';

const ReusableImage = ({ src, alt }) => (
  <Box sx={{ width: '100%', margin: 'auto', display: 'block' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
  </Box>
);

export default ReusableImage;
