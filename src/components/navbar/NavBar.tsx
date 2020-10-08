import React from "react";
import { NavContainer } from "./style";
import { NavLink } from "react-router-dom";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  return (
    <NavContainer>
      <NavLink to={"/"}>Home</NavLink>
    </NavContainer>
  );
};

export default NavBar;
