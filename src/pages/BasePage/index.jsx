import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function BasePage() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default BasePage;
