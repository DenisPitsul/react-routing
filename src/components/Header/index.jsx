import React from "react";
import modules from "./Header.module.scss";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Header() {
  const isActiveLink = ({ isActive }) => {
    return classNames(modules.navLink, {
      [modules.activeNavLink]: isActive,
    });
  };

  return (
    <header className={modules.header}>
      <div className="container">
        <nav className={modules.navigation}>
          <ul className={modules.navList}>
            <li className={modules.navItem}>
              <NavLink to="/" className={isActiveLink}>
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/components" className={isActiveLink}>
                Components
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/about" className={isActiveLink}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
