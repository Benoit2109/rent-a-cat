import React from "react";
import styles from "./NextButton.module.css";

function NextButton({ title, handleChoice }) {
  return (
    <div onClick={handleChoice}>
      <button type="button" className={styles.next_btn}>
        {title}
      </button>
    </div>
  );
}

/** Reusable button component.
 *
 * Ex:
 *
 *  <NextButton title="Découvrir" handleChoice={()=> handleAccess()}/>
 */

export default NextButton;
