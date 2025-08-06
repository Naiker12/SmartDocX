import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import FileUploadForm from '../components/FileUploadForm';

const Home = () => (
  <div style={{minHeight: '100vh', background: '#f7fafc', paddingBottom: '2.5rem'}}>
    <Header />
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh'}}>
      <Card>
        <h2 style={{marginBottom: '1rem', textAlign: 'center'}}>Sube tu archivo</h2>
        <FileUploadForm />
      </Card>
    </main>
    <Footer />
  </div>
);

export default Home;
