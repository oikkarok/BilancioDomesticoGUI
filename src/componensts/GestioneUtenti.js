import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const GestioneUtenti = ({ onClick }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        Gestione Utenti
      </Typography>
      <Button variant="contained" color="primary" onClick={() => onClick('visualizzaTutti')} sx={{ mr: 2 }}>
        Visualizza Tutti
      </Button>
      <Button variant="contained" color="primary" onClick={() => onClick('selezionaUtente')}>
        Seleziona Utente
      </Button>
    </Box>
  );
}

export default GestioneUtenti;
