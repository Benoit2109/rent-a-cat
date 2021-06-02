import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NextButton from "./NextButton";

import styles from "./CategoryCard.module.css";

/**
 * Reusable component which display a sample of the categories chosen and gives choice to see more pictures of the same category
 *
 * ex:
 *
 * <CategoryCard image={string} title={string} category={number}
 */

function CategoryCard({ image, title, category }) {
  const [moreCat, setMoreCat] = useState("");

  const handleChoice = () => {
    const APIurl = `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${category}`;
    axios
      .get(APIurl, {
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      })
      .then((res) => res.data)
      .then((data) => {
        const moreCatCategories = data.map((cat) => (
          <CategoryCard image={cat.url} />
        ));
        setMoreCat(moreCatCategories);
      });
  };
  return (
    <div className={styles.catecard_wrapper}>
      <img src={image} alt="illustration de chat" />
      {title ? <NextButton title={title} handleChoice={handleChoice} /> : ""}
      <div className={styles.catecard_more}>{moreCat ? moreCat : ""}</div>
    </div>
  );
}

export default CategoryCard;

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
};
