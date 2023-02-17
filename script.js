let array = ["", "", "", "", "", "", "", "", ""];

const restart = document.querySelector('.restart');
const cases = document.querySelectorAll(".case")
let info = document.querySelector('.info');

let playerMove = "🐻‍❄️";
let computerMove = "🦭";

let currentPlayer = false;

//update array values when case is clicked-----------------------------------------------------//
function play(i) {

    if (array[i] === "" && currentPlayer === false) {
        array[i] = playerMove;
        logInfo("It's seal's turn");
    }
    else if (array[i] === "" && currentPlayer === true) {
        array[i] = computerMove;
        logInfo("It's polar bear's turn");
    }
    currentPlayer = !currentPlayer;
    display();
    checkCombination();
    sound();
}

//display player's moves on board by transferring values from array(js) to cases(html)-----------//
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
    if (array[0] === playerMove && array[1] === playerMove && array[2] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[3] === playerMove && array[4] === playerMove && array[5] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[6] === playerMove && array[7] === playerMove && array[8] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[0] === playerMove && array[3] === playerMove && array[6] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[1] === playerMove && array[4] === playerMove && array[7] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[2] === playerMove && array[5] === playerMove && array[8] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[0] === playerMove && array[4] === playerMove && array[8] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[2] === playerMove && array[4] === playerMove && array[6] === playerMove) {
        logInfo("🐻‍❄️ has won !");
        togglebuttons(true);
        toggleAnimation();
    }
    //wining combo for o--------------------------------------------------------------------------//
    else if (array[0] === computerMove && array[1] === computerMove && array[2] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[3] === computerMove && array[4] === computerMove && array[5] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[6] === computerMove && array[7] === computerMove && array[8] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[0] === computerMove && array[3] === computerMove && array[6] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[1] === computerMove && array[4] === computerMove && array[7] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[2] === computerMove && array[5] === computerMove && array[8] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[0] === computerMove && array[4] === computerMove && array[8] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
    }

    else if (array[2] === computerMove && array[4] === computerMove && array[6] === computerMove) {
        logInfo("🦭 has won !");
        togglebuttons(true);
        toggleAnimation();
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

//toggle beluga jump and make the message bigger when first player wins--------------------------//
function toggleAnimation() {
    let belugaJump = document.querySelector('.beluga');
    belugaJump.classList.add('beluga_anim');
    let waterDrops = document.querySelector('.water');
    waterDrops.classList.add('water_anim');
    let winLog = document.querySelector("h3");
    winLog.classList.add('h3_anim');
    let splash = document.querySelector('.splash');
    splash.volume = 0.1;
    splash.play();
}

//background sound-------------------------------------------------------------------------------//
function sound() {
    let sound = document.querySelector('.sea_sound');
    sound.volume = 0.1;
    sound.play();
    let wind = document.querySelector('.wind_sound');
    wind.volume = 0.5;
    wind.play();
}

//splash sound-----------------------------------------------------------------------------------//
function splash() {

}






