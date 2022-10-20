import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import BoardUi from "./BoardUi.js";

const useStyles = makeStyles((theme) => ({}));

export default function GameManager() {
  const classes = useStyles();
  const boardArr = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ];

  const [board, setBoard] = useState(boardArr);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winningPlayer, setWinningPlayer] = useState(false);
  const [message, setMessage] = useState("");

  function play(colIndex) {
    if (!winningPlayer && legalMoves().length !== 0) {
      const copy = [...board];
      if (legalMoves().includes(colIndex)) {
        for (let i = 6; i >= 0; i--) {
          if (copy[i][colIndex] === null) {
            copy[i][colIndex] = currentPlayer;
            if (checkWinner() !== 0) {
              setWinningPlayer(true);
              setMessage("Game Over! The winner is Player " + currentPlayer);
              console.log("The winner is Player " + currentPlayer);
              break;
            }
            currentPlayer === 1 ? setCurrentPlayer(2) : setCurrentPlayer(1);
            break;
          }
        }
        setBoard(copy);
      }
    }
  }

  useEffect(() => {
    if (currentPlayer === 2) {
      let timer = setTimeout(() => {
        makeMove();
      }, 800);
      return () => clearTimeout(timer);
    }
  });

  function checkHorizontal() {
    //checking columns from right to left up to index 3
    for (let r = 6; r >= 0; r--) {
      for (let c = 6; c >= 3; c--) {
        if (board[r][c] !== null) {
          if (
            board[r][c] === board[r][c - 1] &&
            board[r][c] === board[r][c - 2] &&
            board[r][c] === board[r][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  function checkVertical() {
    //check rows from bottom up from index 6 to 3
    for (let r = 6; r >= 3; r--) {
      for (let c = 6; c >= 0; c--) {
        if (board[r][c] !== null) {
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  function checkRightVertical() {
    //col index is 3 or less, row index is 3 or greater
    for (let r = 6; r >= 3; r--) {
      for (let c = 3; c >= 0; c--) {
        if (board[r][c] !== null) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  function checkLeftVertical() {
    //col index is 3 or GREATER, row index is 3 or greater
    for (let r = 6; r >= 3; r--) {
      for (let c = 6; c >= 3; c--) {
        if (board[r][c] !== null) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  }

  function checkWinner() {
    return (
      checkHorizontal() ||
      checkVertical() ||
      checkLeftVertical() ||
      checkRightVertical() ||
      0
    );
  }

  function legalMoves() {
    let colList = [];
    for (let i = 0; i < 7; i++) {
      if (board[0][i] === null) {
        colList.push(i);
      }
    }
    return colList;
  }

  function resetBoard() {
    setBoard(boardArr);
    setCurrentPlayer(1);
    setWinningPlayer(false);
    setMessage("");
  }

  function makeMove() {
    // prevent user from clicking if its not your turn
    // if (move = legalMoves().find( cell => legalMoves().includes(checkMoves())) {
    //   return move;
    // }
    let move = legalMoves()[Math.floor(Math.random() * legalMoves().length)];

    play(move);
  }

  return (
    <div>
      <BoardUi
        board={board}
        addClick={play}
        message={message}
        reset={resetBoard}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}
