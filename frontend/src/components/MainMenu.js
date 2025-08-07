import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const menuItems = [
  { label: 'Inicio', link: '/' },
  { label: 'Visualización', link: '/excel' },
  { label: 'Convertir', submenu: [
    { label: 'PDF a Excel', link: '/convert/pdf-excel' },
    { label: 'Word a Excel', link: '/convert/word-excel' },
    { label: 'ZIP a Excel', link: '/convert/zip-excel' },
    { label: 'Imagen a Excel', link: '/convert/img-excel' },
  ]},
  { label: 'Compresión', submenu: [
    { label: 'Comprimir PDF', link: '/compress/pdf' },
    { label: 'Comprimir Excel', link: '/compress/excel' },
    { label: 'Comprimir Imagen', link: '/compress/img' },
  ]},
  { label: 'Análisis', link: '/analysis' },
];

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuOpen = (event, label) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
      {menuItems.map((item) => (
        item.submenu ? (
          <Box key={item.label}>
            <Button
              endIcon={<ArrowDropDownIcon />}
              sx={{ color: '#fff', fontWeight: 'bold', borderRadius: 2, px: 2, py: 1, textTransform: 'none', fontSize: '1rem', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
              onMouseEnter={(e) => handleMenuOpen(e, item.label)}
              onMouseLeave={handleMenuClose}
            >
              {item.label}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === item.label}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              sx={{ mt: 1 }}
            >
              {item.submenu.map((sub) => (
                <MenuItem key={sub.label} sx={{ fontWeight: 'bold', fontSize: '0.95rem', borderRadius: 2 }}>{sub.label}</MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button
            key={item.label}
            sx={{ color: '#fff', fontWeight: 'bold', borderRadius: 2, px: 2, py: 1, textTransform: 'none', fontSize: '1rem', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
          >
            {item.label}
          </Button>
        )
      ))}
    </Box>
  );
};

export default MainMenu;
