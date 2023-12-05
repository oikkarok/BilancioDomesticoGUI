import React from 'react';
import { Button } from '@mui/material';

const SelezionaUtente = ({ onClick }) => {
  return (
    <div>
      <h2>Seleziona Utente</h2>
      <button onClick={() => onClick('speseUtente')}>Spese Utente</button>
      <button onClick={() => onClick('spesePerPeriodo')}>Spese per Periodo</button>
      <button onClick={() => onClick('aggiungiSpesa')}>Aggiungi Spesa</button>
      <button onClick={() => onClick('conteggioSpesa')}>Conteggio Spesa</button>
      <button onClick={() => onClick('conteggioSpesaPeriodo')}>Conteggio Spesa per Periodo</button>
    </div>
  );
}

export default SelezionaUtente;
