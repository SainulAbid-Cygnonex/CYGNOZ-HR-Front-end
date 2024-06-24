import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CYGNOZ HR and Talent Portal
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header