import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import emp from '../../assets/Images/emp.png';
import Button from '@mui/material/Button';
import attendance from '../../assets/Images/attendance.png';
import calendar from '../../assets/Images/calendar.png';
import leave from '../../assets/Images/leave.png';
import Header from '../../CommonComponents/Header';


function LandingPage() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.dark,
        boxShadow: 'none',
    }));

    
  return (
    <>
    <Header insideEmpLandingpage/>
    <div>
        <Container maxWidth="xl" className='pt-20 px-96'>
        <Box>
            <Grid container spacing={2}>

                <Grid item xs={6}>
                <Item>
                    <div className='text-2xl font-black'>Welcome employee!</div>
                    <div className='text-5xl mt-8 font-black'>Manage Your Attendance Seamlessly</div>
                    <div className='mt-3 text-lg font-medium'>Welcome to Attendance App, your one-stop solution for managing your work attendance effortlessly. 
                        Access leave applications, view events/holidays, and check your present status quickly and efficiently.
                    </div>

                    <Box sx={{ flexGrow: 1 }} className='mt-10'>
                        <Grid container spacing={2}>

                            <Grid item xs={4} className='text-center'>
                            <Item style={{ border:'#D4D4D4 solid 1px', borderRadius:'10px', padding:'20px 5px' }}>
                                <div className='flex justify-center'>
                                    <img src={leave} style={{height:'50px'}} alt="" />
                                </div>
                                <div className='text-lg font-bold mt-2'>Apply Leave Easily</div>
                                <div>Submit and track your leave applications effortlessly.</div>
                                <Button variant="contained"  size="small" style={{padding:'4px 30px', marginTop:'43px'}}>
                                    APPLY
                                </Button>
                            </Item>
                            </Grid>

                            <Grid item xs={4} className='text-center'>
                            <Item style={{ border:'#D4D4D4 solid 1px', borderRadius:'10px', padding:'20px 5px' }}>
                                <div className='flex justify-center'>
                                    <img src={calendar} style={{height:'50px'}} alt="" />
                                </div>
                                <div className='text-lg font-bold mt-2'>Upcoming Events & Holidays</div>
                                <div>View all upcoming events and holidays.</div>
                                <Button variant="contained"  size="small" style={{padding:'4px 30px', marginTop:'15px'}}>
                                    VIEW
                                </Button>
                            </Item>
                            </Grid>

                            <Grid item xs={4} className='text-center'>
                            <Item style={{ border:'#D4D4D4 solid 1px', borderRadius:'10px', padding:'20px 5px' }}>
                                <div className='flex justify-center'>
                                    <img src={attendance} style={{height:'50px'}} alt="" />
                                </div>
                                <div className='text-lg font-bold mt-2'>Your Attendance</div>
                                <div>Monitor your attendance with real-time updates.</div>
                                <Button variant="contained"  size="small" style={{padding:'4px 30px', marginTop:'43px'}}>
                                    PRESENT
                                </Button>
                            </Item>
                            </Grid>
                            
                        </Grid>
                    </Box>
                    
                </Item>
                </Grid>
                


                <Grid item xs={6}>
                <Item>
                    <Box sx={{ width: screen, borderRadius: 1 }}>
                        <img src={emp} className='h-full w-full rounded-lg' alt="" />
                    </Box>
                </Item>
                </Grid>

            </Grid>
        </Box>
        </Container>
    </div>
    </>
  )
}

export default LandingPage