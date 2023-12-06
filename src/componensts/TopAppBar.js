// TopAppBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

const TopAppBar = ({ title, onBackClick }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {onBackClick && (
          <IconButton edge="start" color="inherit" onClick={onBackClick}>
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
