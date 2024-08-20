import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';


function Header({insideEmpLandingpage}) {



  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       <h1 className='text-bl font-bold text-xl'>CYG<span className=' font-extrabold'>Sphere</span></h1>
        </Typography>
        {
          insideEmpLandingpage &&
          <Button variant="contained" size="small" style={{backgroundColor:'red', color:'white', fontWeight:'900'}}>Logout</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header