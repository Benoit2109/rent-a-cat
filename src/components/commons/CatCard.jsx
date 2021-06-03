import React, { useState } from "react";
import Stickers from "./Stickers";
import PropTypes from "prop-types";
import axios from "axios";

import styles from "./CatCard.module.css";
import Favorite from "../../assets/favorite.png";
import noFavorite from "../../assets/noFavorite.png";

const { REACT_APP_API_KEY } = process.env;

function CatCard({ image, origin, name, wiki, description, id }) {
  const [favorite, setFavorite] = useState(false);

  /**
   * send a cat picture to favourite
   * @param {number} id
   */

  const handleFavorite = (id) => {
    setFavorite(!favorite);
    const APIurl = "https://api.thecatapi.com/v1/favourites";
    const Data = JSON.stringify({ image_id: id, sub_id: "Blebou2109" });

    axios.post(APIurl, Data, {
      headers: {
        "x-api-key": `${REACT_APP_API_KEY}`,
        "content-type": "application/json",
      },
    }).catch((err)=> console.error(err));
  };

  const DivStyles = {
    "backgroundImage":`url(${image})`,
    "width": "100%",
    "height": "350px",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
  };

  return (
    <div className={styles.card_wrapper}>
      <div style={DivStyles}>
        <img className={styles.card_illustration} src={image} alt={name} />
      </div>

      <p>
        <strong>{name}</strong>
      </p>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_sticker_wrapper}>
        <Stickers title={origin} />
        <Stickers title="wikilink" link={wiki} />
      </div>
      <img
        src={favorite ? Favorite : noFavorite}
        alt="favoris"
        className={styles.card_favorite}
        onClick={() => handleFavorite(id)}
      />
    </div>
  );
}

export default CatCard;

/**
 * CatCard is a common component which display cat information in a card
 *
 * ex:
 *
 *  <CatCard image={string} origin={string} name={string} wiki={string} decription={string} id={string}/>
 */

CatCard.propTypes = {
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wiki: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
