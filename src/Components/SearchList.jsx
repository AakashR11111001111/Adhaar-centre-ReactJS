import styles from './SearchList.module.css';

const SearchList = ({ name, dob, aadhar, number, age }) => {
  return (
    <div className={styles.card}>
      <p>NAME : {name}</p>
      <p>DOB : {dob}</p>
      <p>AADHAR : {aadhar}</p>
      <p>NUMBER : {number}</p>
      <p>AGE : {age}</p>
    </div>
  );
};

export default SearchList;
