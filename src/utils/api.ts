
import { InventoryItem, Shipment, Supplier } from '../types';

const API = {
  getInventory: (): Promise<InventoryItem[]> => {
    return new Promise((resolve) => {
      const inventory = JSON.parse(localStorage.getItem('inventory') || '[]');
      resolve(inventory);
    });
  },

  addInventoryItem: (item: Omit<InventoryItem, 'id'>): Promise<InventoryItem> => {
    return new Promise((resolve) => {
      const inventory: InventoryItem[] = JSON.parse(localStorage.getItem('inventory') || '[]');
      const newItem = { ...item, id: Date.now() };
      inventory.push(newItem);
      localStorage.setItem('inventory', JSON.stringify(inventory));
      resolve(newItem);
    });
  },

  getShipments: (): Promise<Shipment[]> => {
    return new Promise((resolve) => {
      const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
      resolve(shipments);
    });
  },

  updateShipmentStatus: (id: number, status: Shipment['status']): Promise<Shipment> => {
    return new Promise((resolve, reject) => {
      const shipments: Shipment[] = JSON.parse(localStorage.getItem('shipments') || '[]');
      const shipmentIndex = shipments.findIndex(s => s.id === id);
      if (shipmentIndex === -1) {
        reject(new Error('Shipment not found'));
      } else {
        shipments[shipmentIndex].status = status;
        localStorage.setItem('shipments', JSON.stringify(shipments));
        resolve(shipments[shipmentIndex]);
      }
    });
  },

  getSuppliers: (): Promise<Supplier[]> => {
    return new Promise((resolve) => {
      const suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
      resolve(suppliers);
    });
  },

  addSupplier: (supplier: Omit<Supplier, 'id'>): Promise<Supplier> => {
    return new Promise((resolve) => {
      const suppliers: Supplier[] = JSON.parse(localStorage.getItem('suppliers') || '[]');
      const newSupplier = { ...supplier, id: Date.now() };
      suppliers.push(newSupplier);
      localStorage.setItem('suppliers', JSON.stringify(suppliers));
      resolve(newSupplier);
    });
  },
};

export default API;