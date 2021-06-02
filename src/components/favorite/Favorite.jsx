import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Favorite.module.css";
import CategoryCard from "../commons/CategoryCard";

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
  return <div className={styles.fav_wrapper}>{allFavourite}</div>;
}

export default Favorite;
