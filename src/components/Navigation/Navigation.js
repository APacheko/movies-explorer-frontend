import "./Navigation.css";
import { Route, Switch } from 'react-router-dom';
import Logo from "../Logo/Logo"

import React, { useState, useEffect } from "react";
import Menu from "./Menu/Menu";
import MainMenu from "./MainMenu/MainMenu";
import MenuBurger from "./BurgerMenu/BurgerMenu";

function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  });

  return (

    <nav className="navigation">
      <Logo />
      <Switch>
        <Route exact path='/'>
          <MainMenu />
        </Route>
        <Route path='/'>
          {windowWidth > 768 ? <Menu /> : <MenuBurger />}
        </Route>
      </Switch>
    </nav>

  )
}

export default Navigation;