import AddPerson from "./AddPerson";
import SearchInfo from "./searchInfo";
import styles from "./MainContainer.module.css";

const MainContainer = ({ heading, flag }) => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>{heading}</p>
      {flag ? <AddPerson /> : <SearchInfo />}
    </div>
  );
};

export default MainContainer;
