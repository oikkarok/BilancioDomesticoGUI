import React from 'react';

const AggiungiSpesa = ({ onClick }) => {
  return (
    <div>
      <h2>Aggiungi Spesa</h2>
      {/* Contenuto del componente */}
      <button onClick={() => onClick('selezionaUtente')}>Torna a Seleziona Utente</button>
    </div>
  );
}

export default AggiungiSpesa;