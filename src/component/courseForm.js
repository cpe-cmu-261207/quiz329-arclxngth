import { useState } from "react";

const CourseForm = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  function addPerson() {
    if (name === "" || gender === "" || age === "") {
      alert("please input all data");
    } else {
      const person = { name, gender, age };
      props.setPerson([...props.person, person]);
    }
  }

  return (
    <>
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input"
          placeholder="e.q John Smith"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label className="label">Gender</label>
        <select
          className="input"
          type="text"
          placeholder="Please select .."
          onChange={(e) => setGender(e.target.value)}
          value={gender}
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
          value={age}
        ></input>
      </div>

      <button
        className="button is-primary is-fullwidth"
        onClick={(e) => {
          addPerson(e);
          setName("");
          setGender("");
          setAge("");
        }}
      >
        Submit
      </button>
    </>
  );
};

export default CourseForm;
