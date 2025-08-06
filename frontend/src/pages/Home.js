import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import FileUploadForm from '../components/FileUploadForm';
import { Box } from '@mui/material';

const Home = () => (
  <Box sx={{ minHeight: '100vh', pb: 8, display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}>
      <Card>
        <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>Sube tu archivo</h2>
        <FileUploadForm />
      </Card>
    </Box>
    <Footer />
  </Box>
);

export default Home;
