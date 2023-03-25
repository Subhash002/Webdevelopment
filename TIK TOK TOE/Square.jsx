import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
const Square = ({ value, OnSquareClick }) => {
  return (
    <Button className="square" variant="outlined" onClick={OnSquareClick}>
      {value}
    </Button>
  );
};

export default Square;
