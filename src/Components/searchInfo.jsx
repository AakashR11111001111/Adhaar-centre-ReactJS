import { useContext, useRef, useState } from "react";
import { ContextData } from "../App";
import SearchList from "./SearchList";
import styles from './SearchInfo.module.css';

const SearchInfo = () => {
  const ctx = useContext(ContextData);
  const [dataArray, setDataArray] = useState([]);
  const [error, setError] = useState(null);
  const aadharRef = useRef("");

  const findTheValue = () => {
    const aadharValue = aadharRef.current.value;
    if (aadharValue === "") {
      setError("Please enter a valid Aadhar number.");
      return;
    }

    if (aadharValue.length !== 12 || isNaN(aadharValue)) {
      setError("Aadhar number must be 12 digits and numeric.");
      return;
    }

    const result = ctx.arrayOfPerson.filter((ele) => ele.aadhar === aadharValue);

    if (result.length === 0) {
      setError("No records found for this Aadhar number.");
    } else {
      setDataArray(result);
      setError(null); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          ref={aadharRef}
          className={styles.input}
          type="text"
          placeholder="Enter Aadhar Number..."
        />
        <button
          onClick={findTheValue}
          className={styles.buttonFind}
        >
          Find
        </button>
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}

      <div className={styles.resultsContainer}>
        {dataArray.map((ele, idx) => (
          <SearchList
            key={idx}
            name={ele.name}
            dob={ele.dob}
            aadhar={ele.aadhar}
            number={ele.number}
            age={ele.age}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInfo;
