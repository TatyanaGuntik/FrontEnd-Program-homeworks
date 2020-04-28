function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (confirm('Do you want to play a game?') === true) {

    const maxPrize = 100;
    const middlePrize = 50;
    const minPrize = 25;

    let val = startGame([maxPrize, middlePrize, minPrize]);

    alert('Thank you for your participation. Your prize is: ' + val + ' $');

} else {
    alert('You did not become a billionaire, but can.');
}

function startGame(piseConfig) {
    let i = 1;
    let prise = 0;
    let cicle = true;

    while (cicle === true) {
        prise += playGame(piseConfig, i, prise) * i;

        if (prise !== 0) {
            alert('Congratulation, you won! Your prize is: ' + prise + ' $.');
        } else {
            alert('Thank you for your participation. Your prize is: 0 $');
        }

        if (!confirm('Do you want to play again?')) {
            return prise;
        }
        i++;
    }
}

function playGame(piseConfig, i, prise) {

    const maxRand = 5;
    const gameCicle = 4;

    let ballNum = randomNum(0, maxRand * i);
    let countOfTry = 1;

    while (countOfTry < gameCicle) {
        let userAnswer = prompt(
            'Choose a roulette pocket number from 0 to ' + maxRand * i +
            '\nAttempts left: ' + (gameCicle - countOfTry) +
            '\nTotal prize: ' + prise +
            '\nPossible prize on current attempt: ' + piseConfig[countOfTry - 1]
        );

        if (Number(userAnswer) === ballNum) {
            return piseConfig[countOfTry - 1]
        }
        countOfTry++;
    }

    return 0;
}



