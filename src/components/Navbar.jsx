import React from "react";

const Navbar = () => {
  return (
    <header className="w-screen h-16 bg-white shadow-md relative">
      {/* Navigation Container */}
      <nav className="flex items-center justify-between px-6 py-4 h-full">
        {/* Left Logo Section */}
        <div className="text-3xl font-semibold text-indigo-600">
          <a href="/" className="hover:text-indigo-400">~</a>
        </div>

        {/* Center Links */}
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
      </nav>

      {/* Login Button - Top Right Corner */}
      <div className="absolute top-0 right-0 mt-3 mr-6">
        <a
          href="/login"
          className="text-gray-800 font-medium hover:text-indigo-600"
        >
          Log in →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
