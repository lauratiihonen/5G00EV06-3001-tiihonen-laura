import { useState, useEffect } from "react";
import Person from "./components/Person.js";

function Calculate() {


  let [name, setName ] = useState("");

  useEffect (() => {
    async function fetchPerson() {
        let hr = await fetch(`https://swapi.dev/api/people/1/`);
        let person = await hr.json();
        setName(person.name);
    }
    fetchPerson();
});


  return <p>{name}</p>;

}

export default Calculate;