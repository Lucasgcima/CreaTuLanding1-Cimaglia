import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <h1>Mi Sitio de Reservas</h1>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><a href="#" style={{ color: 'white' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white' }}>Reservas</a></li>
        <li><a href="#" style={{ color: 'white' }}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
