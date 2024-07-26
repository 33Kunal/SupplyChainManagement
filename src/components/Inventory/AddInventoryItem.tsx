import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const AddInventoryItem: React.FC = () => {
  const { setInventory } = useAppContext();
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState('');
  const [warehouse, setWarehouse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInventory((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        sku,
        quantity: parseInt(quantity),
        warehouse,
      },
    ]);
    setName('');
    setSku('');
    setQuantity('');
    setWarehouse('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="SKU"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Warehouse"
        value={warehouse}
        onChange={(e) => setWarehouse(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
};

export default AddInventoryItem;