import React, { useRef } from 'react';

const FileUploadForm = () => {
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      alert(`Archivo seleccionado: ${file.name}`);
      // Aquí iría la lógica para subir el archivo al backend
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <input type="file" ref={fileInputRef} style={{padding: '0.5rem'}} />
      <button type="submit" style={{background: '#2d3748', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>Subir archivo</button>
    </form>
  );
};

export default FileUploadForm;
