// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createContext, useContext, useState, ReactNode  } from 'react';
import { InventoryItem, Shipment, Supplier, User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextType {
  inventory: InventoryItem[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  shipments: Shipment[];
  setShipments: React.Dispatch<React.SetStateAction<Shipment[]>>;
  suppliers: Supplier[];
  setSuppliers: React.Dispatch<React.SetStateAction<Supplier[]>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [inventory, setInventory] = useLocalStorage<InventoryItem[]>('inventory', []);
  const [shipments, setShipments] = useState<Shipment[]>([
    {
      "id": 1,
      "origin": "Location A",
      "destination": "Location B",
      "status": "In Transit",
      "estimatedDelivery": "2024-05-25"
    },
    {
      "id": 2,
      "origin": "Location C",
      "destination": "Location D",
      "status": "Delivered",
      "estimatedDelivery": "2024-05-20"
    }
  ]);
  const [suppliers, setSuppliers] = useLocalStorage<Supplier[]>('suppliers', []);
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  return (
    <AppContext.Provider value={{ inventory, setInventory, shipments, setShipments, suppliers, setSuppliers, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};