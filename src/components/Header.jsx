import React from "react";

export default function Header() {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="text-2xl font-bold text-black-600 mr-8">FashionHub</div>
      <nav className="flex space-x-4 flex-grow">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Category
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Brand
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Contact
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          FAQ's
        </a>
      </nav>
      <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
        <img
          src="../public/pexels-olly-972804.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}
