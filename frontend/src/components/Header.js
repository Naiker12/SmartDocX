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
import TableChartIcon from '@mui/icons-material/TableChart';
import TransformIcon from '@mui/icons-material/Transform';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import CompressIcon from '@mui/icons-material/Compress';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import CompareIcon from '@mui/icons-material/CompareArrows';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { useThemeMode } from '../context/ThemeContext';
import MenuFeatures from './MenuFeatures';
import MainMenu from './MainMenu';

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

const features = [
  { label: 'Visualización Nativa de Excel', icon: <TableChartIcon />, color: '#1976d2' },
  { label: 'Conversión Automática', icon: <TransformIcon />, color: '#00bcd4' },
  { label: 'Descompresión Inteligente', icon: <UnarchiveIcon />, color: '#ff9800' },
  { label: 'Compresión de Archivos', icon: <CompressIcon />, color: '#8bc34a' },
  { label: 'OCR Avanzado', icon: <TextFieldsIcon />, color: '#e91e63' },
  { label: 'Análisis de Datos', icon: <BarChartIcon />, color: '#9c27b0' },
  { label: 'Historial de Versiones', icon: <HistoryIcon />, color: '#607d8b' },
  { label: 'Comparación de Filas', icon: <CompareIcon />, color: '#f44336' },
  { label: 'Estructura ZIP a Excel', icon: <FolderSpecialIcon />, color: '#3f51b5' },
];

const Header = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="static" sx={{
      bgcolor: 'transparent',
      background: mode === 'light'
        ? 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)'
        : 'linear-gradient(90deg, #1a237e 0%, #3949ab 100%)',
      boxShadow: 'none',
      borderRadius: 4,
      mt: 2,
      mx: 2,
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', borderRadius: 4 }}>
        {/* Logo */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', letterSpacing: 2, mr: 2 }}>
          SmartDocX
        </Typography>
        {/* Menú principal centrado */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <MainMenu />
        </Box>
        {/* Derecha: Botones y modo oscuro */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
          <Button color="inherit" onClick={() => setOpenRegister(true)} sx={{ fontWeight: 'bold', bgcolor: '#fff', color: '#1976d2', borderRadius: 3, px: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', '&:hover': { bgcolor: '#e3f2fd' } }}>
            Registrarse
          </Button>
          <Button color="inherit" onClick={() => setOpenLogin(true)} sx={{ fontWeight: 'bold', bgcolor: '#fff', color: '#1976d2', borderRadius: 3, px: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', '&:hover': { bgcolor: '#e3f2fd' } }}>
            Login
          </Button>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? <Brightness7Icon sx={{ color: '#fff' }} /> : <Brightness4Icon sx={{ color: '#fff' }} />}
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
          <Button onClick={() => setOpenLogin(false)} variant="contained" color="primary" sx={{ mt: 2 }}>Cerrar</Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;
