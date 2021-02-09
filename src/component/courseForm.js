import { useState } from "react";

const CourseForm = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  function addPerson() {
    const person = { name, gender, age };
    // console.log(person);
    props.setPerson([...props.person, person]);
  }

  return (
    <>
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input"
          placeholder="e.q John Smith"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="label">Gender</label>
        <select
          className="input"
          type="text"
          placeholder="Please select .."
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled selected hidden>
            -- Select Gender --
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="field">
        <label className="label">Age</label>
        <input
          className="input"
          type="number"
          placeholder="e.q 30"
          onChange={(e) => setAge(e.target.value)}
        ></input>
      </div>

      <button className="button is-primary is-fullwidth" onClick={addPerson}>
        Submit
      </button>
    </>
  );
};

export default CourseForm;
