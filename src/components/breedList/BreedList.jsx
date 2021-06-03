import React, { useEffect, useState } from "react";
import axios from "axios";
import CatCard from "../commons/CatCard";

import styles from "./BreedList.module.css";
import up from "../../assets/up.png";

function BreedList() {
  const [breedName, setBreedName] = useState([]);

  /**
   * Component in charge of getting every cats breeds and make a list of it
   * before mapping data, I check if it contains image, if not I do not display the breed.
   */

  useEffect(() => {
    const APIurl = "https://api.thecatapi.com/v1/breeds";
    axios
      .get(APIurl, {
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      })
      .then((res) => res.data)
      .then((data) => {
        const breedNameList = data.map((breed) =>
          breed.image?.url ? (
            <CatCard
              image={breed.image.url}
              origin={breed.origin}
              name={breed.name}
              wiki={breed.wikipedia_url}
              description={breed.description}
              id={breed.image.id}
            />
          ) : (
            ""
          )
        );
        setBreedName(breedNameList);
      });
  }, []);
  return (
    <div className={styles.breed_wrapper}>
      <balise id="hautdepage" />
      {breedName}
      <a href="#hautdepage">
        <img className={styles.breed_up} src={up} alt="retour haut de page" />
      </a>
    </div>
  );
}

export default BreedList;
