// GestioneUtenti.jsx
import React from 'react';
import { Typography, Button, Box, AppBar, Container, Toolbar } from '@mui/material';
import SideBar from './SideBar';

const GestioneUtenti = ({ onClick, topAppBar }) => {
  const menuItems = [
    { title: "Visualizza Tutti", action: "visualizzaTutti" },
    { title: "Seleziona Utente", action: "selezionaUtente" },
  ];

  return (
    <div style={{ marginLeft: '8rem' }}>
      {topAppBar}
      <Container>
        <SideBar onClick={onClick} menuItems={menuItems} />
        {/* Aggiungi qui il tuo contenuto principale */}
      </Container>
    </div>
  );
}

export default GestioneUtenti;
