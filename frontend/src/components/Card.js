import React from 'react';

const Card = ({ children }) => (
  <div style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '2rem', maxWidth: '400px', margin: '2rem auto'}}>
    {children}
  </div>
);

export default Card;
