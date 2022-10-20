import React from "react";
import { Container, Box } from "@mui/material";
import Row from "./Row.js";

export default function BoardUi(props) {
  return (
    <Container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 5,
        padding: 5
      }}
    >
      <Box
        style={{
          backgroundColor: "#3782E2",
          width: 800,
          height: 700,
          paddingTop: 28,
          borderRadius: 50
        }}
      >
        {props.board.map((row, index) => (
          <Row
            row={row}
            key={index}
            clicked={props.addClick}
            currentPlayer={props.currentPlayer}
          />
        ))}
      </Box>
      <div>
        <button onClick={() => props.reset()}>Reset</button>
      </div>
      <div> {props.message} </div>
    </Container>
  );
}
