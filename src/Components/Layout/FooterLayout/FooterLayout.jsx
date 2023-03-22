import React from "react";
import { Outlet } from "react-router";

const FooterLayout = () => {
  return (
    <div>
      <Outlet />
      <h1>este es el footer</h1>
    </div>
  );
};

export default FooterLayout;
