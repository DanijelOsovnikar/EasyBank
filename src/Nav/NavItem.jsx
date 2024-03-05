import React from "react";
import "./NavItem.css";

export default function NavItem({ props }) {
  return (
    <>
      <a className="NavItem">{props}</a>
    </>
  );
}
