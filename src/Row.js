import React from "react";
import Cell from "./Cell.js";
import { Stack } from "@mui/material";

export default function Row(props) {
  return (
    <Stack direction={"row"} spacing={3} justifyContent={"center"} padding={1}>
      {props.row.map((cell, index) => (
        <Cell
          contents={cell}
          cellClicked={props.clicked}
          cellIndex={index}
          key={index}
          currentPlayer={props.currentPlayer}
        />
      ))}
    </Stack>
  );
}
