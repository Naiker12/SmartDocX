import React from 'react';
import Button from '@mui/material/Button';
import TableChartIcon from '@mui/icons-material/TableChart';
import TransformIcon from '@mui/icons-material/Transform';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import CompressIcon from '@mui/icons-material/Compress';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import CompareIcon from '@mui/icons-material/CompareArrows';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import Box from '@mui/material/Box';

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

const MenuFeatures = () => (
  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', flex: 1 }}>
    {features.map((f) => (
      <Button
        key={f.label}
        startIcon={f.icon}
        sx={{
          bgcolor: f.color,
          color: '#fff',
          borderRadius: 3,
          fontWeight: 'bold',
          px: 2,
          py: 1,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          textTransform: 'none',
          fontSize: '0.95rem',
          '&:hover': { bgcolor: f.color, opacity: 0.85 },
        }}
      >
        {f.label}
      </Button>
    ))}
  </Box>
);

export default MenuFeatures;
