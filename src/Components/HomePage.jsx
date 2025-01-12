import { useState } from "react";
import styles from "./HomePage.module.css";
import MainContainer from "./MainContainer";

const HomePage = () => {
  const [heading, setHeading] = useState(true);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Laxmi Chit Fund</h1>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setHeading(true)}
          className={styles.button}
        >
          Add New Person
        </button>
        <button
          onClick={() => setHeading(false)}
          className={styles.button}
        >
          Retrieve Information
        </button>
      </div>
      <MainContainer heading={heading ? "Add New Person" : "Retrieve Information"} flag={heading} />
    </div>
  );
};

export default HomePage;
