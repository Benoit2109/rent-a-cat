import React from "react";

function NextButton({ title, handleChoice }) {
  return (
    <div onClick={handleChoice}>
      <button type="button">{title}</button>
    </div>
  );
}

/** Composant réutilisable bouton, exemple d'utilisation:
 *
 *  <NextButton title="découvrir" handleChoice={()=> handleAccess()}/>
 */

export default NextButton;
