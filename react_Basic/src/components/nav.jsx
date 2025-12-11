import React from "react";
import { Link } from "react-router";

export const NavBar = () => {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/services"> Our Services </Link>
        <Link to="/todo"> Todo </Link>
      </div>
    </>
  );
};
