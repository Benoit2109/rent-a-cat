import React from "react";
import Stickers from "./Stickers";
import PropTypes from "prop-types";

import styles from './CatCard.module.css'

function CatCard({ image, origin, name, wiki, description }) {
  return (
    <div className={styles.card_wrapper}>
      <img src={image} alt={name} />
      <p><strong>{name}</strong></p>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_sticker_wrapper}>
        <Stickers title={origin} />
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
    description: PropTypes.string.isRequired,
}