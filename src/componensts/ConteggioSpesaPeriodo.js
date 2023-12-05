import React from 'react';

const ConteggioSpesaPeriodo = ({ onClick }) => {
  return (
    <div>
      <h2>Conteggio Spesa per Periodo</h2>
      {/* Contenuto del componente */}
      <button onClick={() => onClick('selezionaUtente')}>Torna a Seleziona Utente</button>
    </div>
  );
}

export default ConteggioSpesaPeriodo;