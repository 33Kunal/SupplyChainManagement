export interface InventoryItem {
    id: number;
    name: string;
    sku: string;
    quantity: number;
    warehouse: string;
  }
  
  export interface Shipment {
    id: number;
    origin: string;
    destination: string;
    status: 'In Transit' | 'Delivered' | 'Delayed';
    estimatedDelivery: string;
  }
  
  export interface Supplier {
    id: number;
    name: string;
    contactPerson: string;
    phone: string;
    email: string;
  }
  
  export interface User {
    id: number;
    username: string;
    email: string;
  }