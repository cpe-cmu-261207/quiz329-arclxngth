import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";
import CourseForm from "./component/courseForm";

function App() {
  //add useState for all state variables

  const [person, setPerson] = useState([]);

  //load locationStorage
  useEffect(() => {
    if (localStorage.getItem("items") != null) {
      const items = localStorage.getItem("items");
      const data = JSON.parse(items);
      setPerson(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(person));
  }, [person.length]);

  function renderPerson() {
    return person.map((value) => {
      return <ItemTable {...value} key={Math.random()} />;
    });
  }

  function clearLocal() {
    localStorage.clear();
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>

        <div>
          <CourseForm setPerson={setPerson} person={person} />
        </div>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        {renderPerson()}
        <p>TOH HONG LENG 620610819</p>
        {/* <button onClick={clearLocal}>CLEAR</button> */}
      </div>
    </div>
  );
}

export default App;
