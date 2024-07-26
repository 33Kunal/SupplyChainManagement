import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import InventoryPage from './pages/InventoryPage';
import ShipmentsPage from './pages/ShipmentsPage';
import SuppliersPage from './pages/SuppliersPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          <Routes>
  <Route path="/" element={<InventoryPage />} />
  <Route path="/shipments" element={<ShipmentsPage />} />
  <Route path="/suppliers" element={<SuppliersPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignupPage />} />
</Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;