import React, { useState } from 'react';
import { InventoryItem as InventoryItemType } from '../../types';
import { useAppContext } from '../../contexts/AppContext';
import EditInventoryItem from './EditInventoryItem';

interface Props {
  item: InventoryItemType;
}

const InventoryItem: React.FC<Props> = ({ item }) => {
  const { setInventory } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    setInventory((prev) => prev.filter((i) => i.id !== item.id));
  };

  if (isEditing) {
    return <EditInventoryItem item={item} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p>SKU: {item.sku}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Warehouse: {item.warehouse}</p>
      <div className="mt-2 flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;