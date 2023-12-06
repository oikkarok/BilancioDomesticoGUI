import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import SideBar from './SideBar';

const MenuNavigazione = ({ onClick }) => {
  return (
    <div>
      {/* Aggiungi questi stili per dare spazio alla barra laterale sopra la barra superiore */}
      <style jsx>{`
        .MuiAppBar-root {
          margin-left: 8rem; /* Larghezza della barra laterale */
        }
      `}</style>

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bilancio Domestico
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <SideBar onClick={onClick} />
        {/* Aggiungi qui il tuo contenuto principale */}
      </Container>
    </div>
  );
};

export default MenuNavigazione;
