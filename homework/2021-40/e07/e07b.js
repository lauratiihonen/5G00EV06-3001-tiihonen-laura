function App() {
  function doIt(name) {
    alert(name)
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
  
return <button onClick={() => click.clicked("tina")}>Click me!</button>;
}


export default App;