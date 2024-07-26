import React, { useState } from 'react';
import { Supplier } from '../../types';
import { useAppContext } from '../../contexts/AppContext';
import EditSupplier from './EditSupplier';

interface Props {
  supplier: Supplier;
}

const SupplierItem: React.FC<Props> = ({ supplier }) => {
  const { setSuppliers } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    setSuppliers((prev) => prev.filter((s) => s.id !== supplier.id));
  };

  if (isEditing) {
    return <EditSupplier supplier={supplier} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">{supplier.name}</h2>
      <p>Contact: {supplier.contactPerson}</p>
      <p>Phone: {supplier.phone}</p>
      <p>Email: {supplier.email}</p>
      <div className="mt-2 space-x-2">
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

export default SupplierItem;