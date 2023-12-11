// MenuNavigazione.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import SideBar from './SideBar';
import TopAppBar from './TopAppBar';

const MenuNavigazione = ({ onClick }) => {
  const menuItems = [
    { title: "Menu Utenti", action: "gestioneUtenti" },
    { title: "Menu Bilancio", action: "bilancio" },
  ];

  return (
    <div style={{ marginLeft: '8rem' }}>
      <TopAppBar title="Bilancio Domestico" />
      <Container>
        <SideBar onClick={onClick} menuItems={menuItems} />
        {/* Aggiungi qui il tuo contenuto principale */}
      </Container>
    </div>
  );
};

export default MenuNavigazione;
