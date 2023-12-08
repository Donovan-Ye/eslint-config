import React, { useState } from "react";

function Example({prop1})  {
  // Declare a new state variable, which we'll call "count"
  const [count, 
    setCount] =      useState(0);

  return (
    <div>
      <p>{`Here to display ${prop1}.`}</p>
      <p>
        {`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
