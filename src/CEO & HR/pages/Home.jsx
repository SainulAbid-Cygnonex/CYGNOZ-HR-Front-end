import React, { useState } from 'react';
import CommonButton from '../../CommonComponents/CommonButton';
import Box from '@mui/material/Box';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex">
        {isOpen && (
          <div className="fixed inset-0 z-10 bg-black opacity-50" onClick={closeSidebar}></div>
        )}
        <div className={`${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white w-64 h-screen p-4 z-20`}>
          {/* <CommonButton onClick={toggleSidebar}>
            <i className="fa-solid fa-grip-lines"></i>
          </CommonButton> */}
          <ul onClick={closeSidebar}>
            <li>
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">Dashboard</a>
            </li>
            <li>
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">Products</a>
            </li>
            <li>
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">Employee</a>
            </li>
            <li>
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">Interns</a>
            </li>
            <li>
              <a href="#" className="hover:bg-gray-700 p-2 block rounded">Attendance</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center  p-4">
            {!isOpen && (
              <CommonButton onClick={toggleSidebar}>
                <i className="fa-solid fa-grip-lines"></i>
              </CommonButton>
            )}
            <h1 className="text-2xl font-bold mx-auto text-black">ADMIN PORTAL</h1>
            <CommonButton variant="contained" color="error">
              Logout
            </CommonButton>
          </div>
          <div className='row flex items-center justify-center'>
          <div className="col flex">
          <Box
      height={100}
      width={250}
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
        width={250}
        my={5}
        mx={5}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '1px solid black' }}
        className="font-bold text-black uppercase"
    >
      FRONDENT :
    </Box>
    <Box
        height={100}
        width={250}
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
          <div className='row flex items-center justify-center'>
          <div className="col flex">
          <Box
      height={100}
      width={250}
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
        width={250}
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
        width={250}
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
          <div className='row flex items-center justify-center'>
          <div className="col flex">
          <Box
      height={100}
      width={250}
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
        width={250}
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
        width={250}
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
    </>
  );
}

export default Home;