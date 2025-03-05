// components/Section.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TypographySection from './TyograhySection';
import ReusableImage from './ResueableImages';


const Section = ({ title, subtitle, imageSrc, imageAlt, children }) => (
  <>
    <Grid item xs={12} md={6}>
      <TypographySection
        title={title}
        subtitle={subtitle}
        colorTitle="#25373f"
        colorSubtitle="#785aec"
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography sx={{ fontSize: '18px', textAlign: 'left', fontWeight: 400, color: 'rgba(37, 55, 63, 0.7)', py: 1 }}>
        {children}
      </Typography>
    </Grid>
    {imageSrc && (
      <Grid item xs={12} md={6}>
        <ReusableImage src={imageSrc} alt={imageAlt} />
      </Grid>
    )}
  </>
);

export default Section;
