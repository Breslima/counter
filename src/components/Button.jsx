import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ children, style, onClick }) => {
  return (
    <Button
      variant={children === "+1" ? "success" : "danger"}
      style={{ marginRight: children === "+1" ? "2rem" : 0 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
