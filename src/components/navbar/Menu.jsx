import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

/**
 * Component integrated to Navbar, contains link to pages
 */

function Menu() {
  return (
    <div className={styles.menu_wrapper}>
      <ul>
        <Link to={"/races"}>
          <li>RACES</li>
        </Link>
        <Link to="/categories">
          <li>CATÉGORIES</li>
        </Link>
        <Link to="/favoris">
          <li>FAVORIS</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
