// GestioneUtenti.jsx
import React from 'react';
import { Typography, Button, Box, AppBar, Container, Toolbar } from '@mui/material';
import SideBar from './SideBar';

const GestioneUtenti = ({ onClick }) => {
  const menuItems = [
    { title: "Visualizza Tutti", action: "visualizzaTutti" },
    { title: "Seleziona Utente", action: "selezionaUtente" },
  ];

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gestione Utenti
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SideBar onClick={onClick} menuItems={menuItems} />
        {/* Aggiungi qui il tuo contenuto principale */}
      </Container>
    </div>
  );
}

export default GestioneUtenti;
