import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 3, text: "Contact", link: "contact" },
    { id: 2, text: "App", link: "app" },
  ];

  return (
    <div className="font-mono flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* Logo */}
      <Link to='/' className="w-full text-3xl font-bold text-[#00df9a]">T3xtM4sk</Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link to={item.link} key={item.id}>
          <li
            key={item.id}
            className="px-4 py-2 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          TextMask
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.link} key={item.id}>
          <li
            className="px-4 py-2 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
          >
            {item.text}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
