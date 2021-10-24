import { useState } from "react";

function App() {
  let [name, setName] = useState("");

  function doIt(name) {
    alert(name)
    setName(name);
  }

  return (
    <div>
      <Input clicked={doIt} />
      <Output name={name} />
    </div>
  );
}

function Output(displayName) {
  return <p>{displayName.name}</p>;
}

function Input(click) {
  
return (
  <div>
    <input
      type="text"
      placeholder="name"
      onChange={(event) => setName(event.target.value)}
    />
    <button onClick={(event) => click.clicked(event.target.value)}>Click me!</button>

</div>
);
}


export default App;