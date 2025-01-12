import { useContext } from "react";
import styles from "./AddPersonDetails.module.css";
import { ContextData } from "../App";

const AddPersonDetails = ({ name, dob, aadhar, number, age, idx }) => {
  const ctx = useContext(ContextData);

  const deleteItem = () => {
    const copy = ctx.arrayOfPerson.filter((_, index) => index !== idx);
    ctx.setArrayOfPerson(copy);
  };

  return (
    <div className={styles.container}>
      <p className={`${styles.cell} ${styles.name}`}>{name}</p>
      <p className={`${styles.cell} ${styles.dob}`}>{dob}</p>
      <p className={`${styles.cell} ${styles.aadhar}`}>{aadhar}</p>
      <p className={`${styles.cell} ${styles.number}`}>{number}</p>
      <p className={`${styles.cell} ${styles.age}`}>{age}</p>
      <button onClick={deleteItem} className={`${styles.cell} ${styles.action}`}>
        Delete
      </button>
    </div>
  );
};

export default AddPersonDetails;
