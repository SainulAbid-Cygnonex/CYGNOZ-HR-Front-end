import React, { useState } from 'react';
import { Button } from '@mui/material';

function ProductManagement() {
  const [products, setProducts] = useState([{ name: 'Sewnex' }]);

  return (
    <div className="container mx-auto py-5 w-4/5">
      <h2 className="text-4xl font-bold text-center mt-5">Products/Services Management</h2>
      <div className="search-container flex justify-between mb-2">
        <div className="search-input-container relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="search-input w-full py-1.5 pl-8 pr-10 text-base rounded-lg border border-gray-300 focus:outline-none"
          />
          <i className="fa-solid fa-magnifying-glass search-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-base text-gray-600"></i>
        </div>
        <Button variant="contained">
          + Add
        </Button>
      </div>
      <table className="min-w-full mx-5 divide-y divide-gray-200 shadow-2xl rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider">Sl no</th>
            <th scope="col" className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider">Product Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs  text-black font-bold uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-bold">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-bold">
                <Button variant="contained">
                  <i className="fa-regular fa-pen-to-square"></i>
                </Button>
                <Button variant="contained" color="error" style={{ marginLeft: '8px' }}>
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <Button variant="contained">
                <i className="fa-regular fa-pen-to-square"></i>
              </Button>
              <Button variant="contained" color="error" style={{ marginLeft: '8px' }}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
