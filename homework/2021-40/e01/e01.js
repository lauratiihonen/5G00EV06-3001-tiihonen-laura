import React from "react";

function Calculate() {

    let [result, setResult] = React.useState(5);


    // ES6 style function, you can also use traditional approach
    const click = () => {
      setResult(Math.random());
    };
  
    return (
      <div>
        <button onClick={click}>Calculate</button>
        <p>Result = {result}</p>
      </div>
    );
  }

  export default Calculate;