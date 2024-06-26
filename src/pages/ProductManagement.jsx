import React, { useState } from 'react';


function ProductManagement() {
  const [products, setProducts] = useState([{ name: 'Sewnex' }]);
  return (
    <div className="container mx-auto py-5 w-4/5">
      <h2 className="text-center text-2xl">Products/Services Management</h2>
      <div className="search-container flex justify-between mb-2">
        <div className="search-input-container relative w-52">
          <input
            type="text"
            placeholder="Search..."
            className="search-input w-full py-1.5 pl-8 pr-3 text-base rounded-lg border border-gray-300"
          />
          <i className="fa-solid fa-magnifying-glass search-icon absolute right-2 top-1/2 transform -translate-y-1/2 text-base text-gray-600"></i>
        </div>
        <button className="add-button py-1.5 px-3 text-base cursor-pointer bg-blue-600 text-white rounded-lg outline-none border-none">
          + Add
        </button>
      </div>
      <table className="w-full border-collapse mt-2">
        <thead>
          <tr>
            <th className="border border-black py-2 px-3 bg-gray-200">Sl no</th>
            <th className="border border-black py-2 px-3 bg-gray-200">Product Name</th>
            <th className="border border-black py-2 px-3 bg-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-black py-2 px-3">{index + 1}</td>
              <td className="border border-black py-2 px-3">{product.name}</td>
              <td className="border border-black py-2 px-3">
                <button className="edit-button py-1.5 px-3 text-base cursor-pointer bg-blue-600 text-white rounded-lg outline-none border-none mr-2">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="delete-button py-1.5 px-3 text-base cursor-pointer bg-blue-600 text-white rounded-lg outline-none border-none">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="border border-black py-2 px-3">2</td>
            <td className="border border-black py-2 px-3"></td>
            <td className="border border-black py-2 px-3">
              <button className="edit-button py-1.5 px-3 text-base cursor-pointer bg-blue-600 text-white rounded-lg outline-none border-none mr-2">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="delete-button py-1.5 px-3 text-base cursor-pointer bg-blue-600 text-white rounded-lg outline-none border-none">
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagement;
