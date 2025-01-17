let box = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgConta = document.querySelector(".msg-container");
let hide = document.querySelector(".hide");
let newGame = document.querySelector(".newGame");
let reset = document.querySelector(".reset");

// player are gave a input.
let turnO = true; //  playerO is active

// All winning pattern in game with a index
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

box.forEach((boxs) => {
  boxs.addEventListener("click", () => {
    console.log("box was click!");

    // specifing the condition.
    if (turnO) {
      boxs.innerText = "O";
      turnO = false;
    } else {
      boxs.innerText = "X";
      turnO = true;
    }
    boxs.disabled = true;
    checkWinner();
  });
});

const disabledBoxs = () => {
    for(let boxs of box){
        boxs.disabled = true;
    }
}

const enabledBoxs = () => {
    for(let boxs of box){
        boxs.disabled = false;
        boxs.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgConta.classList.remove("hide");
    disabledBoxs();
}

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = box[pattern[0]].innerText;
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("win", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
    turnO = true;
    enabledBoxs();
    msgConta.classList.add("hide");
}

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
