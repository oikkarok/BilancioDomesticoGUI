import React, { useState, useEffect } from 'react';
import { List, ListItem, Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

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
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => onClick('previousScreen')}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seleziona Utente
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        {utenti.map((utente) => (
          <ListItem key={utente.id}>
            {utente.nome} - {utente.cognome}
            <Button onClick={() => handleSelezionaUtente(utente)}>Seleziona</Button>
          </ListItem>
        ))}
      </List>

      {utenteSelezionato && (
        <div>
          Utente Selezionato: {utenteSelezionato.nome} - {utenteSelezionato.cognome}
        </div>
      )}
    </div>
  );
}

export default SelezionaUtente;
