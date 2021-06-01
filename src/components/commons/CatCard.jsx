import React from "react";
import Stickers from "./Stickers";
import PropTypes from "prop-types";

import styles from './CatCard.module.css'

function CatCard({ image, origin, name, wiki }) {
  return (
    <div className={styles.card_wrapper}>
      <img src='https://www.wallpapergeeks.com/wp-content/uploads/2014/06/Cat-Mustache-Wallpaper.jpg' alt={name} />
      <p>chat moustachu</p>
      <div className={styles.card_sticker_wrapper}>
        <Stickers title='France' />
        <Stickers title='wikilink' link={wiki} />
      </div>
    </div>
  );
}

export default CatCard;

/**
 * CatCard is a common component which display cat information in a card
 * 
 * ex:
 * 
 *  <CatCard image={img} origin={string} name={string} wiki={string}/>
 */


CatCard.propTypes = {
    image: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    wiki: PropTypes.string.isRequired,
}