import React from 'react';

const ConteggioSpesa = ({ onClick }) => {
  return (
    <div>
      <h2>Conteggio Spesa</h2>
      {/* Contenuto del componente */}
      <button onClick={() => onClick('selezionaUtente')}>Torna a Seleziona Utente</button>
    </div>
  );
}

export default ConteggioSpesa;