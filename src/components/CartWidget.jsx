import React from 'react';

const CartWidget = () => {
  const cartCount = 3; // Podés cambiar este número por una variable de estado más adelante

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      🛒
      <span>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
