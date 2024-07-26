import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import SupplierItem from './SupplierItem';
import AddSupplier from './AddSupplier';

const SupplierList: React.FC = () => {
  const { suppliers } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-5  mt-5">Suppliers</h1>
      <input
        type="text"
        placeholder="Search suppliers..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddSupplier />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSuppliers.map((supplier) => (
          <SupplierItem key={supplier.id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

export default SupplierList;