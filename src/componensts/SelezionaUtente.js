import React, { useState, useEffect } from 'react';
import { Person, Payment } from '@mui/icons-material';
import {
  List,
  ListItemButton,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

const SelezionaUtente = ({ topAppBar }) => {
  const [utenti, setUtenti] = useState([]);
  const [utenteSelezionato, setUtenteSelezionato] = useState(null);

  useEffect(() => {
    // Effettua una chiamata API per ottenere la lista di utenti
    fetch('http://localhost:8081/api/utenti')
      .then((response) => response.json())
      .then((data) => setUtenti(data))
      .catch((error) =>
        console.error('Errore durante la richiesta degli utenti:', error)
      );
  }, []);

  const handleSelezionaUtente = (utente) => {
    setUtenteSelezionato(utente);
  };

  return (
    <div>
      {topAppBar}
      <List>
        {utenti.map((utente) => (
          <ListItemButton
            key={utente.id}
            onClick={() => handleSelezionaUtente(utente)}
            selected={utenteSelezionato && utenteSelezionato.id === utente.id}
          >
            {/* Contenuto del ListItemButton */}
            <Card variant="outlined" sx={{ mb: 2, width: '100%' }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Person /> ID: {utente.id}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                  Nome: {utente.nome}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                  Cognome: {utente.cognome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Payment /> Spese:
                  {utente.spese.map((spesa) => (
                    <div key={spesa.id}>
                      Tipo: {spesa.tipo} - Importo: {spesa.importo} - Data:{' '}
                      {spesa.data}
                    </div>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SelezionaUtente;
