import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import ShipmentItem from './ShipmentItem';

const ShipmentList: React.FC = () => {
  const { shipments } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredShipments = shipments.filter(
    (shipment) =>
      shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-5  mt-5 ">Shipments</h1>
      <input
        type="text"
        placeholder="Search shipments..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredShipments.map((shipment) => (
          <ShipmentItem key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>
  );
};

export default ShipmentList;