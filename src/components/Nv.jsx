import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Navigation Container */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Left Logo Section */}
        <div className="text-3xl font-semibold text-indigo-600">
          <a href="/" className="hover:text-indigo-400">~</a>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex justify-center space-x-8">
          <a
            href="/"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            Home
          </a>
          <a
            href="/product"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            Product
          </a>
          <a
            href="/features"
            className="text-gray-800 hover:text-indigo-600 font-medium"
          >
            Features
          </a>
        </div>

        {/* Right Login Button */}
        <div>
          <a
            href="/login"
            className="text-gray-800 font-medium hover:text-indigo-600"
          >
            Log in →
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
