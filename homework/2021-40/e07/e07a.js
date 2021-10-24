/*function App() {
  let name = "Jack";
  return (
    <div>
      <Input name = {name}/>
      <Output />
    </div>
  );
}

function Output() {
  return <p>Output</p>;
}

function Input(setName) {
  
return setName.name;
}*/


function App() {
  function doIt() {
    alert("hello")
  }
  return (
    <div>
      <Input clicked={doIt} />
      <Output />
    </div>
  );
}

function Output() {
  return <p>Output</p>;
}

function Input(click) {
  
return <button onClick={click.clicked}>Click me!</button>;
}


export default App;