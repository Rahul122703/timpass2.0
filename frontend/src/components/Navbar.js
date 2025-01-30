import { Link } from "react-router-dom";

import logo from '../assets/Nagarhelp.svg'

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4  w-full">
          {/* Logo and Name on the Left */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-[100px] w-auto" />
            <Link to="/" className="text-2xl font-semibold">Municipal Complaint System</Link>
          </div>

          {/* Right-aligned Buttons */}
          <div className="flex space-x-6">
            <Link to="/login" className="text-lg hover:text-gray-300">Login</Link>
            <Link to="/register" className="text-lg hover:text-gray-300">Register</Link>
            <Link to="/user-dashboard" className="text-lg hover:text-gray-300">User Dashboard</Link>
            <Link to="/municipal-dashboard" className="text-lg hover:text-gray-300">Municipal Office Dashboard</Link>
            <Link to="/worker-dashboard" className="text-lg hover:text-gray-300">Worker Dashboard</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-800 text-white p-4">
        <nav className="space-y-4">
          <Link to="/login" className="block">Login</Link>
          <Link to="/register" className="block">Register</Link>
          <Link to="/user-dashboard" className="block">User Dashboard</Link>
          <Link to="/municipal-dashboard" className="block">Municipal Office Dashboard</Link>
          <Link to="/worker-dashboard" className="block">Worker Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
