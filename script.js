
// assign variables
let userScoreInput = document.getElementById('userScore');
let  computerScoreInput = document.getElementById('computerScore');
let drawScoreInput = document.getElementById('drawScore');
const  rockButton = document.getElementById('rockButton');
const  paperButton = document.getElementById('paperButton');
const  scissorsButton = document.getElementById('sicssorsButton');
let resultWrapper = document.querySelector('.result-wrapper div');
// initialise scores for use in functions
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let computerRoll;
let humanRoll;
// the computers roll
let roll = () => {
    let randomNumber = Math.floor((Math.random() * 100)+1);
    if (randomNumber <	33) {
             computerRoll = 'rock';
    }
    else if (randomNumber <= 66) {
         computerRoll = 'paper';
    }
    else if (randomNumber >	67) {
         computerRoll = 'scissors';
    }
};
// the return message function
let resultMessage = (a, b, c, d) => {
        let resultsH2 = document.querySelector('.result-inner h2');
        let resultP = document.querySelector('.result-inner p');
        
        resultsH2.innerHTML = ` You ${a}`;
        resultP.innerHTML = `Your ${b} , ${c} the computers ${d}`;
        resultWrapper.style.opacity = '1';

        return
        // a - win ,draw, lose
        //  beats, loses to , draws with 
        // c - user selectiom
        // d - computer selection
}
let boxDisappear = () => {
    resultWrapper.style.opacity = 0;
}
// read user input move and validate 
rockButton.addEventListener('click', () => {
        roll()
        humanRoll = 'rock';
        if (computerRoll === 'rock') {
            resultMessage('draw',humanRoll, 'draws with', computerRoll);
            drawScore++;
            drawScoreInput.innerHTML = drawScore;
        } else if (computerRoll === 'paper') {
            resultMessage('Lose',humanRoll, 'Loses to', computerRoll);
            computerScore++;
            computerScoreInput.innerHTML = computerScore;
        } else if (computerRoll === 'scissors') {
            resultMessage('Win',humanRoll, 'beats', computerRoll);
            userScore++;
            userScoreInput.innerHTML = userScore;
        }
})
paperButton.addEventListener('click', () => {
    roll()
    humanRoll = 'paper';
    if (computerRoll === 'paper') {
        resultMessage('Draw',humanRoll, 'draws to', computerRoll);
        drawScore++;
        drawScoreInput.innerHTML = drawScore;
    } else if (computerRoll === 'rock') {
        resultMessage('Win',humanRoll, 'beats', computerRoll);
        userScore++;
        userScoreInput.innerHTML = userScore;
    } else if (computerRoll === 'scissors') {
        resultMessage('Lose',humanRoll, 'loses to', computerRoll);
        computerScore++;
        computerScoreInput.innerHTML = computerScore;
    }
})
scissorsButton.addEventListener('click', () => {
    roll()
    humanRoll = 'scissors';
    if (computerRoll === 'scissors') {
        resultMessage('Draw',humanRoll, 'draws to', computerRoll);
        drawScore++;
        drawScoreInput.innerHTML = drawScore;
    } else if (computerRoll === 'rock') {
        resultMessage('Lose',humanRoll, 'loses to', computerRoll);
        computerScore++;
        computerScoreInput.innerHTML = computerScore;
    } else if  (computerRoll === 'paper') {
        resultMessage('Win',humanRoll, 'beats', computerRoll);
        userScore++;
        userScoreInput.innerHTML = userScore;
    }
})

 




// rock = 0
// paper = 1
// scissors = 2
