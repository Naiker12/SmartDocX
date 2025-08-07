import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{
    width: '100%',
    bgcolor: 'rgba(15,23,42,0.95)',
    color: 'var(--text-secondary)',
    py: 3,
    px: 2,
    mt: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    boxShadow: '0 -4px 24px rgba(0,0,0,0.18)',
    textAlign: 'center',
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    letterSpacing: 1,
  }}>
    <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold', color: 'var(--text-muted)' }}>
      © 2025 SmartDocX. Todos los derechos reservados.
    </Typography>
    <Link href="https://github.com/Naiker12/SmartDocX" target="_blank" rel="noopener" sx={{ color: 'var(--accent-color)', textDecoration: 'underline', fontWeight: 'bold', fontSize: 'inherit' }}>
      GitHub
    </Link>
  </Box>
);

export default Footer;
