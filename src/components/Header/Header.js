import "./Header.css"
import Navigation from "../Navigation/Navigation";
import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  return (
    <header className="header" style={location.pathname === '/' ? {background: '#073042'} : {background: '#202020'}}>
      <Navigation />
    </header>
  )
}

export default Header;