import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import CategoryCard from "../../components/commons/CategoryCard";

import styles from "./Favorite.module.css";
import up from "../../assets/up.png";

/**
 * Component which display favourite cats set in /races
 */

function Favorite() {
  const [allFavourite, setAllFavourite] = useState("");
  useEffect(() => {
    const APIurl = "https://api.thecatapi.com/v1/favourites";
    axios
      .get(
        APIurl,
        { headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` } },
        { params: { sub_id: "Blebou2109" } }
      )
      .then((res) => res.data)
      .then((data) => {
        const FavouriteList = data.map((fav) => (
          <CategoryCard image={fav.image.url} key={fav.id} />
        ));
        setAllFavourite(FavouriteList);
      });
  }, []);
  return (
    <div className={styles.fav_wrapper}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favoris</title>
        <meta name="author" content="Benoit Le Bourdonnec" />
        <meta
          name="Description"
          content="retrouvez toutes vos photos de chats favorites"
        />
      </Helmet>
      
      {allFavourite}
      <a href="#hautdepage">
        <img className={styles.fav_up} src={up} alt="retour haut de page" />
      </a>
    </div>
  );
}

export default Favorite;
