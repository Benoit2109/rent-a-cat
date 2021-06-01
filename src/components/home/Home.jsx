import React from "react";
import NextButton from "../commons/NextButton";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const handleAccess = () => {
    history.push("/allcats");
  };
  return (
    <div>
      <h1>RENT-A-CAT</h1>
      <p>Share the new way of enjoying cats, rent it</p>
      <p>
        You feel like many of our customers and think that having a full-time
        cat can be a nightmare?
      </p>
      <p>
        Just enjoy the best of it, seduce the girl next door on a date and give
        it back when not needed anymore
      </p>
      <NextButton title="découvrir" handleChoice={() => handleAccess()} />
    </div>
  );
}

export default Home;
