import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenuButton = ({ isMenuOpen, toggleMenu }) => (
  <button
    type="button"
    className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-300"
    onClick={toggleMenu}
  >
    <span className="sr-only">Open menu</span>
    {isMenuOpen ? (
      <span className="text-2xl">X</span> // Close menu icon
    ) : (
      <span className="text-2xl">☰</span> // Open menu icon
    )}
  </button>
);

const DesktopNav = () => (
  <nav className="hidden md:flex space-x-10">
    <Link to="/about" className="text-lg text-gray-200 hover:text-white">About</Link>
    <Link to="/services" className="text-lg text-gray-200 hover:text-white">Services</Link>
    <Link to="/contact" className="text-lg text-gray-200 hover:text-white">Contact</Link>
  </nav>
);

const DesktopActions = () => (
  <div className="hidden md:flex items-center space-x-4">
    <Link to="/login" className="text-lg text-gray-200 hover:text-white">Login</Link>
    <Link
      to="/signup"
      className="text-lg px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      Sign up
    </Link>
  </div>
);

const MobileMenu = ({ isMenuOpen, closeMenu }) => (
  isMenuOpen && (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-gray-900 z-40">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">
        <div className="flex justify-between items-center px-5 py-4">
          <div>
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </div>
          <div>
            <button
              type="button"
              className="text-white"
              onClick={closeMenu}
            >
              <span className="text-2xl">X</span>
            </button>
          </div>
        </div>
        <div className="mt-6 px-5">
          <nav className="space-y-4">
            <Link to="/about" className="block text-lg text-gray-200 hover:text-white">About</Link>
            <Link to="/services" className="block text-lg text-gray-200 hover:text-white">Services</Link>
            <Link to="/contact" className="block text-lg text-gray-200 hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div>
            <Link
              to="/signup"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </Link>
            <p className="mt-6 text-center text-base text-gray-400">
              Existing user?{" "}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            <Link to="/" className="text-2xl font-semibold">Municipal Complaint System</Link>
          </div>
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <DesktopNav />
          <DesktopActions />
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
