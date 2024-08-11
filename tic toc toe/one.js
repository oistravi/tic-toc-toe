
let boxes = Array.from(document.querySelectorAll(".box"));

let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerX,playerO
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// Reset game to initial state
let resetGame = function () {
    turn0 = true;
    enableBoxes();
    if (msgContainer) {
        msgContainer.classList.add("hide");
    }
};
// Event listener for each box
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (turn0) {
            //player0
            box.innerText = "0";
            turn0 = false;
        }
        else {
            //player X
            box.innerText = "X";
            turn0 = true;
        }
        box.style.pointerEvents = 'none'; // Disabling box click
        checkWinner();
    });
});
// Disable all boxes
let disableBoxes = function () {
    for (let _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        let box = boxes_1[_i];
        box.style.pointerEvents = 'none'; // Disabling box click
    }
};
// Enable all boxes
let enableBoxes = function () {
    for (let _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        let box = boxes_2[_i];
        box.style.pointerEvents = 'auto'; // Enable click events
        box.innerText = "";
    }
};
// Show winner message
let showWinner = function (winner) {
    if (msg) {
        msg.innerText = "\uD83C\uDF89 Congratulations! The winner is ".concat(winner, " \uD83C\uDFC6");
    }
    if (msgContainer) {
        msgContainer.classList.remove("hide");
    }
    disableBoxes();
};
// Check if there's a winner
let checkWinner = function () {
    for (let _i = 0, winPatterns_1 = winPatterns; _i < winPatterns_1.length; _i++) {
        let pattern = winPatterns_1[_i];
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};
// Add event listeners for reset and new game buttons
if (newGameBtn) {
    newGameBtn.addEventListener("click", resetGame);
}
if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
}
