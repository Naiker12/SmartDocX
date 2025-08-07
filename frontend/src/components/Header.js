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
      background: 'rgba(10,15,30,0.95)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
      borderRadius: 18,
      mt: 32,
      mx: 'auto',
      width: { xs: '99%', md: '96%' },
      maxWidth: 1300,
      left: 0,
      right: 0,
      zIndex: 10,
      border: '1px solid var(--border-color)',
      backdropFilter: 'blur(8px)',
      minHeight: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Toolbar sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        alignItems: 'center',
        borderRadius: 18,
        minHeight: 64,
        px: { xs: 1, md: 3 },
        width: '100%',
      }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'var(--primary-light)', letterSpacing: 1 }}>
            SmartDocX
          </Typography>
        </Box>
        {/* Menú principal centrado */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <MainMenu />
        </Box>
        {/* Derecha: Botones y modo oscuro en una línea */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
          <Button color="inherit" onClick={() => setOpenRegister(true)} sx={{ fontWeight: 'bold', bgcolor: 'var(--primary-color)', color: '#fff', borderRadius: 6, px: 2, boxShadow: 'var(--shadow-sm)', minWidth: 80, height: 36, fontSize: '0.95rem', '&:hover': { bgcolor: 'var(--primary-dark)' } }}>
            Registrarse
          </Button>
          <Button color="inherit" onClick={() => setOpenLogin(true)} sx={{ fontWeight: 'bold', bgcolor: 'var(--secondary-color)', color: '#fff', borderRadius: 6, px: 2, boxShadow: 'var(--shadow-sm)', minWidth: 80, height: 36, fontSize: '0.95rem', '&:hover': { bgcolor: 'var(--secondary-dark)' } }}>
            Login
          </Button>
          <IconButton color="inherit" onClick={toggleMode} sx={{ ml: 1, height: 36 }}>
            {mode === 'dark' ? <Brightness7Icon sx={{ color: 'var(--accent-color)' }} /> : <Brightness4Icon sx={{ color: 'var(--accent-color)' }} />}
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
        <Box sx={{ ...modalStyle, bgcolor: 'var(--bg-card)', color: 'var(--text-primary)', borderRadius: 8, boxShadow: 'var(--shadow-lg)', minWidth: 350 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold', color: 'var(--primary-light)' }}>Login</Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <input type="email" placeholder="Correo electrónico" required style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1.5px solid var(--border-light)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '0.5rem',
            }} />
            <input type="password" placeholder="Contraseña" required style={{
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1.5px solid var(--border-light)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none',
              marginBottom: '0.5rem',
            }} />
            <Button type="submit" variant="contained" sx={{ bgcolor: 'var(--primary-color)', color: '#fff', borderRadius: 8, fontWeight: 'bold', py: 1, fontSize: '1rem', boxShadow: 'var(--shadow-sm)', '&:hover': { bgcolor: 'var(--primary-dark)' } }}>
              Iniciar sesión
            </Button>
          </Box>
          <Button onClick={() => setOpenLogin(false)} variant="text" sx={{ mt: 2, color: 'var(--accent-color)', fontWeight: 'bold' }}>Cerrar</Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;
