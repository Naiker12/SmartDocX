import React from 'react';
import { Box } from '@mui/material';

const Card = ({ children }) => (
  <Box sx={{
    background: 'rgba(51,65,85,0.85)',
    borderRadius: 24,
    boxShadow: '0 8px 32px rgba(59,130,246,0.18)',
    padding: { xs: 4, md: 8 },
    maxWidth: 700,
    margin: '3rem auto',
    minHeight: 320,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'box-shadow 0.3s, background 0.3s',
    color: 'var(--text-primary)',
    border: '1.5px solid var(--border-light)',
    '&:hover': {
      background: 'var(--primary-color)',
      boxShadow: '0 12px 48px rgba(59,130,246,0.28)',
      color: '#fff',
    },
  }}>
    {children}
  </Box>
);

export default Card;
