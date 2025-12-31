import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { auth } from "../firebase.config";

const Navbar = () => {
  const { user, loading, setUser } = useAuth(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      setUser(null);        
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <nav className="bg-white shadow-md p-4 text-center text-orange-500">
        Loading...
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500 flex items-center">
          <img
            src="https://i.ibb.co.com/ycz7shys/paw-dog-animal-illustration-logo-free-vector.jpg" // replace with your logo URL
            alt="WarmPaws Logo"
            className="w-10 h-10 mr-2"
          />
          <Link to="/">WarmPaws</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/services" className="hover:text-orange-500 transition">Services</Link>
          <Link to="/profile" className="hover:text-orange-500 transition">My Profile</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2 relative group">
              <img
                src={user.photoURL || "https://i.pravatar.cc/40"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-orange-500 cursor-pointer"
              />
              <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="ml-2 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link
                to="/login"
                className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 flex flex-col space-y-2">
          {/* Menu Items */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-orange-50 transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-orange-50 transition"
          >
            Services
          </Link>
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded hover:bg-orange-50 transition"
          >
            My Profile
          </Link>

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-left text-orange-500 px-3 py-2 rounded hover:bg-orange-50 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-50 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;