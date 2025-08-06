import React from 'react';
import { Box } from '@mui/material';

const Card = ({ children }) => (
  <Box sx={{
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 6,
    boxShadow: '0 4px 24px rgba(25,118,210,0.15)',
    padding: { xs: 2, md: 4 },
    maxWidth: 480,
    margin: '2rem auto',
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'box-shadow 0.3s',
  }}>
    {children}
  </Box>
);

export default Card;
