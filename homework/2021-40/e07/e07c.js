import React from "react";

function App() {
  let [name, setName] = React.useState("");

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

function Output(setName) {
  return <p>{setName.name}</p>;
}

function Input(click) {
  
return <button onClick={() => click.clicked("tina")}>Click me!</button>;
}


export default App;