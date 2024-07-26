import React from 'react';
import InventoryList from '../components/Inventory/InventoryList';
import InventoryChart from '../components/Inventory/InventoryChart';
import { useAppContext } from '../contexts/AppContext';

const InventoryPage: React.FC = () => {
  const { inventory } = useAppContext();

  return (
    <div className="container mx-auto px-4">
      <InventoryList />
      {inventory.length > 0 && <InventoryChart />}
    </div>
  );
};

export default InventoryPage;