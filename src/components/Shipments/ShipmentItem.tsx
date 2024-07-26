import React from 'react';
import { Shipment } from '../../types';
import { useAppContext } from '../../contexts/AppContext';

interface Props {
  shipment: Shipment;
}

const ShipmentItem: React.FC<Props> = ({ shipment }) => {
  const { setShipments } = useAppContext();

  const handleStatusUpdate = (newStatus: Shipment['status']) => {
    setShipments((prev) =>
      prev.map((s) =>
        s.id === shipment.id ? { ...s, status: newStatus } : s
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold">Shipment #{shipment.id}</h2>
      <p>Origin: {shipment.origin}</p>
      <p>Destination: {shipment.destination}</p>
      <p>Status: {shipment.status}</p>
      <p>Estimated Delivery: {shipment.estimatedDelivery}</p>
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => handleStatusUpdate('In Transit')}
        >
          Set In Transit
        </button>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => handleStatusUpdate('Delivered')}
        >
          Set Delivered
        </button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={() => handleStatusUpdate('Delayed')}
        >
          Set Delayed
        </button>
      </div>
    </div>
  );
};

export default ShipmentItem;