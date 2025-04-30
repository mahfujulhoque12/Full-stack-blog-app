
import { useState } from "react";
import { Link } from "react-router"; // If you use React Router
import  logo from '/public/nature.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 h-20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="w-20 h-10">
            <img src={logo} alt="" className="w-36 h-20 object-cover"/>
            </Link>
          </div>

          {/* Middle - Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-semibold">Contact</Link>
          </div>

          {/* Right - Login / Signup */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-lime-400 via-green-400 to-green-500 text-white shadow-md hover:from-lime-500 hover:to-green-600 transition duration-300"
            >
              Signup
            </Link>
            <Link
  to="/write"
  className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-br from-green-500 to-teal-400 shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
>
  Write
</Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-green-600 font-semibold">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-green-600 font-semibold">About</Link>
          <Link to="/services" className="block text-gray-700 hover:text-green-600 font-semibold">Services</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-green-600 font-semibold">Contact</Link>

          <div className="pt-4 border-t">
            <Link
              to="/login"
              className="block text-center w-full px-4 py-2 mb-2 rounded-full font-semibold bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-center w-full px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-lime-400 via-green-400 to-green-500 text-white shadow-md hover:from-lime-500 hover:to-green-600 transition duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
