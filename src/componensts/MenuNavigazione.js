// MenuNavigazione.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import SideBar from './SideBar';

const MenuNavigazione = ({ onClick }) => {
  const menuItems = [
    { title: "Menu Utenti", action: "gestioneUtenti" },
    { title: "Menu Bilancio", action: "bilancio" },
  ];

  return (
    <div style={{ marginLeft: '8rem' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bilancio Domestico
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SideBar onClick={onClick} menuItems={menuItems} />
        {/* Aggiungi qui il tuo contenuto principale */}
      </Container>
    </div>
  );
};

export default MenuNavigazione;
