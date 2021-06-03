import React from "react";
import NextButton from "../../components/commons/NextButton";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./Home.module.css";
import cat from "../../assets/cat.png";

function Home() {
  const history = useHistory();
  const handleAccess = () => {
    history.push("/races");
  };
  return (
    <div className={styles.home_wrapper}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rent-a-Cat</title>
        <meta name="author" content="Benoit Le Bourdonnec" />
        <meta
          name="Description"
          content="site permettant aux particulier de louer un chat pour se donner de la contenance"
        />
      </Helmet>
      <h1>RENT-A-CAT</h1>
      <img src={cat} alt="logo chat" />
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
