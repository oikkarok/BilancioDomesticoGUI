// TopAppBar.js
import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TopAppBar = ({ onBackClick, title }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {onBackClick && (
          <IconButton edge="start" color="inherit" onClick={onBackClick} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
