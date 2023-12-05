import React from 'react';

const SpeseUtente = ({ onClick }) => {
  return (
    <div>
      <h2>Spese Utente</h2>
      {/* Contenuto del componente */}
      <button onClick={() => onClick('selezionaUtente')}>Torna a Seleziona Utente</button>
    </div>
  );
}

export default SpeseUtente;