import React from "react";
import Box from "@mui/material/Box";

export default function Cell(props) {
  let color = "#464646";
  if (props.contents === 1) {
    color = "red";
  } else if (props.contents === 2) {
    color = "yellow";
  }

  function handleClick(e) {
    //prevent user 1 from clicking when it is AI's turn
    if (props.currentPlayer === 1) {
      props.cellClicked(props.cellIndex);
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: color,
        width: 80,
        height: 80,
        borderRadius: 50,
        boxShadow: "inset -10px -10px 15px rgba(0, 0, 0, 0.45)"
      }}
      onClick={handleClick}
    />
  );
}
