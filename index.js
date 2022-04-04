console.log("Welcome to Tic-tac-toe");

let turn = "X";
let isGameOver = false;
let turnAudio = new Audio("ting.mp3");

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//logic for winning situation --->
const checkWin = () => {
  const boxValue = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxValue[e[0]].innerText === boxValue[e[1]].innerText &&
      boxValue[e[2]].innerText === boxValue[e[1]].innerText &&
      boxValue[e[0]].innerText !== ""
    ) {
      isGameOver = true;
      document.querySelector(".turnInfo").innerText = `The Winner is : ${
        boxValue[e[0]].innerText
      }.`;
      document.querySelector(".gif").style.display = "block";
    }
  });
};

//Game Logic---->
let boxItem = document.getElementsByClassName("item");
console.log("boxItem", boxItem);
Array.from(boxItem).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnAudio.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName(
          "turnInfo"
        )[0].innerText = `It's ${turn} turn.`;
      } else {
        setTimeout(() => {
          handleReset();
        }, 3000);
      }
    }
  });
});

// reset button onclick---
document.querySelector(".reset").addEventListener("click", () => {
  handleReset();
});

const handleReset = () => {
  let value = document.querySelectorAll(".boxText");
  Array.from(value).forEach((e) => {
    e.innerText = "";
    console.log("resettt");
  });
  isGameOver = false;
  document.querySelector(".gif").style.display = "none";
  document.getElementsByClassName(
    "turnInfo"
  )[0].innerText = `It's ${turn} turn.`;
};
