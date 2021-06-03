import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import cross from "../../assets/cross.png";
import menu from "../../assets/menu.png";
import Menu from "./Menu";


/**
 * Navbar component shows menu component onClick when "open"=true
 */

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.nav_menu_wrapper}>
      
      <Link to="/races" id="hautdepage"><h1>RENT-🐱-CAT</h1></Link>
      <div className={styles.nav_menu_btn} onClick={handleOpen}>
        <p>MINOU</p>
        <img src={open ? cross : menu} alt="menu" />
        {open ? (
          <div className={styles.nav_menu_open}>
            <Menu />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
