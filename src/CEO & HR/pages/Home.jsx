import React, { useState } from 'react';
import CommonButton from '../../CommonComponents/CommonButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center p-3 bg-blue-500 text-white">
          <div className="flex items-center">
            <CommonButton variant="contained" onClick={handleToggleSidebar}>
              <i className="fa-solid fa-grip-lines"></i>
            </CommonButton>
            <h1 className="text-2xl font-bold mx-4">
              ADMIN PORTAL
            </h1>
          </div>
          <CommonButton variant="contained" color="error" onClick={handleLogout}>
            Logout
          </CommonButton>
        </div>
        <div className="flex flex-1">
          <div className={`bg-white-800 border text-dark ${isSidebarOpen ? 'w-64' : 'w-20'} h-screen p-2 transition-width duration-300`}>
            <ul>
              {['Dashboard', 'Products', 'Employee', 'Interns', 'Attendance'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:bg-blue-500 p-5 block rounded items-center">
                    <i className={`fa-solid ${iconClasses[item]}`}></i>
                    {isSidebarOpen && <span className="ml-4 font-bold">{item}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-5">
            <div className="flex flex-wrap justify-center">
              {['FULL STACK', 'FRONTEND', 'BACKEND', 'DEVOPS', 'CLOUD', 'HR', 'QA', 'INTERNS', 'ADD +'].map((category, index) => (
                <Box
                  key={index}
                  height={100}
                  width={200}
                  my={5}
                  mx={5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                  sx={{ border: '1px solid black' }}
                  className="font-bold text-black uppercase"
                >
                  {category} :
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const iconClasses = {
  Dashboard: 'fa-house',
  Products: 'fa-laptop',
  Employee: 'fa-users',
  Interns: 'fa-user-group',
  Attendance: 'fa-table'
};

export default Home;
