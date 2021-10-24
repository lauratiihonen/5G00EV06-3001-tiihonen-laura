import { useState } from "react";

function Calculate() {

  let [customers, setCustomers] = useState([{name: "james"}, {name: "paul"}])
  let [name, setName] = useState("");

  let addCustomers = [{name: "james"}, {name: "paul"}]

function clicked() {
    addCustomers.push({name})
   // addCustomers.push({name: "pekka"})
    setCustomers(addCustomers);
}

const listItems = customers.map((customer) =>
<th key={customer}> {customer.name}</th>
);

function deleted(e) {
  delete listItems[e];
  setCustomers(listItems);
}



/*
    return (
      <div>
        <ul>
          <li key="0">james</li>
          <li key="1">paul</li>
          {listItems}
        </ul>
)*/

return (
      <div>
        <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
          {
          Object.entries(listItems)
            .map(([key, val]) => 
            <div>
              <tr key={key}>{key}{val}
                <th> 
              <button id = {key} onClick={(event) => deleted(event.target.value)}>Delete</button>
                </th>
              </tr>
            </div>
            )
          }
          </table>
        <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
        />
        <button onClick={clicked}>add</button>


      </div>
    );
  }

  export default Calculate;