import React, { useState } from 'react';
import CommonButton from '../../CommonComponents/CommonButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
 const navigate=useNavigate()

  const handlelogout=()=>{
    navigate("/")

  }


  return (
    <>
  
    <div className="flex flex-col h-screen">
      <div className={`flex justify-between items-center p-3 bg-blue-500 text-white `}>
        <div className={`flex items-center `}>
          <CommonButton variant="contained" onClick={handleToggleSidebar}>
          <i className="fa-solid fa-grip-lines"></i>
          </CommonButton>
          <h1 className={`text-2xl font-bold mx-4`}>
              ADMIN PORTAL 
          </h1>
        </div>
        <CommonButton variant="contained" color="error" onClick={handlelogout}>
          Logout
        </CommonButton>
      </div>
      <div className="flex">
        <div className={`bg-white-800 border border-2 text-black ${isSidebarOpen ? 'w-64' : 'w-20'} h-screen p-2 z-20 transition-width duration-300`}>
          <ul>
            <li>
              <a href="#" className="hover:bg-blue-500 p-5 block rounded flex items-center">
              <i className="fa-solid fa-house"></i>
                {isSidebarOpen && <span className="ml-4 font-bold">Dashboard</span>}
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-500 p-5 block rounded flex items-center">
              <i className="fa-solid fa-laptop"></i>
                {isSidebarOpen && <span className="ml-4 font-bold">Products</span>}
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-500 p-5 block rounded flex items-center">
              <i className="fa-solid fa-users"></i>
                {isSidebarOpen && <span className="ml-4 font-bold">Employee</span>}
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-500 p-5 block rounded flex items-center">
              <i className="fa-solid fa-user-group"></i>
                {isSidebarOpen && <span className="ml-4 font-bold">Interns</span>}
              </a>
            </li>
            <li>
              <a href="#" className="hover:bg-blue-500 p-5 block rounded flex items-center">
              <i className="fa-solid fa-table"></i>
                {isSidebarOpen && <span className="ml-4 font-bold">Attendance</span>}
              </a>
            </li>
          </ul>
        </div>
       {/*  */}
       
      
   
        <div className="w-full">
          
          <div className="row flex items-center justify-center">
            <div className="col flex">
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                FULL STACK :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                FRONTEND :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                BACKEND :
              </Box>
            </div>
          </div>
          <div className="row flex items-center justify-center">
            <div className="col flex">
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                Devops :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                CLOUD :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                HR :
              </Box>
            </div>
          </div>
          <div className="row flex items-center justify-center">
            <div className="col flex">
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                QA :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                Interns :
              </Box>
              <Box
                height={100}
                width={200}
                my={5}
                mx={5}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid black' }}
                className="font-bold text-black uppercase"
              >
                ADD +
              </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
