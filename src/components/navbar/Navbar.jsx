import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.nav_menu_wrapper}>
            <h1>rent-🐱-cat</h1>
            <ul className={styles.nav_list_wrapper}>
                <li>RACES</li>
                <li>CATÉGORIES</li>
                <li>FAVORIS</li>
                <li>VENDRE UN CHAT</li>
            </ul>
            
        </div>
    )
}

export default Navbar
