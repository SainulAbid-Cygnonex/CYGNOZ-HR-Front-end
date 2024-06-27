import React, { useState } from 'react';

import {
    InputLabel,
    FormControl,
    Select,
    MenuItem
  } from '@mui/material';
import CommonButton from '../../CommonComponents/CommonButton';

function TimeSheet() {

    const [technical,setTechnical]=useState(true)
    const [technicalType, setTechnicalType] = useState('technical');

    const handleTypeChange = (event) => {
        setTechnicalType(event.target.value);
      };

      const handleTechnical =()=>{
        setTechnical(true)
      }
      const handleNonTechnical =()=>{
        setTechnical(false)
      }

  return (
    <>
      <div className='text-4xl font-bold text-center mt-5'>Time Sheet</div>
      <div >
        <h3 className='text-lg my-5 mx-5'>
          Welcome <span className='text-blue-500 font-bold'>Employee</span> ,
        </h3>
      </div>
      <div className="mx-5">
       
        <div className='flex justify-between '>
        <FormControl variant="outlined" fullWidth style={{width:"200px"}}>
        <InputLabel id="user-type-label">Technical Type</InputLabel>
            <Select
                labelId="technical-type-label"
                id="technical-type"
                value={technicalType} 
                onChange={handleTypeChange}
                label="technical-type"
                required
                size='small'
              >
                <MenuItem value="technical" onClick={handleTechnical}>Technical</MenuItem>
                <MenuItem value="non-technical" onClick={handleNonTechnical}>Non-Technical</MenuItem>
                
              </Select>
              </FormControl>
              <div>
              <CommonButton >Add +</CommonButton>
              </div>
        </div>

       {
        technical?
        <div className='table-timeheet mt-10'>
        <table className="min-w-full divide-y divide-gray-200 shadow-2xl rounded-lg">
          <thead className="bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">#</th>
              <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">Product Name</th>
              <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">Hours/day</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">SEWNEX</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input type="number" min={0} max={8} className="border border-black rounded p-1" />
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black ">Billbizz</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input type="number" min={0} max={8} className="border border-black rounded p-1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      :
      <div className='table-timeheet mt-10'>
      <table className="min-w-full divide-y divide-gray-200 shadow-2xl rounded-lg">
        <thead className="bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">STAND UPS </th>
            <th scope="col" className="px-6 py-3 text-left text-md font-bold text-black uppercase tracking-wider">MEETINGS</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">Updating..</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {/* <input type="number" min={0} max={8} className="border border-black rounded p-1" /> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">Updating..</td>

            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black ">Updating..</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {/* <input type="number" min={0} max={8} className="border border-black rounded p-1" /> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black">Updating..</td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
       }
        <div className='flex justify-end mt-6'>
         <CommonButton color='success'>Submit</CommonButton>
        </div>
      </div>
    </>
  );
}

export default TimeSheet;