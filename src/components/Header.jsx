import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoBase from "../assets/logo base.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const selectedMenu = useMemo(() => {
    if (location.pathname.startsWith('/event')) return "EVENT";
    if (location.pathname.startsWith('/divisi')) return "DIVISI";
    if (location.pathname === "/about") return "ABOUT";
    return "HOME";
  }, [location.pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <nav className="nav">
          <ul className="nav-list">
            <li className={selectedMenu === "HOME" ? "selected" : ""}>
              <Link to="/" onClick={handleMenuClick}>HOME</Link>
            </li>
            <li className={selectedMenu === "ABOUT" ? "selected" : ""}>
              <Link to="/about" onClick={handleMenuClick}>ABOUT US</Link>
            </li>
            <li className={selectedMenu === "DIVISI" ? "selected" : ""}>
              <Link to="/divisi" onClick={handleMenuClick}>DIVISI</Link>
            </li>
            <li className={selectedMenu === "EVENT" ? "selected" : ""}>
              <Link to="/event" onClick={handleMenuClick}>EVENT</Link>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <p className="logo-text">I'M KOM</p>
          <img src={logoBase} alt="Logo" className="logo-base" />
        </div>

        <div
          className={`menu-icon ${isDropdownOpen ? "menu-active" : ""}`}
          onClick={toggleDropdown}
        >
          <span className="menu-line menu-line-1"></span>
          <span className="menu-line menu-line-2"></span>
          <span className="menu-line menu-line-3"></span>
        </div>

        <nav className={`nav-dropdown ${isDropdownOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className={selectedMenu === "HOME" ? "selected" : ""}>
              <Link to="/" onClick={handleMenuClick}>HOME</Link>
            </li>
            <li className={selectedMenu === "ABOUT" ? "selected" : ""}>
              <Link to="/about" onClick={handleMenuClick}>ABOUT US</Link>
            </li>
            <li className={selectedMenu === "DIVISI" ? "selected" : ""}>
              <Link to="/divisi" onClick={handleMenuClick}>DIVISI</Link>
            </li>
            <li className={selectedMenu === "EVENT" ? "selected" : ""}>
              <Link to="/event" onClick={handleMenuClick}>EVENT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
