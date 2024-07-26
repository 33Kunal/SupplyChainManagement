import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import InventoryItem from './InventoryItem';
import AddInventoryItem from './AddInventoryItem';

const InventoryList: React.FC = () => {
  const { inventory } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInventory.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-5  mt-5">Inventory</h1>
      <input
        type="text"
        placeholder="Search inventory..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddInventoryItem />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastItem >= filteredInventory.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryList;