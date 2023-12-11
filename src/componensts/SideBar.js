// SideBar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideBar = ({ onClick, menuItems }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={index} button onClick={() => onClick(menuItem.action)}>
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
