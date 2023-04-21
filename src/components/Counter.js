import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1>{number} </h1>
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
