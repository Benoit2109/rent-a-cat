import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from './BreedList.module.css';
import CatCard from "../commons/CatCard";

function BreedList() {
  const [breedName, setBreedName] = useState([]);

  /**
   * Component in charge of getting every cats breeds and make a list of it
   */

  useEffect(() => {
    const APIurl = "https://api.thecatapi.com/v1/breeds";
    axios
      .get(APIurl, {
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` },
      })
      .then((res) => res.data)
      .then((data) => {
          console.log(data)
        const breedNameList = data.map((breed) => breed.image? <CatCard image={breed.image?.url} origin={breed.origin} name={breed.name} wiki={breed.wikipedia_url} description={breed.description}/>:"");
        setBreedName(breedNameList);
      });
  }, []);
  return (
    <div className={styles.breed_wrapper}>
        {breedName}
    </div>
  );
}

export default BreedList;
