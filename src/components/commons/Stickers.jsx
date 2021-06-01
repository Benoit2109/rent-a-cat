import React from "react";
import PropTypes from "prop-types";

import styles from "./Stickers.module.css";

function Stickers({ title, link }) {
  return (
    <div className={styles.stick_wrapper}>
      <a href={link}>{title}</a>
    </div>
  );
}

/**
 * stickers getting cat caracteristics on CatCard.
 * 
 * ex: 
 * 
 * <Stickers title={props} link={wiki}/>
 */

export default Stickers;

Stickers.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
