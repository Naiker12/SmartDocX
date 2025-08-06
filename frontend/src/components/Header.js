import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GoogleIcon from '@mui/icons-material/Google';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  minWidth: 300,
};

const Header = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppBar position="static" sx={{ bgcolor: darkMode ? '#1a237e' : '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff', letterSpacing: 2 }}>
          SmartDocX
        </Typography>
        {/* Centro: Inicio */}
        <Button color="inherit" sx={{ mx: 2, fontWeight: 'bold', fontSize: '1rem' }}>
          Inicio
        </Button>
        {/* Derecha: Botones y modo oscuro */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button color="inherit" onClick={() => setOpenRegister(true)} sx={{ fontWeight: 'bold' }}>
            Registrarse
          </Button>
          <Button color="inherit" onClick={() => setOpenLogin(true)} sx={{ fontWeight: 'bold' }}>
            Login
          </Button>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
      {/* Modal de registro */}
      <Modal open={openRegister} onClose={() => setOpenRegister(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>Registro</Typography>
          {/* Aquí va el formulario de registro */}
          <Button onClick={() => setOpenRegister(false)} variant="contained" color="primary">Cerrar</Button>
        </Box>
      </Modal>
      {/* Modal de login */}
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>Login</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 1 }}>
              Iniciar sesión con Google
            </Button>
            <Button variant="outlined" startIcon={<SmartphoneIcon />} sx={{ mb: 1 }}>
              Iniciar sesión con celular
            </Button>
          </Box>
          {/* Aquí iría el formulario de login tradicional si lo deseas */}
          <Button onClick={() => setOpenLogin(false)} variant="contained" color="primary" sx={{ mt: 2 }}>Cerrar</Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;
