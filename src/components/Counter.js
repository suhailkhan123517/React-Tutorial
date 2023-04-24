import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const theme = useContext(ThemeContext);

  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h1 className={`counter ${theme}`}>{number} </h1>
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
