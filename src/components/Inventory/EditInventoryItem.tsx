import React, { useState } from 'react';
import { InventoryItem as InventoryItemType } from '../../types';
import { useAppContext } from '../../contexts/AppContext';

interface Props {
  item: InventoryItemType;
  onCancel: () => void;
}

const EditInventoryItem: React.FC<Props> = ({ item, onCancel }) => {
  const { setInventory } = useAppContext();
  const [name, setName] = useState(item.name);
  const [sku, setSku] = useState(item.sku);
  const [quantity, setQuantity] = useState(item.quantity.toString());
  const [warehouse, setWarehouse] = useState(item.warehouse);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInventory((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? { ...i, name, sku, quantity: parseInt(quantity), warehouse }
          : i
      )
    );
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
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
      <div className="flex justify-between">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditInventoryItem;