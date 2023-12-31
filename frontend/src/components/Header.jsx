import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }
  return (
    <header className="fixed shadow-md h-16 w-full px-2 md:px-2 z-50 bg-white">
      {/* Desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10">
            <img src={logo} alt="LOGO" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-500 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              {0}
            </div>
          </div>
          <div className="text-slate-500" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute bg-white right-2 py-2 px-2 shadow drop-shadow-md flex flex-col">
                <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New Product</Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">LogIn</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
