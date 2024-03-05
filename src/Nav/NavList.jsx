import React from "react";
import NavItem from "./NavItem";
import "./NavList.css";

export default function NavList() {
  return (
    <ul>
      <NavItem props={"Home"} key={1} />
      <NavItem props={"About"} key={2} />
      <NavItem props={"Contact"} key={3} />
      <NavItem props={"Blog"} key={4} />
      <NavItem props={"Careers"} key={5} />
    </ul>
  );
}
