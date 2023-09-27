import React from "react";
import { Button } from "react-bootstrap";

const CustomButton = ({ children, variant, style, onClick }) => {
  return (
    <Button variant={variant} style={style} onClick={onClick}>
      {children}
    </Button>
  );
};
export default CustomButton;
