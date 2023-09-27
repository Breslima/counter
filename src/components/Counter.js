import React, { useState } from "react";
import CustomButton from "./Button";
//import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const subtractOne = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ margin: "4rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>{count}</h1>
      <CustomButton
        variant="success"
        style={{ marginRight: "1rem" }}
        onClick={() => setCount(count + 1)}
      >
        {" "}
        +1
      </CustomButton>
      <CustomButton variant="danger" onClick={subtractOne}>
        -1
      </CustomButton>
    </div>
  );
};

export default Counter;
