import React from "react";
import { NavLink } from "react-router-dom";
import c from './Navbars.module.css';

let ActiveLink = ({isActive}) => isActive ? c.active : c.item;

const Navbar = () => {

 

  return <nav className={c.nav}>

    <div className={c.item}>
      <NavLink className={ActiveLink}
       to="/profile" >Profile</NavLink>
    </div>
    <div className={c.item}>
      <NavLink className={ActiveLink}
       to="/dialogs">Message</NavLink>
    </div>
    <div className={c.item}>
      <NavLink className={ActiveLink}
      to="/users">Users</NavLink>
    </div>
    <div className={c.item}>
      <NavLink className={ActiveLink}
      to="music">Music</NavLink>
    </div>
    <div className={c.item}>
      <NavLink className={ActiveLink}
       to="settings">Settings</NavLink>
    </div>
  </nav>

}

export default Navbar;