import React from 'react';
import { Button } from '@mui/material';

const GestioneUtenti = ({ onClick }) => {
  return (
    <div>
      <h2>Gestione Utenti</h2>
      <button onClick={() => onClick('visualizzaTutti')}>Visualizza Tutti</button>
      <button onClick={() => onClick('selezionaUtente')}>Seleziona Utente</button>
    </div>
  );
}

export default GestioneUtenti;
