import React, { useState } from 'react';
import { Supplier } from '../../types';
import { useAppContext } from '../../contexts/AppContext';

interface Props {
  supplier: Supplier;
  onCancel: () => void;
}

const EditSupplier: React.FC<Props> = ({ supplier, onCancel }) => {
  const { setSuppliers } = useAppContext();
  const [name, setName] = useState(supplier.name);
  const [contactPerson, setContactPerson] = useState(supplier.contactPerson);
  const [phone, setPhone] = useState(supplier.phone);
  const [email, setEmail] = useState(supplier.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuppliers((prev) =>
      prev.map((s) =>
        s.id === supplier.id
          ? { ...s, name, contactPerson, phone, email }
          : s
      )
    );
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <input
        type="text"
        placeholder="Supplier Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Contact Person"
        value={contactPerson}
        onChange={(e) => setContactPerson(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditSupplier;