import React from 'react';
import { Button } from '@mui/material';

const MenuNavigazione = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick('gestioneUtenti')}>Menu Utenti</button>
      <button onClick={() => onClick('bilancio')}>Menu Bilancio</button>
    </div>
  );
}

export default MenuNavigazione;
