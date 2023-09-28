import React, { useState } from "react";
import CustomButton from "./Button";
import Count from "./Count";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const subtractOne = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: "4rem" }}>
      <Count count={count} />

      <CustomButton onClick={() => setCount(count + 1)}>+1</CustomButton>
      <CustomButton onClick={subtractOne}>-1</CustomButton>
    </div>
  );
};

export default Counter;
