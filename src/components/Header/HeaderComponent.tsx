import React from "react";
import MenuComponent from "../Menu/MenuComponent";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Rental Management System
        </Link>
        <MenuComponent />
      </div>
    </header>
  );
}
export default HeaderComponent;
