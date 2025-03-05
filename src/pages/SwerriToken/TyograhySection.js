// components/TypographySection.js
import React from 'react';
import Typography from '@mui/material/Typography';

const TypographySection = ({ title, subtitle, colorTitle, colorSubtitle, variantTitle = 'h3', variantSubtitle = 'body1' }) => {
  return (
    <Typography color={colorTitle} variant={variantTitle} sx={{ fontSize: { md: 48, xs: 25 }, textAlign: 'left' }}>
      <Typography sx={{ fontSize: { md: 40, xs: 25 }, fontWeight: 800, color: colorTitle }} component="span">
        {title}
      </Typography>
      <Typography sx={{ fontSize: { md: 40, xs: 25 }, fontWeight: 800, color: colorSubtitle }} component="span">
        {subtitle}
      </Typography>
    </Typography>
  );
};

export default TypographySection;
