import React, { useState, useEffect } from "react";
import axios from "axios";
import NextButton from "../commons/NextButton";
import CategoryCard from "../commons/CategoryCard";

import styles from "./Categories.module.css";
import up from "../../assets/up.png";

function Categories() {
  const [categoriesList, setCategoriesList] = useState("");
  const [categorieCard, setCategorieCard] = useState("");

  /**
   * when click on category button, user can see an example of what kind of cat it is and decide to search for more
   */

  const handleCategorie = (id) => {
    const APIurl = `https://api.thecatapi.com/v1/images/search?category_ids=${id}`;
    axios
      .get(APIurl, {
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      })
      .then((res) => res.data)
      .then((data) => {
        const showCat = data.map((cat) => (
          <CategoryCard
            image={cat.url}
            title="voir plus"
            category={cat.categories[0].id}
            key={cat.id}
          />
        ));
        setCategorieCard(showCat);
      });
  };

  /**
   * When component is mounted, categories are loaded into button to make user choice easier
   */

  useEffect(() => {
    const APIurl = "https://api.thecatapi.com/v1/categories";
    axios
      .get(APIurl, {
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      })
      .then((res) => res.data)
      .then((data) => {
        const categoriesName = data.map((cat) => (
          <NextButton
            key={cat.name}
            title={cat.name}
            handleChoice={() => handleCategorie(cat.id)}
          />
        ));
        setCategoriesList(categoriesName);
      });
  }, []);

  return (
    <div className={styles.cat_wrapper}>
      <span id="hautdepage" />
      <div className={styles.cat_list}>{categoriesList}</div>
      <div className={styles.cat_pic_wrapper}>
        {categorieCard ? categorieCard : ""}
      </div>
      {categorieCard ? (
        <a href="#hautdepage">
          <img className={styles.cat_up} src={up} alt="retour haut de page" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}

export default Categories;
