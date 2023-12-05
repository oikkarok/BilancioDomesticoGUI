// SelezionaUtente.js
import React, { useState, useEffect } from 'react';

const SelezionaUtente = ({ onClick }) => {
  const [utenti, setUtenti] = useState([]);
  const [utenteSelezionato, setUtenteSelezionato] = useState(null);

  useEffect(() => {
    // Effettua una chiamata API per ottenere la lista di utenti
    fetch('http://localhost:8081/api/utenti')
      .then(response => response.json())
      .then(data => setUtenti(data))
      .catch(error => console.error('Errore durante la richiesta degli utenti:', error));
  }, []);

  const handleSelezionaUtente = (utente) => {
    setUtenteSelezionato(utente);
  };

  return (
    <div>
      <h2>Seleziona Utente</h2>
      {utenti.map((utente) => (
        <div key={utente.id}>
          {utente.nome} - {utente.cognome} 
          <button onClick={() => handleSelezionaUtente(utente)}>Seleziona</button>
        </div>
      ))}
      {utenteSelezionato && (
        <div>
          Utente Selezionato: {utenteSelezionato.nome} - {utenteSelezionato.cognome}
          {/* Potresti anche aggiungere un pulsante per confermare la selezione */}
          <button onClick={() => onClick('gestioneUtenti')}>Conferma Selezione</button>
        </div>
      )}
      <button onClick={() => onClick('gestioneUtenti')}>Torna a Gestione Utenti</button>
    </div>
  );
}

export default SelezionaUtente;
