import React, { useState } from 'react';

import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Button 
  } from '@mui/material';
import CommonButton from '../../CommonComponents/CommonButton';

function TimeSheet() {

    const [technical,setTechnical]=useState(true)
    const [technicalType, setTechnicalType] = useState('');
    const handleTypeChange = (event) => {
        setTechnicalType(event.target.value);
      };

      const handleTechnical =()=>{
        setTechnical(true)
      }
      const handleNonTechnical=()=>{
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
        <InputLabel id="user-type-label">Type</InputLabel>
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
      {technical?
      
    
      <div className='table-timeheet mt-10'>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours/day</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SEWNEX</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <input type="number" min={0} max={8} className="border border-gray-300 rounded p-1" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>: 
    
    <div className='table-timeheet mt-10'>
      <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stand ups</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team meeting</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">updating..</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">updating..</td>
       
      </tr>
    </tbody>
  </table></div> }
        
        <div className='flex justify-center mt-5'>
         <Button variant='contained'>Submit</Button>
        </div>
      </div>
    </>
  );
}

export default TimeSheet;