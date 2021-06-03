import React from "react";
import NextButton from "../commons/NextButton";
import { useHistory } from "react-router-dom";

import styles from "./Home.module.css";
import cat from "../../assets/cat.png";

function Home() {
  const history = useHistory();
  const handleAccess = () => {
    history.push("/races");
  };
  return (
    <div className={styles.home_wrapper}>
      <h1>RENT-A-CAT</h1>
      <img src={cat} alt="logo chat"/>
      <p>Vivez une nouvelle expérience avec un chat, louez-le.</p>
      <p>
        Comme beauoup de nos clients, avoir un chat à temps complet est un
        cauchemar pour vous?
      </p>
      <p>
        Profitez du meilleur, donnez vous du style et rendez-le quand vous n'en
        avez plus besoin.
      </p>
      <NextButton title="Découvrir" handleChoice={() => handleAccess()} />
    </div>
  );
}

export default Home;
