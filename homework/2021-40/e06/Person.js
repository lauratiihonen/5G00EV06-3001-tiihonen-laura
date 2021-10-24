import { useState, useEffect } from "react";
import App from '../App';

function Person(props) {

  let [name, setName ] = useState("");


  useEffect (() => {
    async function fetchPerson() {
        let hr = await fetch(`https://swapi.dev/api/people/${props.id}/`);
        let person = await hr.json();
        setName(person.name);
    }
    fetchPerson();
},[props.id]);


return (
  <div>
    <h1>Star wars API</h1>
    <input placeholder="give id" onChange={e => App(e.target.value)}/>
    <p>Name: {name}</p>
    </div>
)

}

  
export default Person;