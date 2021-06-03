import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import NextButton from "../../commons/NextButton";
import CategoryCard from "../../commons/CategoryCard";

import styles from "./Categories.module.css";
import up from "../../../assets/up.png";

function Categories() {
  const [categoriesList, setCategoriesList] = useState("");
  const [categoryCard, setCategoryCard] = useState("");

  /**
   * when click on category button, user can see an example of what kind of cat it is and decide to search for more
   */

  const handleCategory = (id) => {
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
        setCategoryCard(showCat);
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
            handleChoice={() => handleCategory(cat.id)}
          />
        ));
        setCategoriesList(categoriesName);
      });
  }, []);

  return (
    <div className={styles.cat_wrapper}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catégories</title>
        <meta name="author" content="Benoit Le Bourdonnec" />
        <meta
          name="Description"
          content="retrouvez toutes les photos de chats organisés par catégories"
        />
      </Helmet>
      
      <div className={styles.cat_list}>{categoriesList}</div>
      <div className={styles.cat_pic_wrapper}>
        {categoryCard ? categoryCard : ""}
      </div>
      {categoryCard ? (
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
