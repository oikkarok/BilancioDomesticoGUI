// SideBar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideBar = ({ onClick }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button onClick={() => onClick('gestioneUtenti')}>
          <ListItemText primary="Menu Utenti" />
        </ListItem>
        <ListItem button onClick={() => onClick('bilancio')}>
          <ListItemText primary="Menu Bilancio" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
