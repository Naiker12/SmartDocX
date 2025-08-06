import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{
    width: '100%',
    bgcolor: 'rgba(25, 118, 210, 0.95)',
    color: '#fff',
    py: 3,
    px: 2,
    mt: 6,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    boxShadow: '0 -2px 16px rgba(0,0,0,0.08)',
    textAlign: 'center',
    fontSize: { xs: '0.9rem', md: '1rem' },
  }}>
    <Typography variant="body2" sx={{ mb: 1 }}>
      © 2025 SmartDocX. Todos los derechos reservados.
    </Typography>
    <Link href="https://github.com/Naiker12/SmartDocX" target="_blank" rel="noopener" sx={{ color: '#fff', textDecoration: 'underline', fontWeight: 'bold', fontSize: 'inherit' }}>
      GitHub
    </Link>
  </Box>
);

export default Footer;
