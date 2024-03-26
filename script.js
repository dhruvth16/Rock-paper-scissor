let userScore = 0;
let computerScore = 0;

const userChoice = document.querySelector(".options");
const result1 = document.querySelector(".user");
const result2 = document.querySelector(".comp");
const resultMessage = document.querySelector("h4");
const userIcon = document.querySelector(".icon1");
const computerIcon = document.querySelector(".icon2");

var timer = 30;
function runtimer() {
    var timeint = setInterval(settimer, 1000);
    function settimer() {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector(".bottom").innerHTML = `<h1>GAME OVER</h1>`;

            if (`${userScore}` > `${computerScore}`) {
                resultMessage.textContent = "You won the game!";

            } else if (`${userScore}` < `${computerScore}`) {
                resultMessage.textContent = "You lose the game!";

            } else {
                resultMessage.textContent = "It's a tie!";
            }
        }
    }

}


function startGame(userChoice) {
    const choices = ["✊", "🤚", "✌️"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (userChoice === computerChoice) {
        resultMessage.textContent = "It's a tie!";
        userIcon.textContent = userChoice;
        userIcon.style.fontSize = "2.5rem";
        computerIcon.style.fontSize = "2.5rem";
    } else if (userChoice === "✊" && computerChoice === "✌️") {
        userScore += 10;
        resultMessage.textContent = "You win!";
        userIcon.textContent = userChoice;
        userIcon.style.fontSize = "2.5rem";
        computerIcon.style.fontSize = "2.5rem";
    } else if (userChoice === "🤚" && computerChoice === "✊") {
        userScore += 10;
        resultMessage.textContent = "You win!";
        userIcon.textContent = userChoice;
        userIcon.style.fontSize = "2.5rem";
        computerIcon.style.fontSize = "2.5rem";
    }
    else if (userChoice === "✌️" && computerChoice === "🤚") {
        userScore += 10;
        resultMessage.textContent = "You win!";
        userIcon.textContent = userChoice;
        userIcon.style.fontSize = "2.5rem";
        computerIcon.style.fontSize = "2.5rem";
    }
    else {
        computerScore += 10;
        resultMessage.textContent = "You lose!";
        computerIcon.style.fontSize = "2.5rem";
    }
    result1.textContent = `Your score: ${userScore}`;
    result2.textContent = `Computer score: ${computerScore}`;
    userIcon.textconent = `${userChoice}`;
    computerIcon.textContent = `${computerChoice}`;
}

runtimer();