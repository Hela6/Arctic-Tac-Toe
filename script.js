let array = ["", "", "", "", "", "", "", "", ""];

const restart = document.querySelector('.restart');
const cases = document.querySelectorAll(".case")
let info = document.querySelector('.info');

let playerMove = "x";
let computerMove = "o";

let currentPlayer = false;

//update array values when case is clicked-----------------------------------------------------//
function play(i) {

    if (array[i] === "" && currentPlayer === false) {
        array[i] = "x";
        logInfo("It's player o's turn");
    }
    else if (array[i] === "" && currentPlayer === true) {
        array[i] = "o";
        logInfo("It's player x's turn");
    }
    currentPlayer = !currentPlayer;
    display();
    checkCombination();
}

//display players moves on board by transferring values from array(js) to cases(html)-----------//
function display() {
    for (i = 0; i < array.length; i++) {
        cases[i].textContent = array[i];
    }
}

//log message on game update---------------------------------------------------------------------//
function logInfo(m) {
    info.innerHTML = (m);
}

function checkCombination() {
    //wining combo for x--------------------------------------------------------------------------//
    if (array[0] === "x" && array[1] === "x" && array[2] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[3] === "x" && array[4] === "x" && array[5] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[6] === "x" && array[7] === "x" && array[8] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[0] === "x" && array[3] === "x" && array[6] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[1] === "x" && array[4] === "x" && array[7] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[2] === "x" && array[5] === "x" && array[8] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[0] === "x" && array[4] === "x" && array[8] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }

    else if (array[2] === "x" && array[4] === "x" && array[6] === "x") {
        logInfo("player x has won !");
        togglebuttons(true);
    }
    //wining combo for o--------------------------------------------------------------------------//
    else if (array[0] === "o" && array[1] === "o" && array[2] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[3] === "o" && array[4] === "o" && array[5] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[6] === "o" && array[7] === "o" && array[8] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[0] === "o" && array[3] === "o" && array[6] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[1] === "o" && array[4] === "o" && array[7] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[2] === "o" && array[5] === "o" && array[8] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[0] === "o" && array[4] === "o" && array[8] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[2] === "o" && array[4] === "o" && array[6] === "o") {
        logInfo("player o has won !");
        togglebuttons(true);
    }

    else if (array[0] !== "" && array[1] !== "" && array[2] !== "" &&
        array[3] !== "" && array[4] !== "" && array[5] !== "" &&
        array[6] !== "" && array[7] !== "" && array[8] !== "") {
        logInfo("tied ! Want to start a new game?");
        togglebuttons(true);
    }

}


//toggle buttons when game is ended-------------------------------------------------------------//
function togglebuttons(b) {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.disabled = b;
    })
}






