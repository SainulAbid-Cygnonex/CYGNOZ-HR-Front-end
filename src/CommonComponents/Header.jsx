import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       <h1 className='italic text-bl font-bold text-xl'>CYG<span className=' font-extrabold'>Sphere</span></h1>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header