import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';

const Header: React.FC = () => {
  const { user, setUser } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = () => (
    <>
      <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inventory</Link></li>
      <li><Link to="/shipments" onClick={() => setIsMenuOpen(false)}>Shipments</Link></li>
      <li><Link to="/suppliers" onClick={() => setIsMenuOpen(false)}>Suppliers</Link></li>
      {user ? (
        <>
          <li>Welcome, {user.username}!</li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </>
      ) : (
        <>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
          <li><Link to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</Link></li>
        </>
      )}
    </>
  );

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="lg:text-2xl font-bold">Supply Chain Management</h1>
        

        <button 
          className="lg:hidden px-2 py-1 text-sm border rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>


        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <NavItems />
          </ul>
        </nav>


        {isMenuOpen && (
          <nav className="w-full lg:hidden">
            <ul className="flex flex-col space-y-2 mt-4">
              <NavItems />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;