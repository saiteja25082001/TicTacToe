let boxes = Array.from(document.getElementsByClassName("box"));
let resetBtn = document.querySelector(".reset-button");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function f1(event) {
    console.log("box was clicked");

    if (turnO) {
        event.target.innerText = "X";
        turnO = false;
    } else {
        event.target.innerText = "O";
        turnO = true;
    }

    event.target.removeEventListener("click", f1); // Remove the click event listener
    checkWinner();
}

boxes.forEach((box) => box.addEventListener("click", f1));

function f3() {
    boxes.forEach((box) => {
        box.removeEventListener("click", f1);
    });
}

function checkWinner() {
    for (let pattern of winPatterns) {
        if (
            boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
            boxes[pattern[0]].innerText === boxes[pattern[2]].innerText &&
            boxes[pattern[0]].innerText !== "" &&
            boxes[pattern[2]].innerText !== ""
        ) {
            console.log("winner " + boxes[pattern[0]].innerText);
            f3();
            break;
        }
    }
}

function msg() {
    for (let box of boxes) {
        box.innerText = "";
        box.addEventListener("click", f1);
    }
}

resetBtn.addEventListener("click", msg);
