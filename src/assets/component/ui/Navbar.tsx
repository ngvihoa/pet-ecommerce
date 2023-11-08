// import React from 'react';
import { useRef } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const menu = useRef<null | HTMLUListElement>(null);

  const toggleMenu = () => {
    menu.current?.classList.toggle("show");
  };

  return (
    <div>
      <nav className="container navbar">
        <div className="navbar-left">
          <AiOutlineSearch />

          <a href="/" className="navbar-logo">
            <img src="/src/assets/images/logo.png" alt="Logo" />
          </a>
          <AiOutlineMenu onClick={toggleMenu} />
          <ul className="navbar-list" ref={menu}>
            <li>
              <AiOutlineClose onClick={toggleMenu} />
            </li>
            <li className="navbar-item">
              <a href="#">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#">Category</a>
            </li>
            <li className="navbar-item">
              <a href="#">About</a>
            </li>
            <li className="navbar-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="navbar-search-box">
            <AiOutlineSearch />
            <input
              type="search"
              name="searchBox"
              id="searchBox"
              placeholder="Search for something"
            />
          </div>
          <button type="button" className="navbar-button">
            Joint the community
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
