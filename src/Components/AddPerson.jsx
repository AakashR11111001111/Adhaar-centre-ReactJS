import { useContext, useRef, useState } from "react";
import styles from './AddPerson.module.css'
import AddPersonDetails from "./AddPersonDetails";
import { ContextData } from "../App";

const AddPerson = () => {
  const [form, setForm] = useState(false);
  const ctx = useContext(ContextData);
  const name = useRef("");
  const dob = useRef("");
  const aadhar = useRef("");
  const number = useRef("");
  const age = useRef("");

  const savePerson = ()=>{
    if(name.current.value === "" || age.current.value === "" || dob.current.value === ""|| aadhar.current.value===""||number.current.value ==="") return;
    if(aadhar.current.value.length !== 12 || number.current.value.length !== 10) return;
    ctx.setArrayOsPerson([
        ...ctx.arrayOfPerson,
        {name:name.current.value,
        dob:dob.current.value,
        aadhar:aadhar.current.value,
        number:number.current.value,
        age:age.current.value,
    }]

    )
    setForm(!form)
}

  return (
    <div className={styles.container}>
      <div className={styles.flexColumn}>
        <div className={styles.headerRow}>
          <p className={styles.headerCell}>Name</p>
          <p className={styles.headerCell}>Date of Birth</p>
          <p className={styles.headerCell}>Aadhar Number</p>
          <p className={styles.headerCell}>Mobile Number</p>
          <p className={styles.headerCell}>Age</p>
          <p className={styles.headerCell}>Actions</p>
        </div>
        {ctx.arrayOfPerson.map((ele, idx) => (
          <AddPersonDetails key={idx} {...ele} idx={idx} />
        ))}
        {form && (
          <div className={styles.inputRow}>
            <input ref={name} type="text" placeholder="Name..." className={styles.input} />
            <input ref={dob} type="date" className={styles.input} />
            <input ref={aadhar} type="number" placeholder="Enter Aadhar..." className={styles.input} />
            <input ref={number} type="number" placeholder="Enter number..." className={styles.input} />
            <input ref={age} type="number" placeholder="Enter age..." className={styles.input} />
            <button onClick={savePerson} className={styles.buttonSave}>Save</button>
          </div>
        )}
      </div>
      <button onClick={() => setForm(!form)} className={styles.addButton}>Add Person</button>
    </div>
  );
};

export default AddPerson;
