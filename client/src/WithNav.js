import React from "react";
import Nav from "./components/Nav";
import { Outlet } from "react-router";

export default () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
