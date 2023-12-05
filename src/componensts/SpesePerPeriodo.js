import React from 'react';

const SpesePerPeriodo = ({ onClick }) => {
  return (
    <div>
      <h2>Spese per Periodo</h2>
      {/* Contenuto del componente */}
      <button onClick={() => onClick('selezionaUtente')}>Torna a Seleziona Utente</button>
    </div>
  );
}

export default SpesePerPeriodo;