import React from "react";
import classNames from "classnames";
import UserList from "../../components/UserList";
import { NavLink, Route, Routes } from "react-router-dom";
import modules from "./ComponentsPage.module.scss";
import UserCard from "../../components/UserCard";

function ComponentsPage() {
  const isActiveLink = ({ isActive }) => {
    return classNames(modules.navLink, {
      [modules.activeNavLink]: isActive,
    });
  };

  return (
    <>
      <h1 className={modules.title}>Components</h1>
      <nav className={modules.navigation}>
        <NavLink to="user-card" className={isActiveLink}>
          User card
        </NavLink>
        <NavLink to="user-list" className={isActiveLink}>
          Users list
        </NavLink>
      </nav>
      <Routes>
        <Route path="user-card" element={<UserCard />} />
        <Route path="user-list" element={<UserList />} />
      </Routes>
    </>
  );
}

export default ComponentsPage;
