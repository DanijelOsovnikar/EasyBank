import React from "react";
import NavList from "./NavList";
import InviteBtn from "./InviteBtn";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <div className="logo">
        <a href="/">
          <img src="src/assets/logo.svg" alt="logoImage" />
        </a>
      </div>
      <NavList />
      <InviteBtn />
    </nav>
  );
}
