import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const AddSupplier: React.FC = () => {
  const { setSuppliers } = useAppContext();
  const [name, setName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuppliers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        contactPerson,
        phone,
        email,
      },
    ]);
    setName('');
    setContactPerson('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
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
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded">
        Add Supplier
      </button>
    </form>
  );
};

export default AddSupplier;